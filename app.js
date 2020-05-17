let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function showWinMessage(user, comp) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `<p>You chose ${user}. <br/>The computer chose ${comp}. <br/>You win! :D</p>`;
    
    const user_div = document.getElementById(user);
    user_div.classList.add('green-glow');
    setTimeout(() => user_div.classList.remove('green-glow'), 300);
}

function showLoseMessage(user, comp) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `<p>You chose ${user}. <br/>The computer chose ${comp}. <br/>You lose... D:</p>`;
    
    const user_div = document.getElementById(user);
    user_div.classList.add('red-glow');
    setTimeout(() => user_div.classList.remove('red-glow'), 300);
}

function showDrawMessage(user, comp) {
    result_p.innerHTML = `<p>You chose ${user}. <br/>The computer chose ${comp}. <br/>It's a draw.</p>`;
    
    const user_div = document.getElementById(user);
    user_div.classList.add('gray-glow');
    setTimeout(() => user_div.classList.remove('gray-glow'), 300);
}

function compareResults(user) {
    const comp = getComputerChoice();
    
    switch (user + comp) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            showWinMessage(user, comp);
            break;
            
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            showLoseMessage(user, comp);
            break;
            
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            showDrawMessage(user, comp);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => compareResults("rock"));

    paper_div.addEventListener('click', () => compareResults("paper"));

    scissors_div.addEventListener('click', () => compareResults("scissors"));
}

main();