$(document).ready(function() {
	var vote_age = prompt("How old are you?");

	if (vote_age > 18) {
		$('#vote').show();
	} else if (vote_age === 18) {
		alert("Great news, you can vote");
		$('#vote').show();
	} else {
		$('#under-18').show();
	};
});