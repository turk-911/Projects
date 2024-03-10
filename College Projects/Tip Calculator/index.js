document.querySelector('.btn button').addEventListener('click', ()=>{
    let amt = document.querySelector('.amount').value;
    let percent = document.querySelector('.percent').value;
    let display = document.querySelector('.display');
    let tipAmt = (amt * percent) / 100;
    display.innerHTML = `The tip value is ${tipAmt}`;
})