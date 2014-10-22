$(document).ready(function() {
	$("button#first").click(function() {
	$("body").removeClass();
	$("body").addClass("change-background");
	});

	$("button#second").click(function() {
	$("body").removeClass();
	$("body").addClass("original-background");
	});

	$("#btn1").click(function() {
		$("#rectangle").animate({height: "600px"});
	});
	$("#btn2").click(function() {
		$("#rectangle").animate({height: "100px"});
	});
})