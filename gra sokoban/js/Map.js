const MAP_W = 64;
const MAP_H = 64;
const MAP_COLS = 15;
const MAP_ROWS = 9;
var level1 =    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
				 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
				 0, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 4, 0,
				 0, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 4, 0,
				 0, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 4, 0,
				 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
				 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
				 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
				 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				 ];

var level2 =    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
				 0, 2, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0,
				 0, 1, 1, 1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 4, 0,
				 0, 1, 1, 1, 1, 3, 1, 1, 1, 0, 1, 1, 1, 4, 0,
				 0, 1, 1, 1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 4, 0,
				 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0,
				 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
				 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0,
				 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				 ];

var levelList = [level1, level2];
var levelNow = 0;
var mapGrid = [];

const BLOCK = 0;
const GROUND = 1;
const PLAYERSTART = 2;
const BOX = 3;
const TARGET = 4;
const BOXINTARGET = 5;

function returnTileTypeAtColRow(col, row) {
	if(col >= 0 && col < MAP_COLS &&
		row >= 0 && row < MAP_ROWS) {
		 var mapIndexUnderCoord = rowColToArrayIndex(col, row);
		 return mapGrid[mapIndexUnderCoord];
	} 
}

function rowColToArrayIndex(col, row) {
	return col + MAP_COLS * row;
}

function drawMaps() {
	var arrayIndex = 0;
	var drawTileX = 0;
	var drawTileY = 0;
	for(var eachRow=0;eachRow<MAP_ROWS;eachRow++) {
		for(var eachCol=0;eachCol<MAP_COLS;eachCol++) {

			var arrayIndex = rowColToArrayIndex(eachCol, eachRow); 
			var tileKindHere = mapGrid[arrayIndex];
			var useImg = mapPics[tileKindHere];
			canvasContext.drawImage(useImg,drawTileX,drawTileY);
			drawTileX += MAP_W;
			arrayIndex++;
		} 
		drawTileY += MAP_H;
		drawTileX = 0;
	} 
}

function nextLevel() {
	levelNow++;
	if(levelNow >= levelList.length) {
		levelNow = 0;
	}
	loadLevel(levelList[levelNow]);
}

function loadLevel(whichLevel) {
	mapGrid = whichLevel.slice();
	resetPlayer(playerPic, "Marcin");	
	updateAll();
}

var boxes, boxesInTargets;

function countBoxes() {
	var boxes = 0;
	for(var eachRow=0;eachRow<MAP_ROWS;eachRow++) {
		for(var eachCol=0;eachCol<MAP_COLS;eachCol++) {
			var arrayIndex = rowColToArrayIndex(eachCol, eachRow); 
			if((levelList[levelNow][arrayIndex] == BOX) || (levelList[levelNow][arrayIndex] == BOXINTARGET)) {
				boxes++;
			}
		} 
	}
	return boxes;
}

function countBoxesInTargets() {
	var boxesInTargets = 0;
	for(var eachRow=0;eachRow<MAP_ROWS;eachRow++) {
		for(var eachCol=0;eachCol<MAP_COLS;eachCol++) {
			var arrayIndex = rowColToArrayIndex(eachCol, eachRow); 
			if(mapGrid[arrayIndex] == BOXINTARGET) {
				boxesInTargets++;
			}
		} 
	}
	return boxesInTargets;
}

function checkWin() {
	if(countBoxes() == countBoxesInTargets()) {
		nextLevel();
		return true;
	}
}