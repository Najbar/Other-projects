var playerPic = document.createElement("img");
var mapPics = [];

var picsToLoad = 0;

function countLoadedImagesAndLaunchIfReady() {
	picsToLoad--;
	if(picsToLoad == 0) {
	startGame();
	}
}

function beginLoadingImage(imgVar, fileName) {
	imgVar.onload = countLoadedImagesAndLaunchIfReady;
	imgVar.src = "images/"+fileName;
}

function loadImageForMapCode(mapCode, fileName) {
	mapPics[mapCode] = document.createElement("img");
	beginLoadingImage(mapPics[mapCode], fileName);
}

function loadImages() {
	var imageList = [
		{varName: playerPic, theFile: "player.png"},

		{mapType: BLOCK, theFile: "block.png"},
		{mapType: GROUND, theFile: "ground.png"},
		{mapType: BOX, theFile: "box.png"},
		{mapType: TARGET, theFile: "target.png"},
		{mapType: BOXINTARGET, theFile: "boxintarget.png"},		
		];

	picsToLoad = imageList.length;

	for(var i=0;i<imageList.length;i++) {
		if(imageList[i].varName != undefined) {
			beginLoadingImage(imageList[i].varName, imageList[i].theFile);
		} else {
			loadImageForMapCode(imageList[i].mapType, imageList[i].theFile);
		}
	}
}