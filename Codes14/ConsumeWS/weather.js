function getWeather(){
var country = document.getElementById("country").value;
var city = document.getElementById("city").value;	
var url = "	http://api.openweathermap.org/data/2.5/weather?q="+city+","+country+"%27+%20%27&APPID=7bbbb47522848e8b9c26ba35c226c734";
loadJSON(url,weatherLoadDone);	
	
}

function weatherLoadDone(data){
	//console.log("Data is ",data);
	
	var str="";
	data.weather.forEach(function(w){
		str += w.main;	
	})
	document.getElementById("weatherresult").innerHTML = "Name "+data.name+" Weather "+str;
}