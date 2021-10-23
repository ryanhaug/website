/* 
 *__________                        ___ ___                                                
 *\______   \___.__._____    ____  /   |   \_____   __ __  ____     ___  ______.__.________
 * |       _<   |  |\__  \  /    \/    ~    \__  \ |  |  \/ ___\    \  \/  <   |  |\___   /
 * |    |   \\___  | / __ \|   |  \    Y    // __ \|  |  / /_/  >    >    < \___  | /    / 
 * |____|_  // ____|(____  /___|  /\___|_  /(____  /____/\___  / /\ /__/\_ \/ ____|/_____ \
 *        \/ \/          \/     \/       \/      \/     /_____/  \/       \/\/           \/
 * Title: Main.js
 * Author: Ryan Haug
 * Date: Oct 19, 2021
 * Purpose: Make a tetris game
 * /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
 */


// canvas variables
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
// keypress handling variables
var rightPressed = false;
var leftPressed = false;
var downPressed = false;
var upPressed = false;
// game flow variables
var tick = 1;
// game object to handle tiles
const game1 = new Game(); 
// tetromino object to handle properties
const tetromino1 = new Tetromino(0,5,Math.floor(Math.random() * 8));

// draw each block of a tetromino
function drawTetromino() {
	drawCube(tetromino1.getCoord(1,1), tetromino1.getCoord(1,2), tetromino1.getColor());
	drawCube(tetromino1.getCoord(2,1), tetromino1.getCoord(2,2), tetromino1.getColor());
	drawCube(tetromino1.getCoord(3,1), tetromino1.getCoord(3,2), tetromino1.getColor());
	drawCube(tetromino1.getCoord(4,1), tetromino1.getCoord(4,2), tetromino1.getColor());
}

// pass individual blocks of a tetromino to the game object
function passTetromino() {
	game1.addBlock(tetromino1.getCoord(1,1), tetromino1.getCoord(1,2), tetromino1.getColor());
	game1.addBlock(tetromino1.getCoord(2,1), tetromino1.getCoord(2,2), tetromino1.getColor());
	game1.addBlock(tetromino1.getCoord(3,1), tetromino1.getCoord(3,2), tetromino1.getColor());
	game1.addBlock(tetromino1.getCoord(4,1), tetromino1.getCoord(4,2), tetromino1.getColor());
}

function drawCube(y, x, color) {
	// draw single cube
	ctx.beginPath();
	ctx.rect(x * 40, y * 40, 40, 40); //x,y, width,height
	switch (color) {
		case 1:
			//light blue
			ctx.fillStyle = "cyan";
			break;
		case 2:
			//dark blue
			ctx.fillStyle = "blue";
			break;
		case 3:
			//orange
			ctx.fillStyle = "orange";
			break;
		case 4:
			//yellow
			ctx.fillStyle = "yellow";
			break;
		case 5:
			//green
			ctx.fillStyle = "green";
			break;
		case 6:
			//purple
			ctx.fillStyle = "purple";
			break;
		case 7:
			//red
			ctx.fillStyle = "red";
			break;
	}
	ctx.fill();
	ctx.closePath();
	// draw border
	ctx.beginPath();
	ctx.lineWidth = "4";
	ctx.strokeStyle = "black";
	ctx.rect(x*40, y*40, 40, 40);
	ctx.stroke();
	
}

function drawBoard() { // draw array of existing blocks that are filling the bottom
	for (var i = 0; i < 20; i++) {
		for (var j = 0; j < 10; j++) {
			if (game1.getTile(i, j) !== 0) {
				drawCube(i, j, game1.getTile(i, j));
			}
		}
	}
}

function checkBottom() { // true if blocked underneath
	return game1.checkFall(tetromino1.getCoord(1,1), tetromino1.getCoord(1,2)) || game1.checkFall(tetromino1.getCoord(2,1), tetromino1.getCoord(2,2)) || game1.checkFall(tetromino1.getCoord(3,1), tetromino1.getCoord(3,2)) || game1.checkFall(tetromino1.getCoord(4,1), tetromino1.getCoord(4,2));
}

function checkRight() { //true if blocked on right side
	return game1.checkRight(tetromino1.getCoord(1,1), tetromino1.getCoord(1,2)) || game1.checkRight(tetromino1.getCoord(2,1), tetromino1.getCoord(2,2)) || game1.checkRight(tetromino1.getCoord(3,1), tetromino1.getCoord(3,2)) || game1.checkRight(tetromino1.getCoord(4,1), tetromino1.getCoord(4,2));
}

function checkLeft() { //true if blocked on left side
	return game1.checkLeft(tetromino1.getCoord(1,1), tetromino1.getCoord(1,2)) || game1.checkLeft(tetromino1.getCoord(2,1), tetromino1.getCoord(2,2)) || game1.checkLeft(tetromino1.getCoord(3,1), tetromino1.getCoord(3,2)) || game1.checkLeft(tetromino1.getCoord(4,1), tetromino1.getCoord(4,2));	
}

// key handling funny stuff
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
function keyDownHandler(e) {
	if (e.key === "Right" || e.key === "ArrowRight") {
		rightPressed = true;
	} else if (e.key === "Left" || e.key === "ArrowLeft") {
		leftPressed = true;
	} else if (e.key === "Down" || e.key === "ArrowDown") {
		downPressed = true;
	} else if (e.key === "Up" || e.key === "ArrowUp") {
		upPressed = true;
		tetromino1.rotate();
	}
}

function keyUpHandler(e) {
	if (e.key === "Right" || e.key === "ArrowRight") {
		rightPressed = false;
	} else if (e.key === "Left" || e.key === "ArrowLeft") {
		leftPressed = false;
	} else if (e.key === "Down" || e.key === "ArrowDown") {
		downPressed = false;
	} else if (e.key === "Up" || e.key === "ArrowUp") {
		upPressed = false;
	}
}


// function to draw on canvas
function draw() { //repeating function
	// drawing code
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawTetromino();
	drawBoard();
	
	if (checkBottom()) {	// if the tetromino is blocked on the bottom
		passTetromino(); // pass current coords to game object
		tetromino1.resetPiece(0,5,Math.floor(Math.random() * 8)); // reset coords and block type
		tick = 1;
	} else {
		if (downPressed) { // if holding down arrow drop faster 
			tetromino1.drop(1); // move down by size of block
		} else if (tick % 10 === 0) { // else drop at regular interval
			tetromino1.drop(1); // move down by size of block
		}
	}
	
	if (rightPressed) {
		if (!checkRight()) {
			tetromino1.moveHorizontal(1);
		}
	} else if (leftPressed) {
		if (!checkLeft()) {
			tetromino1.moveHorizontal(-1);
		}
	}
	
	tick++;

}

setInterval(draw, 50); // repeatedly call draw function
