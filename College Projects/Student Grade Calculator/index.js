let button = document.querySelector('.bttn');
let marks = document.querySelector('.marks-display p')
button.addEventListener('click', ()=>{
    let dms = document.querySelector("#dms").value;
    let coa = document.querySelector("#coa").value;
    let dsa = document.querySelector("#dsa").value;
    let ebi = document.querySelector("#ebi").value;
    let web = document.querySelector("#webd").value;
    let pom = document.querySelector("#pom").value;
    let pe = document.querySelector("#pe").value;
    dms = parseFloat(dms);
    coa = parseFloat(coa);
    dsa = parseFloat(dsa);
    ebi = parseFloat(ebi);
    web = parseFloat(web);
    pom = parseFloat(pom);
    pe = parseFloat(pe);
    let sum = dms + coa + dsa + ebi + web + pom + pe;
    let cgpa = sum / 700;
    cpga = cgpa * 10;
    console.log(cgpa);
    marks.innerHTML = `CGPA is ${cgpa}`
});