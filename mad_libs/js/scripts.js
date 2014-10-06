$(document).ready(function() {
	$('#blanks form').submit(function(event) {
		$('.person1').append("blah blah");
		$('.person2').append("blah blah");
		$('.animal').append("blah blah");
		$('.exclaimation').append("blah blah");
		$('.verb').append("blah blah");
		$('.noun').append("blah blah");

		$('#story').show();

		event.preventDefault();
	});
});