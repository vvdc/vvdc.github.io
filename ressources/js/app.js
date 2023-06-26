//fast contact
const fastContact=document.querySelector("header");

//formulaire de contact
const formContact= document.querySelector("#idFormContact");
const affichEtat= document.querySelector('#affichEtat');
const nom=document.getElementById('nom');
const email=document.getElementById('email');
const tel=document.getElementById('tel');
const message=document.getElementById('message');
const consent=document.getElementById('consent');
const testhoney=document.getElementById('testhoney');


//texte délilement qualité
const textDefile= document.querySelector('.sec-text');

//affiche la banniere fastcontact au scroll
window.addEventListener('scroll', ()=>{
    let scrollValue= window.scrollY;
    if(scrollValue > 60){
        fastContact.style.display= "block";
    }else{
        fastContact.style.display= "none";
    }
});

//Texte defile
const textLoad= ()=> {
    setTimeout(()=> {
        textDefile.textContent = "Rigueur";
    }, 0);
    setTimeout(()=> {
        textDefile.textContent = "Dynamisme";
    }, 4000);
    setTimeout(()=> {
        textDefile.textContent = "Adaptibilité";
    }, 8000);
    setTimeout(()=> {
        textDefile.textContent = "Ponctualité";
    }, 12000);
    setTimeout(()=> {
        textDefile.textContent = "Réactivité";
    }, 16000);
}
textLoad();
setInterval(textLoad,20000);

// gestion du formulaire de contact
formContact.addEventListener("submit", function(e) {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/traitement/email.php", true);
    xhr.onreadystatechange = function() {
        let response= xhr.response;
        if (this.readyState== 4 && this.status== 200){
            // gestion des messages return du form
            //on separe la reponse sur les : et on prend la premiere partie
            typeError= response.split(":")[0];
            typeErrorLower = typeError.toLowerCase();

            if (typeError === "Nom") {
                nom.style.backgroundColor = "rgba(240, 102, 102, 0.54)";
                nom.style.color = "#fbfdff";
                nom.focus();
            } else {
                nom.style.backgroundColor = ""; 
                nom.style.color = ""; 
            }

            if (typeError === "Email") {
                email.style.backgroundColor = "rgba(240, 102, 102, 0.54)";
                email.style.color = "#fbfdff";
                email.focus();
            } else {
                email.style.backgroundColor = "";
                email.style.color = "";
            }
            
            if (typeError === "TEL") {
                tel.style.backgroundColor = "rgba(240, 102, 102, 0.54)";
                tel.style.color = "#fbfdff";
                tel.focus();
            } else {
                tel.style.backgroundColor = "";
                tel.style.color = "";
            }
            
            if (typeError === "Message") {
                message.style.backgroundColor = "rgba(240, 102, 102, 0.54)";
                message.style.color = "#fbfdff";
                message.focus();
            } else {
                message.style.backgroundColor = "";
                message.style.color = "";
            }
            
            if (typeError === "CHECK") {
                consent.style.backgroundColor = "rgba(240, 102, 102, 0.54)";
                consent.style.color = "#fbfdff";
            } else {
                consent.style.backgroundColor = "";
                consent.style.color = "";
            }
            
            if (typeError === "RGPD") {
                testhoney.style.backgroundColor = "rgba(240, 102, 102, 0.54)";
                testhoney.style.color = "#fbfdff";
                testhoney.focus();
            } else {
                testhoney.style.backgroundColor = "";
                testhoney.style.color = "";
            }

            if (typeError === "Ok") {
                affichEtat.style.backgroundColor = "rgb(143, 214, 143)";
                affichEtat.style.color = "#fbfdff";
            } else {
                affichEtat.style.backgroundColor = "";
                affichEtat.style.color = "";
            }
            

            // affichage du message sans la partie erreur
            //split pour délimiter au : [1] pour prendre la seconde partie du tableau créé et trim pour enlever les espaces
            resultat = response.split(":")[1].trim();
            affichEtat.innerText= resultat;
            
            
        } 
        else if (this.readyState == 4){
            alert("une erreur est survenue ..");
        }
        
    };
    let formData= new FormData(formContact);
    xhr.send(formData);
});
