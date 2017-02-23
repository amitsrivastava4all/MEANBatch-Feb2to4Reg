var sky ;
var birdImage;
var bird ;
var pipe;
var pipes=[];
function preload(){
	sky = loadImage("assets/sky.gif");
	birdImage = loadImage("assets/bird.gif"); 
}

function setup(){
	createCanvas(500,500);
	
	bird = new Bird(birdImage);
	pipe = new Pipe();
	pipes.push(pipe);
}

function pipePassAway(){
	if(frameCount%240===0){
		pipes.push(new Pipe());
		}
}

function printPipes(){
for(var i = 0;i<pipes.length; i++){
	pipes[i].printPipe();
}
}

function draw(){
	background(sky);
	bird.printBird();
	bird.fall();
	printPipes();
	pipePassAway();
	console.log(frameCount);
}
function keyPressed(){
	var SPACE = 32;
	if(keyCode ===SPACE){
		bird.up();
	}
	//console.log("Key Code ",keyCode);
}