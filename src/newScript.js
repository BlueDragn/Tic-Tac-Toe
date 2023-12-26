// Choosing the Marker
const playerName1 = prompt("Enter name for Player 1:");
const playerName2 = prompt("Enter name for Player 2:");
let player1Marker = prompt("Enter Marker for Player 1: X or O");
let player2Marker;

const marker = ["X", "O"];

if (player1Marker === "X") {
  player1Marker = marker[0];
  player2Marker = marker[1];
} else if (player1Marker === "O") {
  player2Marker = marker[0];
  player1Marker = marker[1];
} else {
  console.log("Invalid input. Marker must be either 'X' or 'O'.");
  // You might want to handle this case further (e.g., ask the user again for input).
}

console.log(`${playerName1} will use marker ${player1Marker}`);
console.log(`${playerName2} will use marker ${player2Marker}`);

//Game board
const myObject = {
  my2DArray: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
};

//Game play
//1. ask user where he wants to marks eg. @1
const markingSpot = prompt("Enter the spot");
//2. Add the marker of player1 there by updating the Game board
myObject.my2DArray[0][markingSpot - 1] = player1Marker;
console.log(myObject.my2DArray);
//3. Check for win/loss
//4. pass hand to player2
