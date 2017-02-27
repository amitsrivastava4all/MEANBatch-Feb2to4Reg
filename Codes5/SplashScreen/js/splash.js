
var myFont;
var isGameStart = false;
var speed =0.5;
function preload(){
	myFont = loadFont('fonts/ARCADECLASSIC.TTF');
}
function setup(){
	createCanvas(500,500);
	textFont(myFont);
	
}
function gaming(){
	fill('red');
	text("Hello Gamer",100,100);
	
	textSize(speed);
	speed = speed + 0.5;
	if(speed>=50){
		speed = 0.5;
	}
}

function draw(){
	if(!isGameStart){
	background('black');
	stroke(255, 204, 0);
	strokeWeight(4);
	noFill();
	
	//fill('green');
	textSize(56);
	//rectMode(CENTER);
	rect(100,200,350,50);
	text(" Game Start ", 150,250);
	fill('red');
	textSize(56);
	text("Game 2017",100,100);
	}
	else{
		background('black');
		gaming();
	}
}
function clickWithInArea(){
	if(mouseX>=100 && mouseX<=(100+350)){
		if(mouseY>=200 && mouseY<=(200+50)){
			isGameStart = true;
			//alert("Clicked...");
		}
	}
}
function mousePressed(){
	console.log("Mouse Clicked... "+mouseX+" "+mouseY);
	clickWithInArea();
}
