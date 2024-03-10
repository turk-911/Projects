document.querySelector('button').addEventListener('click',()=>{
    let billAmt = document.querySelector('.billAmt').value;
    let notes = [500, 200, 100, 50, 20, 10, 5, 1];
    let notes500, notes200, notes100, notes50, notes20, notes10, notes5, notes1;
    let denominations = [];
    for(let i = 0; i < 8; i++){
        let a = billAmt / notes[i];
        a = parseInt(a);
        if(a){
            denominations[i] = a;
            billAmt -= (notes[i] * denominations[i]);
        }
        else{
            denominations[i] = 0;
        }
    }
    document.querySelector(".n500").innerHTML = `The number of 500 notes required are: ${denominations[0]}`;
    document.querySelector(".n200").innerHTML = `The number of 200 notes required are: ${denominations[1]}`;
    document.querySelector(".n100").innerHTML = `The number of 100 notes required are: ${denominations[2]}`;
    document.querySelector(".n50").innerHTML = `The number of 50 notes required are: ${denominations[3]}`;
    document.querySelector(".n20").innerHTML = `The number of 20 notes required are: ${denominations[4]}`;
    document.querySelector(".n10").innerHTML = `The number of 10 notes required are: ${denominations[5]}`;
    document.querySelector(".n5").innerHTML = `The number of 5 notes required are: ${denominations[6]}`;
    document.querySelector(".n1").innerHTML = `The number of 1 notes required are: ${denominations[7]}`;
});