var	number = 0;
var varUp1V = 0;
var upCostClick = 10;
var varUpClickV = 1; 
var up1Cost = 10;
var varUp2V = 0;
var up2Cost = 1000;
var varUp3V = 0;
var up3Cost = 50000;

async function update() {
	while (true) {
		await sleep(2000);
		varUp1VAdd = varUp1V * 1;
		varUp2VAdd = varUp2V * 10;
		varUp3VAdd = varUp3V * 100;
		number = number + varUp1VAdd + varUp2VAdd + varUp3VAdd;
		pogPerSec = varUp1VAdd + varUp2VAdd + varUp3VAdd;

		document.getElementById("value").innerHTML="Pogchamps: " + number;
		document.getElementById("perSec").innerHTML= pogPerSec + " pogchamps/second";
	}
}
async function updateClick() {
	document.getElementById("value").innerHTML="Pogchamps: " + number;
}


async function clicked() {
	var varClickValue = varUpClickV;
	number = number + varClickValue;
	updateClick();
	document.getElementById("pog").style="width: 40%";
	await sleep(100);
	document.getElementById("pog").style="width: 50%";


}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function up1Buy() {
	if (number>=up1Cost) {
		varUp1V = varUp1V + 1;
		number = number - up1Cost;
		up1Cost = Math.pow(up1Cost, 1.1);
		up1Cost = Math.floor(up1Cost);
		document.getElementById("up1v").innerHTML= varUp1V + "st";
		document.getElementById("up1").innerHTML= "Generator [" + up1Cost + "]";
		update();
	}
}

function up2Buy() {
	if (number>=up2Cost) {
		varUp2V = varUp2V + 1;
		number = number - up2Cost;
		up2Cost = Math.pow(up2Cost, 1.1);
		up2Cost = Math.floor(up2Cost);
		document.getElementById("up2v").innerHTML= varUp2V + "st";
		document.getElementById("up2").innerHTML= "Generator [" + up2Cost + "]";
		update();
	}
}

function up3Buy() {
	if (number>=up3Cost) {
		varUp3V = varUp3V + 1;
		number = number - up3Cost;
		up3Cost = Math.pow(up3Cost, 1.1);
		up3Cost = Math.floor(up3Cost);
		document.getElementById("up3v").innerHTML= varUp3V + "st";
		document.getElementById("up3").innerHTML= "Generator [" + up3Cost + "]";
		update();
	}
}

function upBuyClick() {
	if (number>=upCostClick) {
		varUpClickV = varUpClickV + 1;
		number = number - upCostClick;
		upCostClick = Math.pow(upCostClick, 1.1);
		upCostClick = Math.floor(upCostClick);
		document.getElementById("clickUpLvl").innerHTML= "lvl: " + varUpClickV;
		document.getElementById("clickUp").innerHTML= "Click Value [" + upCostClick + "]";
		update();
	}
}