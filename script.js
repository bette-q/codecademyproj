let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (currentHumanGuess, computerGuess, target) => {
    let compGuess = Math.abs(target - computerGuess);
    let humanGuess = Math.abs(target - currentHumanGuess);
    return humanGuess <= compGuess;
}

const updateScore = winner => {
  if (winner === 'human') {
      humanScore++;
  } else {
    computerScore++;
  }
}

const advanceRound = () => {
  return currentRoundNumber++;
}

