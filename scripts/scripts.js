'use strict'

let button = document.querySelector('.input-button');
let input = document.querySelector('.footer-input')
let popup=document.getElementById("popup");
//let str=" jhbhb okbhb njhvh ebhb sbjhbhb";
//let matches = str.match(/\b(\w)/g);
//let acronym = matches.join(' '); 


function bbb(e) {
    
    let a = input.value;
     e.preventDefault();
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if (a.match(mailformat)) {
        popup.classList.add("open-popup")
        document.getElementById("buttonIn").style.borderColor = 'green';
        document.getElementById("inputId").style.color = 'green';
        return true;
    }
    else {
        popup.classList.remove("open-popup");
        document.getElementById("buttonIn").style.borderColor = 'red';
        document.getElementById("inputId").style.color = 'red';
        return false;
    }
}
button.addEventListener('click', bbb);


/////////////////////////////////////////////
function closePopup(){
    popup.classList.remove("open-popup")
}
////////////////////////////////////////

let startplanbutton = document.getElementById('starter-button');
let silverbutton = document.getElementById('silver-button');
let dimondbutton = document.getElementById('dimond-button');
let span = document.getElementById('right-cart-icon')

startplanbutton.addEventListener('click', () => {
    document.getElementById('right-cart-icon').classList.remove('right-cart-third');
    document.getElementById('right-cart-icon').classList.remove('right-cart-second');
    document.getElementById('right-cart-icon').classList.add('right-cart-first');
})
silverbutton.addEventListener('click', () => {

    document.getElementById('right-cart-icon').classList.remove('right-cart-third');
    document.getElementById('right-cart-icon').classList.remove('right-cart-first');
    document.getElementById('right-cart-icon').classList.add('right-cart-second');
})
dimondbutton.addEventListener('click', () => {
    document.getElementById('right-cart-icon').classList.remove('right-cart-first');
    document.getElementById('right-cart-icon').classList.remove('right-cart-second');
    document.getElementById('right-cart-icon').classList.add('right-cart-third');
})