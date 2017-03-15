var bg ;
var p1, p2 ;
var sprite;
var speed = 0;
var x = 70;
var fire ;
function preload(){
	bg = loadImage("assets/bg.png");
	sprite = loadAnimation("assets/char1.5.png", "assets/char2.png","assets/char1.png");
	
	sprite2 = loadAnimation("assets/char1.5.png");
	p1 = loadImage("assets/char1.5.png");
	fire = loadImage("assets/fire.png");
	
	//p1 = loadImage("assets/char1.png");
	//p2 = loadImage("assets/char2.png");
	
}
function setup(){
	createCanvas(600,400);
	background(bg);
}
var isRight = false;
function keyReleased() {
	speed = 0;
	isRight = false;
	//animation(sprite2, x, height-100);
}
function keyPressed(){
if(keyCode==RIGHT_ARROW){
	speed = 1;
  	isRight = true;
	console.log("RIGHT...");
	//animation(sprite, x, height-100);
}
}

function draw(){
	background(bg);
	//if(isRight){
	printFire(fire,sprite2,x,height-100);
	if(isRight){
	animation(sprite, x, height-100);
	
	}
	else{
		animation(sprite2, x, height-100);
	}
	
	x = x + speed;
	//}
//	else{
//	image(p1,70,height-100);	
//	}
//	isRight = false;
}