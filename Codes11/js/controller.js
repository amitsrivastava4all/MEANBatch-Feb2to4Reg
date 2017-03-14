window.addEventListener("load",init);
function init(){
	document.getElementById("addBt").addEventListener("click",addItem);
	var itemNo = itemOperations.id;
	document.getElementById("itemno").innerHTML=itemNo;
	
	document.getElementById("searchBt").addEventListener("click",search);
}
function addItem(){
	var itemNo = document.getElementById("itemno").innerHTML;
	var itemName = document.getElementById("name").value;
	var itemDesc = document.getElementById("desc").value;
	var price = document.getElementById("price").value;
	var quantity = document.getElementById("quantity").value;
	var itemNo = itemOperations.id;
	itemOperations.addItem(itemName,itemDesc,price,quantity);
	document.getElementById("itemno").innerHTML=itemOperations.id;
	var tableBody = document.getElementById("itembody");
	var row = tableBody.insertRow();
	row.insertCell(0).innerHTML = itemNo;
	row.insertCell(1).innerHTML = itemName;
	row.insertCell(2).innerHTML = itemDesc;
	row.insertCell(3).innerHTML = price;
	row.insertCell(4).innerHTML = quantity;
	var deleteImg = document.createElement("img");
	deleteImg.src="images/delete.png";
	deleteImg.addEventListener("click",markForDeletion);
	var editImg = document.createElement("img");
	editImg.src="images/edit.png"
	var cell = row.insertCell(5);
	cell.appendChild(deleteImg);
	cell.appendChild(editImg);
	clearFields();
	printTotalRecords();
}

function markForDeletion(event){
	//console.dir(event);
	//console.dir(this);
	event.srcElement.parentNode.parentNode.classList.toggle("redcolor");
}

function search(){
var price = document.getElementById("price").value;
var subArray = itemOperations.searchByPrice(price);
printItems(subArray);
}

function printItems(itemArray){
	var tableBody = document.getElementById("itembody");
	tableBody.innerHTML = "";
	itemArray.forEach(function(itemObject){
					  
	var row = tableBody.insertRow();
	var index = 0;	
	for(var key in itemObject){
	row.insertCell(index).innerHTML=itemObject[key];
		index++;
		//console.log(key+" " +obj[key]);
}
//	row.insertCell(0).innerHTML = itemObject.id;
//	row.insertCell(1).innerHTML = itemObject.name;
//	row.insertCell(2).innerHTML = itemObject.desc;
//	row.insertCell(3).innerHTML = itemObject.price;
//	row.insertCell(4).innerHTML = itemObject.quantity;
	var deleteImg = document.createElement("img");
	deleteImg.src="images/delete.png";
	var editImg = document.createElement("img");
	editImg.src="images/edit.png"
	var cell = row.insertCell(5);
	cell.appendChild(deleteImg);
	cell.appendChild(editImg);
					  });
}

function clearFields(){
	
	 document.getElementById("name").value="";
	 document.getElementById("desc").value="";
	 document.getElementById("price").value="";
	document.getElementById("name").focus();
}

function printTotalRecords(){
document.getElementById("totalRecords").innerHTML = itemOperations.itemList.length;
	
}