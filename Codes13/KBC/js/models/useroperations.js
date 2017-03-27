var userOperations={
	userArray:[],
	registerUser:function(userid,pwd){
		var userObject = new User(userid, pwd);
		this.userArray.push(userObject);
		var jsonString = JSON.stringify(this.userArray);
		console.log("JSON String is ",jsonString);
		console.log("Array is ",this.userArray);
		localStorage.mydata = jsonString;
		return true;
	},
	authUser:function(userid,pwd){
		if(localStorage.mydata){
			this.userArray = JSON.parse(localStorage.mydata);
		}
		var subArray = this.userArray.filter(function(userObject){
			return userObject.userid == userid && userObject.password==pwd;	
		});
		return subArray.length>0?true:false;
	}
}