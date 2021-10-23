/* 
 *__________                        ___ ___                                                
 *\______   \___.__._____    ____  /   |   \_____   __ __  ____     ___  ______.__.________
 * |       _<   |  |\__  \  /    \/    ~    \__  \ |  |  \/ ___\    \  \/  <   |  |\___   /
 * |    |   \\___  | / __ \|   |  \    Y    // __ \|  |  / /_/  >    >    < \___  | /    / 
 * |____|_  // ____|(____  /___|  /\___|_  /(____  /____/\___  / /\ /__/\_ \/ ____|/_____ \
 *        \/ \/          \/     \/       \/      \/     /_____/  \/       \/\/           \/
 * Title: Tetromino.js
 * Author: Ryan Haug
 * Date: Oct 20, 2021
 * Purpose: Create Tetromino objects to get properties from, and handles states
 * /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
 */

class Tetromino {

	constructor(y, x, color) {
		this.currentState = 1;
		this.maxStates;
		this.colorName = new String();
		this.colorNum = color;
		this.Yabsolute = y;
		this.Xabsolute = x;
		this.blockAy;
		this.blockAx;
		this.blockBy;
		this.blockBx;
		this.blockCy;
		this.blockCx;
		switch (color) {
			case 1:
				//cyan
				this.colorName = "cyan";
				this.maxStates = 2;
				break;
			case 2:
				//blue
				this.colorName = "blue";
				this.maxStates = 4;
				break;
			case 3:
				//orange
				this.colorName = "orange";
				this.maxStates = 4;
				break;
			case 4:
				//yellow
				this.colorName = "yellow";
				this.maxStates = 1;
				break;
			case 5:
				//green
				this.colorName = "green";
				this.maxStates = 2;
				break;
			case 6:
				//purple
				this.colorName = "purple";
				this.maxStates = 4;
				break;
			case 7:
				//red
				this.colorName = "red";
				this.maxStates = 2;
				break;
		}
		this.updateBlocks();
	}
	
	resetPiece(y,x,color) {
		this.currentState = 1;
		this.colorNum = color;
		this.Yabsolute = y;
		this.Xabsolute = x;
		switch (color) {
			case 1:
				//cyan
				this.colorName = "cyan";
				this.maxStates = 2;
				break;
			case 2:
				//blue
				this.colorName = "blue";
				this.maxStates = 4;
				break;
			case 3:
				//orange
				this.colorName = "orange";
				this.maxStates = 4;
				break;
			case 4:
				//yellow
				this.colorName = "yellow";
				this.maxStates = 1;
				break;
			case 5:
				//green
				this.colorName = "green";
				this.maxStates = 2;
				break;
			case 6:
				//purple
				this.colorName = "purple";
				this.maxStates = 4;
				break;
			case 7:
				//red
				this.colorName = "red";
				this.maxStates = 2;
				break;
		}
		this.updateBlocks();
	}
	
