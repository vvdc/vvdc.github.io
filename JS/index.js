const menuBurger = document.getElementById('navBanner');
const menu= document.getElementById('nav');

menuBurger.addEventListener('click', ()=>{
    menuBurger.style.display="none";
    menu.style.display="flex";
});
menu.addEventListener('click', ()=>{
    menuBurger.style.display="flex";
    menu.style.display="none";
});



