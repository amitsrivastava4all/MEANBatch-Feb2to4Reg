var itemOperations={
	id : 1,
	itemList:[],
	addItem:function(name,desc,price,quantity){
		var itemObject = new Item(this.id,name,desc,price,quantity);
		this.itemList.push(itemObject);
		this.id++;
	}
}