function Bird(birdImage){
	this.x = width/2-100;
	this.y = height/2-100;
	this.width = 50;
	this.height = 50;
	this.birdImage = birdImage;
	this.gravity = 0.6;
	this.velocity = 0.1;
	this.printBird=function(){
		image(this.birdImage, this.x , this.y , this.width, this.height);
	}
	this.fall = function(){
		
		if(this.y<=height-61){
			this.velocity = this.velocity + this.gravity;
			this.y  = this.y + this.velocity;
		}
	}
	this.up = function(){
		this.velocity = -10;
	}
}