function Fire(x,y,speed){
	this.x = x ;
	this.y = y;
	this.width = 50;
	this.height = 50;
	this.speed = speed;
	
	this.move= function(sprite2,x,y){
		this.checkCollision(sprite2,x,y);
		this.changeDirection();
		this.y = this.y + this.speed;
		
	}
	this.checkCollision=function(sprite2,x,y){
		var myx = abs(this.x - x);
		//console.log(this.x + " "+x);
		var myy = abs(this.y - y);
		
		var xResult= myx<Math.max(this.width,100);
		var yResult = myy<Math.max(this.height,100);
		console.log(myx+" "+myy);
		console.log(xResult +"  "+yResult);
		if(xResult && yResult){
			alert("Game Over");
			noLoop();
		}
		
	}
	this.changeDirection=function(){
		if(this.y>height-100){
			this.speed = -1;
		}
		else
		if(this.y<50){
			this.speed = 1;
		}	
	}
	
}