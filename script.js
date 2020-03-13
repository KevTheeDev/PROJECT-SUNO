// **************** SUNO *********************
console.log(`\n \n \n WAR-S \n `)

let round = 0

function generateNum(){
    let randomNum = Math.floor(Math.random() * 11);
return randomNum;
}

let player1Cards = {
    cards: generateNum(),
    wins: 0
}

let player2Cards = {
    cards: generateNum(),
    wins: function (){
        let wins = 0;
        
    }
}

console.log(player1Cards.cards)
console.log(player2Cards.cards)


function checkCards (){
    if (player1Cards.cards < player2Cards.cards){
            
        console.log(`Player one wins this round`)
    } else if (player2Cards.cards < player1Cards.cards){
        console.log(`Player 2 wins this round`)
    }

}


// write a function that does the following:
// - initialize a variable whose value is a random num (using math.random)
// - push random number to player.cards

// write a function that check if each index of player1.cards[round] 
// matches the same index of player2.cards[round]. whoever has the higher card, increment their wins.

// write a function called "battle" that calls each of these functions to similate a game. at the end of the function, increment the round.

//put maht.random in a function

