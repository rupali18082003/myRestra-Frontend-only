const username = document.getElementById('username');
const psw = document.getElementById('psw');
const home = document.getElementById('gotoHome');
const btnLogin = document.getElementById('login');

const account = {
	usr: "pasta",
	pin: "mJoking"
}

btnLogin.addEventListener('click', function(){
	const getUsr = username.value.toLowerCase();
	const getPin = psw.value;
	if(getUsr == account.usr && getPin == account.pin){
		alert("Logged in");
		home.href = "menu.html#adminBody";
	}else{
		alert("invalid username or pin");
	}
})