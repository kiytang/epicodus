$(document).ready(function() {
	$("button#first").click(function() {
	$("body").removeClass();
	$("body").addClass("change-background");
	});

	$("button#second").click(function() {
	$("body").removeClass();
	$("body").addClass("original-background");
	});
})