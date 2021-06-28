var inputs = document.getElementsByTagName('input');
for(var i = 0; i < inputs.length; i++) {
	if(inputs[i].name.toLowerCase() == 'username') {
		inputs[i].value = "adminsuper";
	}
	if(inputs[i].type.toLowerCase() == 'password') {
		inputs[i].value = "adminsuper123";
	}
}
//$("input[name*='username']").val("adminsuper");
//$("input[name*='password']").val("adminsuper123");
setTimeout(function() {
for(var i = 0; i < inputs.length; i++) {
	if(inputs[i].type.toLowerCase() == 'submit') {
		inputs[i].click();
	}
}
	//$("input[type='submit']").click();
}, 4096);
