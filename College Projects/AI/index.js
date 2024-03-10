const generateForm = document.querySelector('.generate-form');
const generateBtn = document.querySelector('.generate-btn');
const imageGallery = document.querySelector('.image-gallery');
const key = 'v8CpAzN8E37wc9jAFbR1T3BlbkFJlJBVUArEXGAFDxaaYouh';
let flag = false;
const updateImageCard = (imgDataArray) => {
    imgDataArray.forEach((imgObject, index) => {
        const imgCard = document.querySelector('.img-card')[index];
        const imgElement = document.querySelector('img');
        const downloadButton = document.querySelector('.download-btn');
        const imageGenerated = `data:image/jpeg;base64,${imgObject.b64_json}`;
        imgElement.src = imageGenerated;
        imgElement.onload = ()=>{
            imgCard.classList.remove('loading');
            downloadButton.setAttribute('href', imageGenerated);
            downloadButton.setAttribute('download', `${new Date().getTime()}.jpg`);
        }
    });
}
const generateAIImages = async (userPrompt, userImgQuantity) => {
    try{
        const response = await fetch('http://api.openai.com/v1/images/generations', {
            method: "POST",
            headers: {
                'Content-type' : 'application/json',
                'Authorisation': `Bearer ${key}`,
            },
            body: JSON.stringify({
                prompt: userPrompt,
                n: userImgQuantity,
                size: '512 x 512',
                response_format: 'b64_json'
            }),
        });
        if(!response.ok){
            throw new Error('Failed to generate Images');
        }
        const { data } = await response.json();
        updateImageCard([...data]);
    }
    catch(error){
        alert(error.message);
    }
    finally{
        generateBtn.removeAttribute('disabled');
        generateBtn.innerHTML = 'Generate';
        flag = false;
    }
};
const handleImageGeneration = (e)=>{
    e.preventDefault();
    if(flag){
        return;
    }
    const userPrompt = e.srcElement[0].value;
    const userImgQuantity = parseInt(e.srcElement[1].value);
    generateBtn.setAttribute('disabled', true);
    generateBtn.innerHTML = 'Generating';
    flag = true;

    const imgCardMarkup = Array.from({length: userImgQuantity}, ()=>{
        `<div class='img-card loading'>
        <img src=loader.svg' alt='AI Working at your service'>
        <a class='download-btn' href='#'></a>
        </div>`
    }).join("");
    imageGallery.innerHTML = imgCardMarkup;
    generateAIImages(userPrompt, userImgQuantity);
}

generateForm.addEventListener('submit', handleImageGeneration);