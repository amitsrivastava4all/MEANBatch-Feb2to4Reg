function Pipe(){
	this.x = width;
	this.top = 0;
	this.bottom = height-50;
	this.width = 50;
	this.speed = -2;
	this.topheight = random(height/2);
	this.bottomheight = random(height/2);
	 
	this.printPipe=function(){
		fill('green');
		rect(this.x , this.top,this.width,this.topheight);
		rect(this.x , this.bottom,this.width,this.bottomheight);
		this.x = this.x + this.speed;
	}
}