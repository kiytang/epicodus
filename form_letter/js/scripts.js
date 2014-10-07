$(document).ready(function() {
	$('#blanks form').submit(function(event) {
		var nameInput = $("input#name").val();

		$('.name').text(nameInput);
		$('#story').show();

		event.preventDefault();
	});
});
