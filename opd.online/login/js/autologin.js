//on-URL: http://opd.online/login
var forms = document.getElementsByTagName('form');
var inputs = document.getElementsByTagName('input');

setTimeout(function() {
for(var h = 0; h < forms.length; h++) {
	if(forms[h].name.toLowerCase() == 'sendin') {
		forms[h].action = "http://opd.online/login";
	}
	if(forms[h].name.toLowerCase() == 'login') {
		forms[h].action = "http://opd.online/login";
	}
}
for(var i = 0; i < inputs.length; i++) {
	if(inputs[i].type.toLowerCase() == 'password') {
		inputs[i].value = "kotaperadaban";
	}
}
//-jq:
//	$("input[type='password'").val("kotaperadaban");

setTimeout(function() {
for(var j = 0; j < inputs.length; j++) {
	if(inputs[j].type.toLowerCase() == 'submit') {
		inputs[j].click();
	}
}
}, 1024);
//-jq
//	$("button[type='submit']").click();

}, 2048);
