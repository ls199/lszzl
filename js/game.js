var randomNumber = Math.floor(Math.random() * 100) + 1;
var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');
var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var guessCount = 1;//设置猜测次数为1
var resetButton;//设置重置按钮变量
guessField.focus();//使得猜数文本区获得焦点

function checkGuess(){
// document.write('我是结论');
guesses.innerHTML += guessField.value+' ';
guesses.style.backfroundColor="red";
}
// checkGuess();

