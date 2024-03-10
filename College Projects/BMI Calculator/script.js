document.querySelector('.getResult').addEventListener('click', () => {
    let weight = document.querySelector('.weight');
    let height = document.querySelector('.height');
    
    let BMI = eval(weight / (height * height));
    document.querySelector('.BMI').innerHTML = BMI;
});