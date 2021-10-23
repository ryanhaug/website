/* 
 *__________                        ___ ___                                                
 *\______   \___.__._____    ____  /   |   \_____   __ __  ____     ___  ______.__.________
 * |       _<   |  |\__  \  /    \/    ~    \__  \ |  |  \/ ___\    \  \/  <   |  |\___   /
 * |    |   \\___  | / __ \|   |  \    Y    // __ \|  |  / /_/  >    >    < \___  | /    / 
 * |____|_  // ____|(____  /___|  /\___|_  /(____  /____/\___  / /\ /__/\_ \/ ____|/_____ \
 *        \/ \/          \/     \/       \/      \/     /_____/  \/       \/\/           \/
 * Title: Game.js
 * Author: Ryan Haug
 * Date: Oct 19, 2021
 * Purpose: Create game object to store game board in
 * /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
 */

class Game {

	constructor() {
		this.tiles = new Array(20); //initialize 1D array
		for (var i = 0; i < this.tiles.length; i++) { // fill previous array with arrays to make it 2D
			this.tiles[i] = new Array(10);
		}
		for (var i = 0; i < 20; i++) { // fill 2D array with 0s
			for (var j = 0; j < 10; j++) {
				this.tiles[i][j] = 0;
			}
		}
	}
	
	/*
	 * Add block to tiles array
	 * @param int y ycoord of block
	 * @param int x xcoord of block
	 * @param int color color of block 1=lightblue,2=darkblue,3=orange,4=yellow,5=green,6=purple,7=red
	 */
	addBlock(y, x, color) {
		this.tiles[y][x] = color;
	}
	
	/*
	 * Get color of tile for coordinate point
	 * @return int tiles[y][x] with number for what color block
	 */
	getTile(y, x) {
		return this.tiles[y][x];
	}

	/*
	 * Check if block below is occupied
	 * @param int y ycoord of block
	 * @param int x xcoord of block
	 * @return boolean if occupied
	 */
	checkFall(y, x) {
		if (y === 19) {
			return true;
		} else {
			return this.tiles[y + 1][x] !== 0;
		}
	}

	/*
	 * Check if block to right is occupied
	 * @param int y ycoord of block
	 * @param int x xcoord of block
	 * @return boolean if occupied
	 */
	checkRight(y, x) {
		if (x === 9) { // check for out of bounds
			return true;
		} else {
			return this.tiles[y][x + 1] !== 0;
		}
	}
	
	/*
	 * Check if block left is occupied
	 * @param int y ycoord of block
	 * @param int x xcoord of block
	 * @return boolean if occupied
	 */
	checkLeft(y, x) {
		if (x === 0) { // check for out of bounds
			return true;
		} else {
			return this.tiles[y][x - 1] !== 0;
		}
	}
}
