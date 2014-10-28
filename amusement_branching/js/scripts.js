$(document).ready(function() {
	var height = parseFloat(prompt("Please enter your height in meters"));

	if (height > 1.2) {
		$('#rides').show();
	} else if (height === 1.2) {
		alert("Just made it :)");
	} else {
		$('#young-fun').show();
	};
});