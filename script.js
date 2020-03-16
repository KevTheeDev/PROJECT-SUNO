// **************** SUNO *********************
console.log
alert(`\n \n \n A GAME OF WAR-S \n `)
let round = 0

function generateNum(){
    let randomNum = Math.floor(Math.random() * 21);
return randomNum;
}

let player1Cards = {
    cards: generateNum(),
}

let player2Cards = {
    cards: generateNum(),
}



function checkCards (){
    let Player1Wins=0;
    let Player2Wins=0
    let gameIsWon=false;

    while (!gameIsWon) {
        let enterYorN = prompt (`To play enter: 'Y' \n To exit: 'N'`);
        if (enterYorN == 'y'){
            if (player1Cards.cards > player2Cards.cards){
                console.log
                alert(` Player 1: ${player1Cards.cards} `)
                console.log
                alert(` Player 2: ${player2Cards.cards} \n`)

                //a prompt
                console.log
                prompt(` PLAYER ONE wins this round \n Play again? Enter 'Y': \n Exit: enter 'N'`)
                    if (enterYorN == 'y'){
                        // if y then increase wins
                        Player1Wins++;
                        alert(`Player 1 Win(s):  ${Player1Wins}`)

                        //if n then break;
                    } else if (enterYorN == 'n'){
                        break;
                    }

            }   else if (player2Cards.cards > player1Cards.cards){
                console.log
                alert (` Player 2: ${player2Cards.cards} `)
                console.log
                alert (` Player 1: ${player1Cards.cards} \n `)
        
                // alert and maybe A prompt
                console.log
                prompt(` PLAYER TWO wins this round \n \n Play again? Enter yes: \n Exit: enter 'N'`)
                    if (enterYorN == 'y')
                //if yes then update random nums update objects
                Player2Wins++;
                alert(`Player 2 Win(s): `, Player2Wins)
               }
                    //if n then break;
                    else if (enterYorN == 'n'){
                        break;
}
        } else if (`${enterYorN == 'n'}`){
                break;
            
        } else if (player1Cards.cards == player2Cards.cards){
            //alert 
            //if yes then update random nums update objects
            // if no then break
            console.log(` Player 2: ${player2Cards.cards} `)
            console.log(` Player 1: ${player1Cards.cards} \n `)
            console.log(`Win(s): `, Player2Wins , Player1Wins)
            console.log(`ROUND IS A DRAW: Try again? Enter yes:`)

            console.log(`Not winning`, ) 
            break
        }
        gameIsWon=((Player1Wins>=5) || (Player2Wins>=5));
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

