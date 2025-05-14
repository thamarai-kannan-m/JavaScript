const choiceArr =[ "Stone","Paper","Scissor"];
const playerDisp = document.getElementById("playerChoice");
const computerDisp = document.getElementById("computerChoice");
const result = document.getElementById("result");

function clearDet(){
    playerDisp.textContent = "";
    computerDisp.textContent = "";
    result.textContent = "";

}
function playerOption(choice){
    const computerChoice= choiceArr[Math.floor(Math.random() *3)];
    let res="";
    if(choice===computerChoice){
        res="Tied";
    }else{
        switch(choice){
        case "Stone":
            res=(computerChoice==="Scissor")? "You Won" : "Computer Won";
            break;

        case "Scissor":
            res=(computerChoice==="Paper")? "You Won" : "Computer Won";
            break;
        case "Paper":
            res=(computerChoice==="Stone")? "You Won" : "Computer Won";
            break;

        }

    }
    playerDisp.textContent = choice;
    computerDisp.textContent = computerChoice;
    result.textContent = res;
    
}

