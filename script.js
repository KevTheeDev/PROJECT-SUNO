// **************** SUNO *********************
console.log(`\n \n \n S-UNO \n `)

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
//                     yellow,

//             // a loop
//                 loop through each object 


let player1 = {
    green: [3, 3, 4],
    red: 3,
    blue: 4,
}

let player2 = {
    green: [3, 2, 1],
    // may need to use a sort method
    red: '3',
    blue: '4',
}

function loopPlay() {
    for (let player1Loop in player1) {
        console.log(player1.green)
    }
}
loopPlay();


function loopHand1() {
    for (let hand1 in player1) {
        for (let hand2 in player2) {
            if (player1.green[0] == player2.green[0]) {
                player2.green.pop(0)
                console.log()
            }
        }
    }
}

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