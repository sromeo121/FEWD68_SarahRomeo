var tempCels = 50;

var tempFahr = tempCels * (9/5) + 32;

var tempThresh = 66

	

	
	if (tempFahr < tempThresh) {
		document.body.setAttribute("style", "background-color: gray;");
		}

	else {
		document.body.setAttribute("style", "background-color: yellow;");
		};
	

document.write(tempFahr);
