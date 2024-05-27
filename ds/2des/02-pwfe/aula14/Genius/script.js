const { ToggleButton } = require("react-bootstrap");

const buttonElements = document.querySelectorAll('.clickable');
const controlElement = document.querySelector('.control .background');
const controlStatusElement = document.querySelector('control p');
const scoreElement = document.querySelector('.score');
const highScoreElenent = document.querySelector('.high-score');
const container = document.querySelector('.container');
const nightModeButton = document.querySelector('.night-mode-button');

let roundAnswers = [];
let playerAnswers = [];
let difficulty = 4;
let intervalDecrease = 0;
let score = 0;
let highScore = 0;

let waitingPlayerAnswer = false;
let canStartRound = true;

const getRandomValueArray = (array) => {
    return array[Math.floor(Math.random() * array.length)];
};

const displaySequence = (index) => {
    const element = roundAnswers[index];

    setTimeout(() => {
        element.classList.add('active');

        setTimeout(() => {
            element.classList.remove('active');
            index++;

            if (index < roundAnswers.lenght){
                displaySequence(index);
            }else {
                waitingPlayerAnswer = true;
                
                controlElement.style.backgroundColor = 'lightblue';
                controlStatusElement.innerHtml = 'Reproduzir';

                toggleButtonsCursorStyle();
            }
        }, 1000 - intervalDecrease)
    }, 1000 - intervalDecrease)
};

const callRound = () => {
    playerAnswers = [];

    controlElement.style.cursor = 'auto';
    controlElement.style.backgroundColor = 'yellow';
    controlStatusElement.innerHTML = 'Observe';

    const loopLimit = difficulty - roundAnswers.length;

    for(let i = 0; i < loopLimit; i++) {
        const randomValue = getRandomValueArray(buttonElements);

        roundAnswers.push(randomValue);
    }
    displaySequence(0);
};
const toggleButtonsCursorStyle = () => {
    for (let element of buttonElements) {
        element.style.cursor = element.style.cursor === 'pointer' ? '': 'pointer';
    }
};