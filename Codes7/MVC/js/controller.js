window.addEventListener("load",init);
function init(){
	clearFields();
//	document.getElementById("addBt").addEventListener("click",compute);
//	document.getElementById("subBt").addEventListener("click",compute);
	var btArr = document.getElementsByTagName("button");
	for(var i = 0 ; i<btArr.length; i++){
		if(btArr[i].getAttribute("data-operation")=="clear"){
			btArr[i].addEventListener("click",clearFields);
		}
		else{
		btArr[i].addEventListener("click",compute);
		}
	}
}

function clearFields(){
	document.getElementById("firstno").value="";
	document.getElementById("secondno").value="";
	document.getElementById("firstno").focus();
}

//function callAdd(){
//	var firstNo = document.getElementById("firstno").value;
//	var secondNo = document.getElementById("secondno").value;
//	var sum = add(firstNo,secondNo);
//	document.getElementById("result").innerHTML = sum;
//}
//
//function callSub(){
//	var firstNo = document.getElementById("firstno").value;
//	var secondNo = document.getElementById("secondno").value;
//	var sum = subtract(firstNo,secondNo);
//	document.getElementById("result").innerHTML = sum;
//}

function compute(){
	var output ;
	var opr = this.getAttribute("data-operation") ;
	var firstNo = document.getElementById("firstno").value;
	var secondNo = document.getElementById("secondno").value;
	output = calcObject[opr](firstNo,secondNo);
//	if(this.innerHTML == "+"){
//		output = calcObject.add(firstNo,secondNo);
//	}
//	else
//	if(this.innerHTML == "-"){
//		output = calcObject.subtract(firstNo,secondNo);
//	}
	document.getElementById("result").innerHTML = output;
}