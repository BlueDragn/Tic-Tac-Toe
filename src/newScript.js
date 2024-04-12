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
let playerTurn = 1;

//Player1 Hand
if (playerTurn === 1) {
  //1. ask user where he wants to marks eg. @1
  const markingSpot = prompt("Enter the spot");

  //2. Add the marker of player1 there by updating the gameboard

  switch (true) {
    case markingSpot > 0 && markingSpot < 4:
      // expression for the first case
      myObject.my2DArray[0][markingSpot - 1] = player1Marker;
      playerTurn++;
      console.log(myObject.my2DArray);
      break;

    case markingSpot > 3 && markingSpot < 7:
      // expression for the second case
      myObject.my2DArray[1][markingSpot - 4] = player1Marker;
      playerTurn++;
      console.log(myObject.my2DArray);
      break;

    case markingSpot > 6 && markingSpot < 10:
      // expression for the third case
      myObject.my2DArray[2][markingSpot - 7] = player1Marker;
      playerTurn++;
      console.log(myObject.my2DArray);
      break;

    default:
      // expression for other cases or handle invalid input
      console.log("invalid input");
  }
}

//Player2 Hand
if (playerTurn === 2) {
  //1. ask user where he wants to marks eg. @1
  const markingSpot = prompt("Enter the spot");

  //2. Add the marker of player1 there by updating the gameboard

  switch (true) {
    case markingSpot > 0 && markingSpot < 4:
      // expression for the first case
      myObject.my2DArray[0][markingSpot - 1] = player2Marker;
      playerTurn--;
      console.log(myObject.my2DArray);
      break;

    case markingSpot > 3 && markingSpot < 7:
      // expression for the second case
      myObject.my2DArray[1][markingSpot - 4] = player2Marker;
      playerTurn--;
      console.log(myObject.my2DArray);
      break;

    case markingSpot > 6 && markingSpot < 10:
      // expression for the third case
      myObject.my2DArray[2][markingSpot - 7] = player2Marker;
      playerTurn--;
      console.log(myObject.my2DArray);
      break;

    default:
      // expression for other cases or handle invalid input
      console.log("invalid input");
  }
}

// Deciding the Result of the game

function gameResult(myObject) {
  let allEqualX = true;
  let allEqualO = true;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (
        myObject.my2DArray[i][j] !== "O" ||
        myObject.my2DArray[j][i] !== "O" ||
        myObject.my2DArray[i][i] !== "O" ||
        myObject.my2DArray[i][2 - i] !== "O"
      ) {
        allEqualO = false;
      } else if (
        myObject.my2DArray[i][j] !== "X" ||
        myObject.my2DArray[j][i] !== "X" ||
        myObject.my2DArray[i][i] !== "X" ||
        myObject.my2DArray[i][2 - i] !== "X"
      ) {
        allEqualX = false;
      }
    }
  }
  // Check if there's a winner
  if (allEqualX) {
    return "X wins";
  } else if (allEqualO) {
    return "O wins";
  } else {
    return "It's a draw";
  }
}
