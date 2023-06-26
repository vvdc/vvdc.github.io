<?php
$nom=(string) $_POST["nom"];
$email=(string) $_POST["email"];
$telephone=(string) $_POST["telephone"];
$message=(string) $_POST["message"];
$testhoney=(int) $_POST["testhoney"];
$consent= (bool) $_POST["consent"];

// nom pas vide
if(!empty($nom)){
    // nom sans chiffre
    if (preg_match('/^[\p{L}\s\'ç\-]+$/u', $nom)) {
        //vide pas vide
        if(!empty($email)){
            //format email ok
            if(filter_var($email, FILTER_VALIDATE_EMAIL)){
                // numero pas vide
                if(!empty($telephone)){
                    // verifier que ce soit bien en +33 ou 012
                    if (preg_match('#(0|\+33)[1-9]( *[0-9]{2}){4}#', $telephone)) {
                        if(!empty($message)){
                            // test robot
                            if(!empty($testhoney)){
                                if($testhoney == 7 ){
                                    //consentement politique de confidentialité
                                    if($consent){
                                        // si tous les parametres sont ok on valide le tout
                                        $valid= true;
                                    //sinon message    
                                    }else{
                                        $info_alerte= "CHECK: Cocher la case de consentement pour l'utlisation de vos données afin de vous recontacter.";
                                        $valid= false;
                                    }
                                }else{
                                    $info_alerte= "RGPD:Le résultat semble incorrect...";
                                    $valid= false;
                                }
                            }else{
                                $info_alerte= "RGPD: Etes-vous une robot? ";
                                $valid= false;
                            }
                        }else{
                            $info_alerte= "Message: Quel est l'objet de votre demande?";
                            $valid= false;
                        }
                    }else{
                        $info_alerte= "TEL:Le numéro de telephone n'est pas valide";
                        $valid= false;
                    }
                }else{
                    $info_alerte= "TEL:Entrer votre numéro de telephone";
                    $valid= false;
                }
            }else{
                $info_alerte= "Email:L'adresse E-mail n'est pas valide.";
                $valid= false;
            }
        }else{
            $info_alerte= "Email:Entrer votre adresse E-mail.";
            $valid= false;
        }
    }else{
        $info_alerte= "Nom:Le nom n'est pas valide";
        $valid= false;
    } 
}else{
    $info_alerte= "Nom:Entrer votre nom.";
    $valid= false;
}
// $valid= true;
if($valid){
    $receiver = "contact@luvicode.fr, vandecasteelevincent@gmail.com, vandecasteelevincent@outlook.fr";
    $subject = "Contact via le formulaire luvicode.fr";
    $sender = "site-luvicode@luvicode.fr";
    $headers = "From: <$sender>\n";
    $headers .= "Content-Type: text/html; charset=UTF-8";
    $contenu= '
        <html>
        <head>
            <title>Demande de contact Luvicode.fr</title>
        </head>
        <body>
            <h3>Demande de contact</h5>
            <p> Nom du client: '.$nom.'</p>
            <p> Adresse e-mail: '.$email.'</p>
            <p> Message: '.$message.'</p>
            <p> Numéro de téléphone : '.$telephone.'</p>
            <br>
        </body>
        </html>
    ';

    if(mail($receiver, $subject, $contenu, $headers)){
        $info_alerte= "Ok: Message envoyé";
    }else{
        $info_alerte= "NOk: Une erreur est survenue, merci de me contacter par telephone ou directement à contact@luvicode.fr";
    }

    
}
echo $info_alerte;
?>
