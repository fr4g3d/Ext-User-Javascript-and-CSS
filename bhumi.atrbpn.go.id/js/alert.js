$(document).ready(function() {
 console.log( "ready!" );
 alert("Page-Res: 1156px X 770px");
 setTimeout(function() {
 	 $("<div>Page-Res: 1156px X 770px</div>").dialog();
 }, 1024);
 $("<div>Page-Res: 1156px X 770px</div>").dialog();
});
