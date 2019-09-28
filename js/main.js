const info = document.getElementById("info");
const score = document.getElementById("score");
const options = ["scissor", "stone", "paper"];
const aiWinsMessage = "AI wins!";
const userWinsMessage = "You win!";
const drawGameMessage = "The game went out in a draw!";

/*
0 Represents a scissor
1 a stone
2 paper
 */
let scissor = document.getElementById("0-scissor-button");
let stone = document.getElementById("1-stone-button");
let paper = document.getElementById("2-paper-button");

/*
Keep track of the score
 */
let scoreAI = 0;
let scoreUser = 0;

/*
Add event listener
 */
scissor.addEventListener("click", processSelection)
stone.addEventListener("click", processSelection)
paper.addEventListener("click", processSelection)

function processSelection() {
    let aiSelection = (Math.floor((Math.random() * 3) + 1) - 1).toString(); // Probably better than converting the string to an int i guess
    let userSelection = this.id.substring(0, 1);

    /*
    Pick a winner and set the winner string
     */
    let winnerText = userWinsMessage;

    if(userSelection == aiSelection) {
        winnerText = drawGameMessage;
    }else if(userSelection == 0 && aiSelection == 1){
        winnerText = aiWinsMessage;
    }else if(userSelection == 1 && aiSelection == 2) {
        winnerText = aiWinsMessage;
    }else if(userSelection == 2 && aiSelection == 0) {
        winnerText = aiWinsMessage;
    }

    if(winnerText == userWinsMessage) {
        ++scoreUser;
    }else if(winnerText == aiWinsMessage) {
        ++scoreAI;
    }

    /*
    Output to the user
     */
    info.innerHTML = "You choose " + options[userSelection] + " and the AI picked " + options[aiSelection] + "<br>" + winnerText;

    /*
    Update score
     */
    score.innerHTML = scoreUser + " - " + scoreAI;
}