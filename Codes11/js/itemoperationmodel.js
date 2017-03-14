// Add, Delete , search , upate, sort, load
var itemOperations={
	id : 1,
	itemList:[],
	addItem:function(name,desc,price,quantity){
		var itemObject = new Item(this.id,name,desc,price,quantity);
		this.itemList.push(itemObject);
		this.id++;
	},
	searchByPrice:function(price){
		return this.itemList.filter(function (itemObject){
			return itemObject.price >= price;
		});
		
		
	}
}