	// local method for rotating and moving blocks
	updateBlocks() {
		switch (this.colorNum) {
			case 1:
				//cyan
				switch (this.currentState){
					case 1:
						this.blockAy = this.Yabsolute;
						this.blockAx = this.Xabsolute - 1;
						this.blockBy = this.Yabsolute;
						this.blockBx = this.Xabsolute + 1;
						this.blockCy = this.Yabsolute;
						this.blockCx = this.Xabsolute + 2;
						break;
					case 2:
						this.blockAy = this.Yabsolute - 1;
						this.blockAx = this.Xabsolute;
						this.blockBy = this.Yabsolute + 1;
						this.blockBx = this.Xabsolute;
						this.blockCy = this.Yabsolute + 2;
						this.blockCx = this.Xabsolute;
						break;
				}
				break;
			case 2:
				//blue
				switch (this.currentState){
					case 1:
						this.blockAy = this.Yabsolute - 1;
						this.blockAx = this.Xabsolute;
						this.blockBy = this.Yabsolute;
						this.blockBx = this.Xabsolute + 1;
						this.blockCy = this.Yabsolute;
						this.blockCx = this.Xabsolute + 2;
						break;
					case 2:
						this.blockAy = this.Yabsolute;
						this.blockAx = this.Xabsolute + 1;
						this.blockBy = this.Yabsolute + 1;
						this.blockBx = this.Xabsolute;
						this.blockCy = this.Yabsolute + 2;
						this.blockCx = this.Xabsolute;
						break;
					case 3:
						this.blockAy = this.Yabsolute + 1;
						this.blockAx = this.Xabsolute;
						this.blockBy = this.Yabsolute;
						this.blockBx = this.Xabsolute - 1;
						this.blockCy = this.Yabsolute;
						this.blockCx = this.Xabsolute - 2;
						break;
					case 4:
						this.blockAy = this.Yabsolute;
						this.blockAx = this.Xabsolute - 1;
						this.blockBy = this.Yabsolute - 1;
						this.blockBx = this.Xabsolute;
						this.blockCy = this.Yabsolute - 2;
						this.blockCx = this.Xabsolute;
						break;
				}				
				break;
			case 3:
				//orange
				switch (this.currentState){
					case 1:
						this.blockAy = this.Yabsolute - 1;
						this.blockAx = this.Xabsolute;
						this.blockBy = this.Yabsolute;
						this.blockBx = this.Xabsolute - 1;
						this.blockCy = this.Yabsolute;
						this.blockCx = this.Xabsolute - 2;
						break;
					case 2:
						this.blockAy = this.Yabsolute;
						this.blockAx = this.Xabsolute + 1;
						this.blockBy = this.Yabsolute - 1;
						this.blockBx = this.Xabsolute;
						this.blockCy = this.Yabsolute - 2;
						this.blockCx = this.Xabsolute;
						break;
					case 3:
						this.blockAy = this.Yabsolute + 1;
						this.blockAx = this.Xabsolute;
						this.blockBy = this.Yabsolute;
						this.blockBx = this.Xabsolute + 1;
						this.blockCy = this.Yabsolute;
						this.blockCx = this.Xabsolute + 2;
						break;
					case 4:
						this.blockAy = this.Yabsolute;
						this.blockAx = this.Xabsolute - 1;
						this.blockBy = this.Yabsolute + 1;
						this.blockBx = this.Xabsolute;
						this.blockCy = this.Yabsolute + 2;
						this.blockCx = this.Xabsolute;
						break;
				}
				
				break;
			case 4:
				//yellow
				this.blockAy = this.Yabsolute;
				this.blockAx = this.Xabsolute + 1;
				this.blockBy = this.Yabsolute + 1;
				this.blockBx = this.Xabsolute;
				this.blockCy = this.Yabsolute + 1;
				this.blockCx = this.Xabsolute + 1;
				break;
			case 5:
				//green
				switch (this.currentState) {
					case 1:
						this.blockAy = this.Yabsolute + 1;
						this.blockAx = this.Xabsolute - 1;
						this.blockBy = this.Yabsolute + 1;
						this.blockBx = this.Xabsolute;
						this.blockCy = this.Yabsolute;
						this.blockCx = this.Xabsolute + 1;						
						break;
					case 2:
						this.blockAy = this.Yabsolute + 1;
						this.blockAx = this.Xabsolute + 1;
						this.blockBy = this.Yabsolute;
						this.blockBx = this.Xabsolute + 1;
						this.blockCy = this.Yabsolute - 1;
						this.blockCx = this.Xabsolute;						
						break;
				}

				break;
			case 6:
				//purple
				
				switch (this.currentState){
					case 1:
						this.blockAy = this.Yabsolute;
						this.blockAx = this.Xabsolute - 1;
						this.blockBy = this.Yabsolute - 1;
						this.blockBx = this.Xabsolute;
						this.blockCy = this.Yabsolute;
						this.blockCx = this.Xabsolute + 1;
						break;
					case 2:
						this.blockAy = this.Yabsolute - 1;
						this.blockAx = this.Xabsolute;
						this.blockBy = this.Yabsolute;
						this.blockBx = this.Xabsolute + 1;
						this.blockCy = this.Yabsolute + 1;
						this.blockCx = this.Xabsolute;
						break;
					case 3:
						this.blockAy = this.Yabsolute;
						this.blockAx = this.Xabsolute + 1;
						this.blockBy = this.Yabsolute + 1;
						this.blockBx = this.Xabsolute;
						this.blockCy = this.Yabsolute;
						this.blockCx = this.Xabsolute - 1;
						break;
					case 4:
						this.blockAy = this.Yabsolute + 1;
						this.blockAx = this.Xabsolute;
						this.blockBy = this.Yabsolute;
						this.blockBx = this.Xabsolute - 1;
						this.blockCy = this.Yabsolute - 1;
						this.blockCx = this.Xabsolute;
						break;
				}
				break;
			case 7:
				//red
				switch(this.currentState){
					case 1:
						this.blockAy = this.Yabsolute;
						this.blockAx = this.Xabsolute - 1;
						this.blockBy = this.Yabsolute + 1;
						this.blockBx = this.Xabsolute;
						this.blockCy = this.Yabsolute + 1;
						this.blockCx = this.Xabsolute + 1;
						break;
					case 2:
						this.blockAy = this.Yabsolute - 1;
						this.blockAx = this.Xabsolute;
						this.blockBy = this.Yabsolute;
						this.blockBx = this.Xabsolute - 1;
						this.blockCy = this.Yabsolute + 1;
						this.blockCx = this.Xabsolute - 1;
						break;
				}
				break;
		}

	}
	
	/*
	 * Change y position of tetromino
	 * @param int changeY magnitude to change ycoord by
	 */
	drop(changeY) {
		this.Yabsolute += changeY;
		this.updateBlocks();
	}
	
	/*
	 * Change x position of tetromino
	 * @param int changeX magnitude to change xcoord by
	 */
	moveHorizontal(changeX) {
		this.Xabsolute += changeX;
		this.updateBlocks();
	}
	
	/*
	 * Get color of tetromino piece
	 * @returns int colorNum color of tetromino
	 */
	getColor() {
		return this.colorNum;
	}
	
	/*
	 * Rotates block by changing state and calling update blocks
	 */
	rotate() {
		if (this.currentState === this.maxStates) {
			this.currentState = 1;
		} else {
			this.currentState += 1;
		}
		this.updateBlocks();
	}

	/*
	 * Find coordinates of block of tetromino
	 * @param int block Abs=1,A=2, B=3, or C=4
	 * @param int dimension y=1 or x=2
	 * @return int coordinate position of block
	 */
	getCoord(block, dimension) {
		switch (block) {
			case 1: //Absolute
				if (dimension === 1) {
					return this.Yabsolute;
				} else {
					return this.Xabsolute;
				}
				break;
			case 2: //A
				if (dimension === 1) {
					return this.blockAy;
				} else {
					return this.blockAx;
				}
				break;
			case 3: //B
				if (dimension === 1) {
					return this.blockBy;
				} else {
					return this.blockBx;
				}
				break;
			case 4: //C
				if (dimension === 1) {
					return this.blockCy;
				} else {
					return this.blockCx;
				}
				break;

		}
	}

}
