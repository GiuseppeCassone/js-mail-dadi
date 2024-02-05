// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
const buttonElement = document.querySelector("button");

buttonElement.addEventListener(`click`,

    function() {
        const computerRandomNum = Math.floor(Math.random() * 6 + 1);
        const userRandomNum = Math.floor(Math.random() * 6 + 1);

        const diceImage = `images/dado` + userRandomNum + `.png`;
        document.querySelectorAll(`img`) [0].setAttribute(`src`, diceImage)

        const diceImagePc = `images/dado` + computerRandomNum + `.png`;
        document.querySelectorAll(`img`) [1].setAttribute(`src`, diceImagePc)

        // const userResult = document.getElementById("user-dice");
        // const computerResult = document.getElementById("computer-dice");
        // const finalResult = document.getElementById("result");

        // userResult.innerText = userRandomNum;
        // computerResult.innerText = computerRandomNum;


        if(userRandomNum > computerRandomNum ) {
            document.getElementById(`result`).innerHTML = "Hai Vinto!!!";

        } else if(userRandomNum < computerRandomNum) {
            document.getElementById(`result`).innerHTML = "Hai Perso :( !!!";

        } else {
            document.getElementById(`result`).innerHTML = "Pareggio!!!"
        }
    }
)