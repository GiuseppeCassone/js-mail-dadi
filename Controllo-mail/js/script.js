// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere (qui quindi dovremmo creare da noi un array di email casuali),
// stampa un messaggio appropriato sull’esito del controllo.

const checkButton = document.querySelector("button");

checkButton.addEventListener(`click`,
    function(){
        const userMail = document.querySelector("#access");
        const arrayMail = ["fifaplayer@gmail.com", "baldursplayer@gmail.com", "ichirakuramen@gmail.com", "edwardelric@gmail.com"];
        
        let granteedVerify = false;
        
        for (let i = 0; i < arrayMail.length; i++) {
            if (arrayMail[i] === userMail.value) {
                granteedVerify = true;
                
            }
        }
        
        if (granteedVerify){

            document.getElementById(`result`).innerHTML = "La tua mail è corretta";
            const resultText = document.getElementById(`result`);
            resultText.style.color = "green";
            resultText.style.fontSize = "20px";
        
        } else {

            document.getElementById(`result`).innerHTML = "La tua mail non è corretta";
            const resultText = document.getElementById(`result`);
            resultText.style.color = "red";
            resultText.style.fontSize = "20px";
        }    
        
    }
)

