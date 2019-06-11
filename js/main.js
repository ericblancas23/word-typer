window.addEventListener('load', init);

let time = 5;
let score = 0;
let isPlaying;

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'
];

function init() {
	showWords(words);
	wordInput.addEventListener('input', startMatch);
	setInterval(countdown, 1000);
	setInterval(checkStatus, 50);
}


function showWords(words) {
	const randIndex = Math.floor(Math.random() * words.length);
	currentWord.innerHTML = words[randIndex];
}

function startMatch() {
	if (matchWords()) {
		isPlaying = true;
		time = 6;
		showWords(words);
		wordInput.value = '';
		score++;
	} 
	if (score === -1) {
		scoreDisplay.innerHTML = 0; 
	}
	scoreDisplay.innerHTML = score;
}

function matchWords() {
	if (wordInput.value === currentWord.innerHTML) {
		message.innerHTML = 'Correct';
		return true;
	} else {
		message.innerHTML = '';
		return false;
	}	
}

function countdown() {
  // Make sure time is not run out
  if (time > 0) {
    // Decrement
    time--;
  } else if (time === 0) {
    // Game is over
    isPlaying = false;
  }
  // Show time
  timeDisplay.innerHTML = time;
}

function checkStatus() {
	if(!isPlaying && time === 0) {
		message.innerHTML = 'Game Over';
		score = -1;
	}
}


