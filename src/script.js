
let currentPlayer = 1;
let box1 = document.getElementById("b1");


function myFunction1(){
    const marker1 = document.getElementById("x");
    const marker1Value = marker1.value;
    const playerOne = {
        name:"p1",
        marker:marker1Value,
    }
    // alert("player1: " + playerOne.marker);
    return playerOne.marker;

};


function myFunction2(){
const marker2 = document.getElementById("o");
const marker2Value = marker2.value;

    const playerOne = {
        name:"p1",
        marker:marker2Value,
    }
    alert("player1: " + playerOne.marker);
    return playerOne.marker;

};

//Game board object
const gameBoard = {
    gameboard : [1,2,3,4,5,6,7,8,9],
};


box1.addEventListener('click', function(){
    let m = myFunction1();
    box1.textContent = m;
    console.log(box1.textContent);

});