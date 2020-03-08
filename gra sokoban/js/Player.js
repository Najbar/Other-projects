var player = {
	row: 0,
	col: 0,
	pic: null,
	name: null,
	controlKeyUp: 38,
	controlKeyRight: 39,
	controlKeyDown: 40,
	controlKeyLeft: 37
}	
	
function resetPlayer(whichImage, playerName) {
	player.name = playerName;
	player.pic = whichImage;

	for(var eachRow=0;eachRow<MAP_ROWS;eachRow++) {
		for(var eachCol=0;eachCol<MAP_COLS;eachCol++) {
			var arrayIndex = rowColToArrayIndex(eachCol, eachRow); 
			
			if(mapGrid[arrayIndex] == PLAYERSTART) {
				mapGrid[arrayIndex] = GROUND;
				player.row = eachRow;
				player.col = eachCol;				
				return;
			}
		} 
	}
}

function drawPlayer() {
	drawImg(playerPic, player.col * MAP_H, player.row * MAP_W)
}

function setup() {
	document.addEventListener('keydown', move);
}

function move(e) {
	var moveTile = {
		col: player.col,
		row: player.row,
		col2: player.col,
		row2: player.row
	}

	switch(e.keyCode)
	{
		case player.controlKeyRight:
			moveTile.col++;
			moveTile.col2 +=2;
			break;

		case player.controlKeyLeft:
			moveTile.col--;
			moveTile.col2 -=2;
			break;

		case player.controlKeyDown:
			moveTile.row++;
			moveTile.row2 +=2;
			break;

		case player.controlKeyUp:
			moveTile.row--;
			moveTile.row2 -=2;
			break;
	}
	
	var moveTileIndex = rowColToArrayIndex(moveTile.col, moveTile.row);
	var moveTileValue = mapGrid[moveTileIndex];
	var moveTile2Index = rowColToArrayIndex(moveTile.col2, moveTile.row2);
	var moveTile2Value = mapGrid[moveTile2Index];

	var moveTileIndex = [moveTileIndex, moveTile2Index];
	var moveTileValue = [moveTileValue, moveTile2Value];

	if ((moveTileValue[0] == 1)  ||
		(moveTileValue[0] == 4)) {
		playerMove(moveTile);
	}

	if (((moveTileValue[0] == 3) ||
		(moveTileValue[0] == 5)) &&
		((moveTileValue[1] == 1) ||
		(moveTileValue[1] == 4)))
		{
		playerMove(moveTile);
		updateMap(moveTileIndex, moveTileValue);
	}
}

function playerMove(tile) {
	player.col = tile.col;	
	player.row = tile.row;	
	updateAll();
	}

function updateMap(index, value) {
    if (value[0] == 3) {
    	mapGrid[index[0]] = 1;
    } else {
    	mapGrid[index[0]] = 4;
	}

	if (value[1] == 1) {
    	mapGrid[index[1]] = 3;
    } else {
    	mapGrid[index[1]] = 5;
	}
	updateAll();
}