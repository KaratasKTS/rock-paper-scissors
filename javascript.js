
let rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const computerDiv = document.querySelector(".div2");
const humanDiv = document.querySelector(".div1");
const computerScoreDiv = document.querySelector(".computerScoreDiv");
const humanScoreDiv = document.querySelector(".humanScoreDiv");
const tie = document.querySelector(".tie");
const span = document.querySelector(".span");
const modal = document.querySelector(".modal");



function getHumanChoice(getChoice){
    tie.innerHTML = "";
    humanDiv.innerHTML = "";
    computerDiv.innerHTML = "";
    let node = document.createTextNode(getChoice);
    humanDiv.appendChild(node);
    getComputerChoice(getChoice);
    return getChoice;

};

function getComputerChoice(humann) {
    const cchoice = ["Rock", "Paper", "Scissors"];
    const random = cchoice[Math.floor(cchoice.length * Math.random())];
    let node2 = document.createTextNode(random);
    computerDiv.appendChild(node2)
    playround(humann,random);
    return random;
};

let humanScore = 0;
let computerScore = 0;
function playround(humanchoice, computerchoice){
    if (humanchoice === computerchoice){
        let span = document.createElement("span");
        span.style.cssText = "font-size:20px; font-weight: bold;";
        let content = document.createTextNode("its a tie");
        span.appendChild(content);
        tie.appendChild(span);
    } else if ((humanchoice === "Rock" && computerchoice === "Scissors") ||
    (humanchoice === "Paper" && computerchoice === "Rock") ||
    (humanchoice === "Scissors" && computerchoice === "Paper")){
        humanScore++; // Human wins
        humanScoreDiv.textContent = humanScore; 
    } else {
        computerScore++; // Computer wins
        computerScoreDiv.textContent = computerScore; 
    }
    game();
    console.log(humanScore);
console.log(computerScore);
};


function game(){
    span.innerHTML = "";
    if(humanScore === 5 && computerScore === 5 ){
        modal.showModal()
        let itsaTie = document.createElement("h3");
        itsaTie.textContent = "its a tie";
        span.style.cssText="font-size:25px; color:black; font-weight:bold;";
        span.appendChild(itsaTie);
    }else if (humanScore === 5 && computerScore < 5){
        modal.showModal()
        let humanWins = document.createElement("h3");
        humanWins.textContent = "Human Wins!";
        span.style.cssText="font-size:25px; color:black; font-weight:bold;";
        span.appendChild(humanWins);
    }else if (computerScore === 5 && humanScore < 5){
        modal.showModal()
        let computerWins = document.createElement("h3");
        computerWins.textContent = "Computer wins!";
        span.style.cssText="font-size:25px; color:black; font-weight:bold;";
        span.appendChild(computerWins);
    }

};


rock.addEventListener("click" , ()=>{getHumanChoice("Rock")});
paper.addEventListener("click" , ()=>{getHumanChoice("Paper")});
scissors.addEventListener("click" , ()=>{getHumanChoice("Scissors")});


