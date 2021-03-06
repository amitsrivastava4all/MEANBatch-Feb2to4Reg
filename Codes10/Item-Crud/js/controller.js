window.addEventListener("load",init);
function init(){
	document.getElementById("addBt").addEventListener("click",addItem);
	var itemNo = itemOperations.id;
	document.getElementById("itemno").innerHTML=itemNo;
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
	var editImg = document.createElement("img");
	editImg.src="images/edit.png"
	var cell = row.insertCell(5);
	cell.appendChild(deleteImg);
	cell.appendChild(editImg);
	clearFields();
	printTotalRecords();
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