//on-URL: http://opd.online/login
var inputs = document.getElementsByTagName('input');
var buttons = document.getElementsByTagName('button');
setTimeout(function() {
for(var i = 0; i < inputs.length; i++) {
	if(inputs[i].type.toLowerCase() == 'password') {
		inputs[i].value = "kotaperadaban";
	}
}
//-jq:
//	$("input[type='password'").val("kotaperadaban");

setTimeout(function() {
for(var j = 0; j < buttons.length; j++) {
	if(buttons[j].type.toLowerCase() == 'submit') {
		buttons[j].click();
	}
}
}, 1024);
//-jq
//	$("button[type='submit']").click();

}, 2048);
