$(document).ready(function() {
	$('#blanks form').submit(function(event) {
		var person1Input = $("input#person1").val();
		var person2Input = $("input#person2").val();
		var animalInput  = $("input#animal").val();
		var exclaimationInput = $("input#exclaimation").val();
		var verbInput = $("input#verb").val();
		var nounInput = $("input#noun").val();


		$('.person1').append(person1Input);
		$('.person2').append(person2Input);
		$('.animal').append(animalInput);
		$('.exclaimation').append(exclaimationInput);
		$('.verb').append(verbInput);
		$('.noun').append(nounInput);

		$('#story').show();

		event.preventDefault();
	});
});