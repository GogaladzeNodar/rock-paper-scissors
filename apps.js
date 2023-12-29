let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const scoreSelect = document.getElementById("score-select");
let scoreLimit = parseInt(scoreSelect.value);  // Camosashleli meniudan mighebuli ricxvi
let gameIsOver = false; 


function getComputerChoice() {
  const choices = ['r', 'p', 's']
  const randomNumber = (Math.floor(Math.random() * 3)); // shemtxveviti ganawilebistvis 0 dan 2 is CaTvliT
  return choices[randomNumber]
}

function disableChoices() {
  rock_div.removeEventListener('click', () => game("r"));
  paper_div.removeEventListener('click', () => game("p"));
  scissors_div.removeEventListener('click', () => game("s"));
}



function convertToWord(letter) {  // am funqciit r,p da s gadadadian sityvebshi ekranze gamosachenad
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function updateScoreLimit() {
  scoreLimit = parseInt(scoreSelect.value);
}

scoreSelect.addEventListener('change', updateScoreLimit);

function checkWinner() {
  if (userScore === scoreLimit) {
    result_p.innerHTML = "You win!";
    result_div.style.display = 'block';
    gameIsOver = true;
    disableChoices();
    
  } else if (computerScore === scoreLimit) {
    result_p.innerHTML = "You lost!";
    result_div.style.display = 'block';
    gameIsOver = true;
    disableChoices();
    
  }
}

function win(userChoice, computerChoice) {
  checkWinner();
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. you win!`;
  userChoice_div.classList.add('green-glow');
  setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), 500);

  
}

function lose(userChoice, computerChoice) {
  checkWinner();
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. you lost!`;
  userChoice_div.classList.add('red-glow');
  setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 500);

  
}



function draw(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. it's draw!`;
  userChoice_div.classList.add('gray-glow');
  setTimeout(function() {document.getElementById(userChoice).classList.remove('gray-glow')}, 500);
}

function game(userChoice) {
  if (gameIsOver) return;
  const computerChoice = getComputerChoice();
  const result_div = document.querySelector('.result');
  result_div.style.display = 'block';
  switch (userChoice + computerChoice){
    case "rs":
    case "pr":
    case "sp":
        win(userChoice, computerChoice);
        break;
    case "rp":
    case "ps":
    case "sr":
        lose(userChoice, computerChoice);
        break;
    case "rr":
    case "pp":
    case "ss":
        draw(userChoice, computerChoice);
        break;
    

    
  }
  checkWinner(); 
  if (gameIsOver) return; 

}

function main() {
  rock_div.addEventListener('click', () => game("r"));
  
  paper_div.addEventListener('click', () => game("p"));

  scissors_div.addEventListener('click', () => game("s"));
}

main();


const restartButton = document.getElementById("restart-button");

function resetScores() {  // es funqcia anulebs angarishs, da resutl winadadebasaac gaaqrobs
  userScore = 0;
  computerScore = 0;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;

  const result_div = document.querySelector('.result');
  result_div.style.display = 'none';
}

restartButton.addEventListener('click', resetScores);

