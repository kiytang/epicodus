$(document).ready(function() {
	$("p#first").click(function() {
	$("p#first").removeClass();
	$("p#first").addClass("change-background");
	});

	$("p#second").click(function() {
	$("p#second").addClass("second-background");
	});
})