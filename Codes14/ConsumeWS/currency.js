function callServer(){
	var curr = document.getElementById("currency").value;
	console.log("CURR ",curr);
	var url = "http://api.fixer.io/latest?base=USD&symbols=USD,"+curr;
	loadJSON(url,done);
}
function done(data){
	var curr = document.getElementById("currency").value;
	document.getElementById("rate").innerHTML=data.rates[curr];

}

function setup(){
	
document.getElementById("searchTxt").addEventListener("change",imageSearch);	document.getElementById("currency").addEventListener("change",callServer);	
     document.getElementById("city").addEventListener("change",getWeather);	//document.getElementById("convert").addEventListener("click",convertIt);
}
		