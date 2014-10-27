$(document).ready(function() {
	var animal = prompt("For more information, please type 'insect', 'turtle' or 'snake'");

	if (animal === 'insect') {
		$('#insect').show();
	} else if (animal === 'turtle') {
		$('#turtle').show();
	} else {
		$('#snake').show();
	};
});