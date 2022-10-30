const guessButton = document.querySelector('.guess');
const guessList = document.querySelector('.guess-list');
const guessInput = document.querySelector('.guess-input');
const guessText = document.querySelector('.guess-text');
let count = 0
let completed = false;

const getRandomNumb = (min, max) => {

    //Math floor avrundar upp till närmaste heltal och math random slumpar fram siffran.
    // Man gångrar för att fram ett heltal 
    return Math.floor(Math.random()* (max - min + 1) + min);
}

const rndInt = getRandomNumb(0, 100);

const addToList = () => {
  if(count < 5 && !completed) {
    count++ ; 
    const guessValue = Number(guessInput.value);
    const createGuessItem = document.createElement('li');

    createGuessItem.classList.add('guess-item');
    if(rndInt == guessValue) {
      completed = true;
      guessText.innerText = `${guessValue} is CORRECT`;
      createGuessItem.innerText = `${guessValue} - CORRECT!`;
    } else if(rndInt < guessValue) {
      guessText.innerText = `${guessValue} - You need to guess lower...`;
      createGuessItem.innerText = `${guessValue} - To high`;
    } else {
      guessText.innerText = `${guessValue} - You need to guess higher...`;
      createGuessItem.innerText = `${guessValue} - To low`;
    }
   
    guessList.appendChild(createGuessItem) 
  } else if(!completed) {
    alert('Du har gissat för många gånger!')
  }
}

guessButton.addEventListener('click', addToList);

console.log(rndInt);
