
// Variable 

var choice=['robot', 'ninja', 'pirate', 'monkey', 'zombie'];

var playerChoice="";
var playerScore =0;
var computerScore=0;

var buttons = document.querySelectorAll('.choose');  
var playerScoreEl= document.getElementById('scoreOne');
var computerScoreEl= document.getElementById('scoreTwo');


// Step 1 create a fonction where the computer is picking a rundom choice  (computer choice)

function pickRondomChoice(){
        return choice[Math.floor(Math.random() * choice.length)]; 
}
 //console.log(pickRondomChoice());


// Step 2  create a function where the user pick his own choice when he click on it (player choice)

 buttons.forEach((button) => {
       
   button.addEventListener("click",
   () => {
    playerChoice = button.getAttribute('data-choice');

    checkWinner();  
   });
 
});


// Step 4 update score number function player


function updatePlayerScore(value){
    value = playerScore++;
    playerScoreEl.innerText = playerScore;
}

// update score number computer 

function updateComputerScore(value){
        value = computerScore++;
        computerScoreEl.innerHTML = computerScore;

}


// step 3 who is the winner function 

function checkWinner (){
        let computerChoice= pickRondomChoice();
    
        if ( playerChoice === computerChoice){
            // draw
        } else if ( (playerChoice === 'robot' && (computerChoice === 'ninja' || computerChoice ==='zombie')) 
        || (playerChoice === 'pirate' && (computerChoice ==='robot' || computerChoice ==='monkey' ))
        || (playerChoice === 'ninja' && (computerChoice === 'pirate' || computerChoice ==='zombie'))
        || (playerChoice === 'monkey' && (computerChoice === 'robot'|| computerChoice ==='ninja'))
        || (playerChoice === 'zombie' && (computerChoice === 'monkey'|| computerChoice ==='pirate'))
        ) {
                updatePlayerScore(1);
        } else {
            // user loose
            updateComputerScore(1)
        }
        
        console.log(checkWinner);
    }


// step 5 update score of the winner 

// STEP 6 end of the game after 3 parti 























