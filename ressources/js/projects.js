// Note : Changer data-id sur les cartes à chaque nouvelle entrée


// définition des variables pour l'affichage
const modalPortfolio= document.querySelector("#modal--portfolio");
const modalTitre=document.querySelector('#modal--portfolio .title');
const modalDescription=document.querySelector('#modal--portfolio .description .description--text');
const modalImg1=document.querySelector('#modal--portfolio .img1');
const modalImg2=document.querySelector('#modal--portfolio .img2');
const modalLink=document.querySelector('#modal--portfolio .link');
const itemModal1= document.querySelector('#modal--portfolio .item1');
const itemModal2= document.querySelector('#modal--portfolio .item2');
const itemModal3= document.querySelector('#modal--portfolio .item3');
const itemModal4= document.querySelector('#modal--portfolio .item4');
const itemModal5= document.querySelector('#modal--portfolio .item5');
const itemModal6= document.querySelector('#modal--portfolio .item6');
const itemModal7= document.querySelector('#modal--portfolio .item7');
const itemModal8= document.querySelector('#modal--portfolio .item8');
// bouton présent sur les cartes
const btnBalises = document.querySelectorAll('.container--cards .card--project a');
//affichage item portfolio
const closeBtnPortfolio= document.querySelector('.closebtnportfolio');


//fermeture de la modale
closeBtnPortfolio.addEventListener('click', ()=>{
    modalPortfolio.style.left="-250%";
});



// gestion de l'affichage de la modal portfolio en fonction du btn cliqué sur les cartes portfolio
const xhttp= new XMLHttpRequest();
xhttp.onreadystatechange=Action;
xhttp.open("GET", "/ressources/demo/projects.json");
xhttp.send();
function Action(){
    if(this.readyState==4 && this.status==200){
        const data= JSON.parse(this.response);
        btnBalises.forEach(btnBalise=>{
            btnBalise.addEventListener('click', (e)=>{
                e.preventDefault();
                // recupere le bouton cible
                btnCible = e.target;
                // recupere l'id associé au btn grace a dataset (data-id="")
                let id= btnCible.dataset.id;
                //converti id en entier pour pouvoir l'utiliser ensuite
                idInt= parseInt(id);
                modalTitre.innerText= data['project'][idInt].titre;
                modalDescription.innerText= data['project'][idInt].description;
                modalImg1.src=data['project'][idInt]['src-image1'];
                modalImg2.src=data['project'][idInt]['src-image2'];
                modalLink.href=data['project'][idInt]['btn-link'];
                itemModal1.innerText=data['project'][idInt]['points-clés'][0].item1;
                itemModal2.innerText=data['project'][idInt]['points-clés'][0].item2;
                itemModal3.innerText=data['project'][idInt]['points-clés'][0].item3;
                itemModal4.innerText=data['project'][idInt]['points-clés'][0].item4;
                itemModal5.innerText=data['project'][idInt]['points-clés'][0].item5;
                itemModal6.innerText=data['project'][idInt]['points-clés'][0].item6;
                itemModal7.innerText=data['project'][idInt]['points-clés'][0].item7;
                itemModal8.innerText=data['project'][idInt]['points-clés'][0].item8;

                //affichage de la modal
                modalPortfolio.style.left="50%";

                //gestion du lien inactif
                // si le l'anchor ne comporte pas de lien
                if(modalLink.href=data['project'][idInt]['btn-link'] == ""){
                    //modification de l'apparence du lien 
                    modalLink.innerText= "lein non disponible";
                    modalLink.style.background= "rgba(240, 102, 102)";
                    //on annule le comportement du lien
                    modalLink.addEventListener('click', (e)=>{
                        e.preventDefault();
                    })
                }
            })
        })
    }
}
