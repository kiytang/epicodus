	$(document).ready(function() {
		var age = prompt("How old are you?");

		if(age>=21) {
			$('#drinks').show();
		} else {
			$('#under-21').show();
		}
	});