window.addEventListener("load",function(){
	document.getElementById("loginBt").addEventListener("click",doLogin);
	document.getElementById("regBt").addEventListener("click",doRegister);
	
});
function doLogin(){
var userid = document.getElementById("userid").value;
var pwd = document.getElementById("pwd").value;
	var isAuth = userOperations.authUser(userid, pwd);
	if(isAuth){
		location.href="welcome.html"
	}
	else
		{
			document.getElementById("msg").innerHTML ="Invalid Userid or password";
		}
}
function doRegister(){
var userid = document.getElementById("userid").value;
var pwd = document.getElementById("pwd").value;
var isRegister = userOperations.registerUser(userid,pwd);	
if(isRegister){
	document.getElementById("msg").innerHTML = "Register Done..";
}
else
	{
		document.getElementById("msg").innerHTML ="Register Not Done..";
}
}