$(document).ready(function() {
	var animal = prompt("For more information, please type either 'insect', 'turtle' or 'snake'");

	if (animal === 'insect') {
		$('#insect').show();
	} else if (animal === 'turtle') {
		$('#turtle').show();
	} else if (animal === 'snake') {
		$('#snake').show();
	} else {
		alert('Unrecognised request, please try again');
	};
});