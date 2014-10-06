$(document).ready(function() {
	$('#blanks form').submit(function(event) {
		var person1Input = $("input#person1").val();
		var person2Input = $("input#person2").val();
		var animalInput  = $("input#animal").val();
		var exclaimationInput = $("input#exclaimation").val();
		var verbInput = $("input#verb").val();
		var nounInput = $("input#noun").val();


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