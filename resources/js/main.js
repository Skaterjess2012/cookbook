function displayImgs() {
	var content = document.getElementById('content');
	var count = 1;
	while (count < 12)
	{
		img = document.createElement('div'); //create a new img object
		img.className = "img";
		img.id = "img-" + count;
		img.style.background = "lightgray url(../img/" + count +".jpeg) no-repeat center";
		img.style.backgroundSize = "cover";
		content.appendChild(img);

		imgCover = document.createElement('div');
		imgCover.className = "img-cover";
		imgCover.id = "img-cover-" + count;
		//imgCover.style.width = "100%";
		//imgCover.style.height = "100%";
		document.getElementById("img-" + count).appendChild(imgCover);

		txtCon = document.createElement('div');
		txtCon.className = "txt-container";
		txtCon.id = "txt-container-" + count;
		txtCon.style.marginTop = "-100%";
		txtCon.style.height = "100%";
		txtCon.style.display = "flex";
		txtCon.style.justifyContent = "center";
		txtCon.style.alignItems = "flex-end";
		txtCon.style.background = "transparent";
		document.getElementById("img-" + count).appendChild(txtCon);

		text = document.createElement('p');
		text.className = "text";
		text.id = "text-" + count;
		text.textContent = "WIP";
		text.style.color = "white";
		text.style.fontSize = "5em";
		text.style.margin = 0;
		document.getElementById("txt-container-" + count).appendChild(text);


		count++;
	}
}
displayImgs();