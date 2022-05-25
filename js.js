$(document).ready(function(){
var root = document.querySelector(':root')
var items = document.querySelectorAll('.item-color');
var items2 = document.querySelectorAll('.item-color2');
var l = document.querySelector('.l');
var opa = document.querySelector('.opa');
window.addEventListener("scroll" , function(){
    var x = window.scrollY;
    var z = 1 - x/600;
    opa.style = `opacity : ${z}`;
    if(x >= 900){
       l.classList.remove('bg2')
       l.classList.add('up');
    }
    else {
        l.classList.add('bg2');
        l.classList.remove('up')
    }
});
[...items].forEach(e => {
    var x = e.dataset.color;
    var y = e.dataset.color2;
    
    e.style = `background-color : var(${x})`;
    
   e.addEventListener("click" , function(){
      root.style.setProperty('--var-bgDefaufe',`${y}`);
   })
});
[...items2].forEach(e => {
    var x = e.dataset.color;
    var y = e.dataset.color2;
    
    e.style = `background-image : var(${x})`;
    
   
   
});
var fonts = document.querySelectorAll('.item-font');
[...fonts].forEach(e => {
    var x = e.dataset.font;
    var y = e.dataset.font2;
    e.style = `font-family : ${y}`;
    e.addEventListener("click" , function(){
        root.style.setProperty("--var-fontDefaude" , `${y}`);
    });
});
var img1 = document.querySelector('.item-img')
var img2 = document.querySelector('.item-img2')
var bottom3 = document.querySelector('.bottom3');
img1.addEventListener("click" , function(){
    bottom3.style = `transform : translateY(-10rem)`;
});
img2.addEventListener("click" , function(){
    bottom3.style = `transform : translateY(0)`;
});
})