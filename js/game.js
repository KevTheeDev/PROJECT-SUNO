// **************** SUNO *********************
// alert(`\n \n \n A GAME OF WAR-S \n `)

let player1Cards = {
    cards: Math.floor(Math.random() * 21),
}

let player2Cards = {
    cards: Math.floor(Math.random() * 21),

}


let Player1Wins=0;
let Player2Wins=0;
let gameIsWon=false;

let enterYorN = prompt (`To play enter: 'Y' \n To exit: 'N'`);

function rungame(){
    if (player1Cards.cards > player2Cards.cards){
        alert(` Player 1: ${player1Cards.cards} `)
        alert(` Player 2: ${player2Cards.cards} \n`)

        // a prompt
        prompt(` PLAYER ONE wins this round \n Play again? Enter 'Y': \n Exit: enter 'N'`)
        if (enterYorN == 'y'){
            // if y then increase wins
            Player1Wins++;
            alert(`Player 1 Win(s):  ${Player1Wins}`)
            //if n then break;
            } else if (enterYorN == 'n'){
                // break;
            }
        }
    }


function rungame2(){
    alert (` Player 2: ${player2Cards.cards} `)
    alert (` Player 1: ${player1Cards.cards} \n `)

    // alert and maybe a prompt
    prompt(` PLAYER TWO wins this round \n \n Play again? Enter yes: \n Exit: enter 'N'`)
        
    if (enterYorN == 'y'){
    //if yes then update random nums update objects
    Player2Wins++;
    alert(`Player 2 Win(s):  ${Player2Wins}`)
    }
        //if n then break;
        else if (enterYorN == 'n'){
            // break;
    }
}        

function rungameEqual(){
    alert(` Player 2: ${player2Cards.cards} \n \n`)
    alert(` Player 1: ${player1Cards.cards} \n \n`)
    alert(`Win(s):  ${Player2Wins} , ${Player1Wins} \n \n`)
    alert(`Not winning`) 
    prompt(`ROUND IS A DRAW: Try again? Enter yes: \n \n `)

    //if yes then update random nums update objects or run function rungame
    if(enterYorN == 'y'){
        rungame();
    } else if (enterYorN == 'n'){
        // break;
    }
}



function checkCards (){
    let Player1Wins=0;
    let Player2Wins=0
    let gameIsWon=false;

    while (!gameIsWon) {
        let enterYorN = prompt (`To play enter: 'Y' \n To exit: 'N'`);
        if (enterYorN == 'y'){
            rungame()
            // if 2nd card is higher
    
            } else if (player2Cards.cards > player1Cards.cards){
                rungame2();

            } else if (player1Cards.cards == player2Cards.cards){
                // if no then break
                rungameEqual();
            }
            else if (`${enterYorN == 'n'}`){
        break;            
        } 
    gameIsWon=((Player1Wins>=5) || (Player2Wins>=5));
    switch (gameIsWon){
        case Player1Wins>=5:
            alert(`PLAYER 1 WINS!`)
            break;
        case Player2Wins>=5:
            alert(`PLAYER 2 WINS!`)
            break;
        }
    }
}
checkCards();





// console.log(player2Cards.this.wins());

// write a function that does the following:
// - initialize a variable whose value is a random num (using math.random)
// - push random number to player.cards

// write a function that check if each index of player1.cards[round]...
// matches the same index of player2.cards[round]. whoever has the higher card, increment their wins.

// write a function called "battle" that calls each of these functions to similate a game. at the end of the function, increment the round.


// create a block / grid and display 

// **************** ON CLICKS *********************
    // After PLAY is clicked display the turn out of below
    // display the card of PLAYER1 and PLAYER2
        // display 'increment round' after whoever has won
        // display 'win' round after whoever has won - do this first maybe
        // PROMPT user to play again (-animate when you have time)
    // 


// **************** DISPLAYS *********************
    //Change 5 card display to one card display in the block

//put maht.random in a function 