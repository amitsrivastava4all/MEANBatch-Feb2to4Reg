var fireArray = prepareFire();
function prepareFire(){
	
	
	var fireObject1 = new Fire(150,50,1);
	var fireObject2 = new Fire(300,50,2);
	var fireObject3 = new Fire(450,50,3);
	var fireObject4 = new Fire(570,50,4);
	var fireArray =[fireObject1,fireObject2,fireObject3,fireObject4];
	return fireArray;
	
	
}
function printFire(fire,sprite2,x,y){
	
	for(var i = 0 ; i<fireArray.length; i++){
		image(fire,fireArray[i].x,fireArray[i].y,50,50);
		fireArray[i].move(sprite2,x,y);
	}
}