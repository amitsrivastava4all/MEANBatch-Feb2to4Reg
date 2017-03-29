function imageSearch(){
	var searchTxt = document.getElementById("searchTxt").value;
	var url = "http://api.giphy.com/v1/gifs/search?q="+searchTxt+"&api_key=dc6zaTOxFJmzC";
	loadJSON(url,imageDone);
	
}

function imageDone(result){
	document.getElementById("imageResult").innerHTML="";
	//console.log(result.data[0].images.downsized_large.url);
	result.data.forEach(function(d){
	var image = document.createElement("img");
	image.src = d.images.downsized_large.url;
		document.getElementById("imageResult").appendChild(image);
	})
		//console.log(result.data[0].images);
}