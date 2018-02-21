function loadimgs() {
	let content = document.getElementById('content');
	let count = 1;
	while (count < 12) {

		img = document.createElement('div'); //create a new img object
		img.className = "img";
		img.id = "img-" + count;
		img.style.background = "lightgrey url(../img/" + count +".jpeg) no-repeat center";
		img.style.backgroundSize = "cover";
		img.style.position = "relative";
		content.append(img);

		imgCover = document.createElement('div');
		imgCover.className = "img-cover";
		imgCover.id = "img-cover-" + count;
		document.getElementById("img-" + count).append(imgCover);

		imgTxtCon = document.createElement('div');
		imgTxtCon.className = "img-txt-con";
		imgTxtCon.id = "img-txt-con-" + count;
		imgTxtCon.style.position = "absolute";
		imgTxtCon.style.zIndex = "1";
		document.getElementById("img-" + count).append(imgTxtCon);

		imgTxt = document.createElement('h1');
		imgTxt.textContent = "WIP";
		document.getElementById("img-txt-con-" + count).append(imgTxt);
		count++;
	}
}
function imghover() {
	let imgTxtCon = document.getElementsByClass('img-txt-con');
	let imgCover = document.getElementsByClass('img-cover');
}
loadimgs();