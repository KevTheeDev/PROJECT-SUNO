// **************** SUNO *********************
// console.log(`\n \n \n S-UNO \n `)



// create an two objects with cards
//         //  these are the player's hand
//             // 1st Object
//                 // cards:
//                         green,
//                         red,
//                         yellow,

//             // 2nd Object
//                 // cards
//                     green,
//                     red,
//                      yellow,

//             // a loop
//                 loop through each object 
// import { Object, Math } from "es6-shim";
let round = 0

let randomNum = parseInt(Math.random() * 11)
console.log(randomNum);


let player1 = {
    cards: randomNum,
    wins: 0
}

let player2 = {
    cards: randomNum,
    wins: 0
}
let x = Object.values(player2);

// write a function that does the following:
// - initialize a variable whose value is a random num (using math.random)
// - push random number to player.cards

// write a function that check if each index of player1.cards[round] 
// matches the same index of player2.cards[round]. whoever has the higher card, increment their wins.

// write a function called "battle" that calls each of these functions to similate a game. at the end of the function, increment the round.

//put maht.random in a function

function loopPlay() {
    for (let player1Loop in player1) {
        console.log(player1.green, '\n')
    }
}
loopPlay();


function loopHand1() {
    for (let color in player2) {
        for (let item in player2.color) {
            console.log(item);
            // if (player1.green[0] == player2.green[0]) {
            //     console.log(`loopHand1 `, player2.green[0])
            // } else {
            //     console.log(`if statement not working`)
            // }
        }
    }
}
loopHand1();



// creates an array of the KEYS out of the object
// let key = Object.keys(player2);
// console.log(key);

//prints the values nad makes them arrays
// let val = Object.values(player2);
// console.log(`Value Method `, val);

//prints a table of the entries in the object
// let x = Object.entries(player1)

// console.table(`\n entries method ${x}, \n \n`)

// for (let hand in player2) {

//     // hand variable only prints off keys / property
//     // hand & player2[...] prints off the value property pair
//     // properties / keys are also strings

//     console.log(`player 2 in for in loop `, hand, player2[hand])
// }


















// ************************* TESTING FUNCTIONS WORKED ***************************
// function testPlayer() {

//     let player1 = {
//         green: 2,
//         red: 3,
//         blue: 4,
//     }
//     console.log(player1.green)

// }
// testPlayer();


// function testPlayer2() {

//     let player2 = {
//         green: 2,
//         red: 3,
//         blue: 4,
//     }
//     console.log(player2.red)
// }
// testPlayer2();


// function testHands() {
//     if (testPlayer() == testPlayer2()) {
//         console.log(`They matched! `)
//     }
// }
// testHands();


// ************************* TESTING FUNCTIONS WORKED ***************************