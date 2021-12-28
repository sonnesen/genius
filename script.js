let order = [];
let clickedOrder = [];
let score = 0;

const VERDE = 0;
const VERMELHO = 1;
const AMARELO = 2;
const AZUL = 3;

const blueButton = document.querySelector('.blue');
const redButton = document.querySelector('.red');
const greenButton = document.querySelector('.green');
const yellowButton = document.querySelector('.yellow');

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {    
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    };
}

let lightColor = (elementColor, value) => {
    value = value * 500;

    setTimeout(() => {
        elementColor.classList.add('selected');
    }, value - 250);

    setTimeout(() => {
        elementColor.classList.remove('selected');
    });
}

let checkOrder = () => {
    for (let i in clickedOrder) {    
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }

    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
       createColorElement(color).classList.remove('selected'); 
       checkOrder();
    }, 250);

}

let createColorElement = (color) => {
    switch (color) {
        case VERDE:
            return greenButton    
        case VERMELHO:
            return redButton;
        case AMARELO:
            return yellowButton;
        case AZUL:
            return blueButton;
        
    }
}

let nextLevel = () => {
    score++;
    shuffleOrder();
}

let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo.`);
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame = () => {
    alert('Bem-vindo ao Genius! Iniciando novo jogo!')
    score = 0;    
    shuffleOrder();
}

greenButton.onclick = () => click(VERDE);
redButton.onclick = () => click(VERMELHO);
yellowButton.onclick = () => click(AMARELO);
blueButton.onclick =  () => click(AZUL);

playGame();