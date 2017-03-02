
//alert("Nothing is Loaded....");
window.addEventListener("load",screenLoaded);
function screenLoaded(){
//alert("screen is loaded...");	
	document.getElementById("greetBt").addEventListener("click",greet);
	document.getElementById("firstName").addEventListener("keyup",isNotBlank);
	document.getElementById("lastName").addEventListener("keyup",isNotBlank);
	

}

function isNotBlank(){
	
	if(this.value.trim().length>0){
	    if(this.id =="firstName"){	document.getElementById("firstnameerror").innerHTML="";
		}
		if(this.id=="lastName"){
			document.getElementById("lastnameerror").innerHTML="";
		}
	}
}

//
//document.getElementById("greetBt")

function validate(str,errorId,msg){
	if(str.trim().length==0){
		document.getElementById(errorId).innerHTML = msg+" Can't Be Blank";
		return true;
	}
	else{
	document.getElementById(errorId).innerHTML="";	
		return false;
	}
}

function greet(){
var firstNameVal  = document.getElementById("firstName").value;
	
var secondNameVal = document.getElementById("lastName").value;
var firstNameResult = validate(firstNameVal,'firstnameerror',"First Name");
var lastNameResult = validate(secondNameVal,'lastnameerror',"Last Name");	

if( !firstNameResult && !lastNameResult){
	
	
	//alert("Greet Call "+firstNameVal);
document.getElementById("msg").innerHTML="Welcome "+initCap(firstNameVal)+" "+initCap(secondNameVal);
	changeColor();
}
}

function initCap(str){
 return str.charAt(0).toUpperCase() +  str.substring(1).toLowerCase();
}
function changeColor(){
	document.getElementById("msg").className="myred";
}

function clearFields(){
	document.getElementById("firstName").value="";
	document.getElementById("lastName").value="";
	document.getElementById("firstName").focus();
	document.getElementById("msg").innerHTML="";
}