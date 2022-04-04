window.addEventListener('load', loader);
function loader(){
    const TLLOAD= gsap.timeline();
    const width= window.outerWidth;

    if(width > 1200 ){
        TLLOAD
        .to('.img-load img', {height: 600, duration:1.5, delay: 0.5, ease:'power2.out'})
        .to('.titre-load', {opacity: 1, duration:1.2, delay: 0.3},'-=0.3')
        .to('.txt-load', {opacity: 1, duration:1.2, delay: 0.2},'-=0.3')
        .to('.load-container', {y: 900, ease:'power2.out', delay:0.2})
        .add(() =>{
            document.querySelector('.load-container').style.display="none";
            document.querySelector('#LandingPage').style.display="flex";
        })
    }else if (width <=1200){
        TLLOAD
        .to('.img-load img', {height: 300, duration:1.5, delay: 0.5, ease:'power2.out'})
        .to('.titre-load', {opacity: 1, duration:1.2, delay: 0.3},'-=0.3')
        .to('.txt-load', {opacity: 1, duration:1.2, delay: 0.2},'-=0.3')
        .to('.load-container', {y: 900, ease:'power2.out', delay:0.2})
        .add(() =>{
            document.querySelector('.load-container').style.display="none";
            document.querySelector('#LandingPage').style.display="flex";
        })
    }
}


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
