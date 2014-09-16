$(document).ready(function() {
	jQuery("h1").click(function() {
	alert("This is a header.");
	alert("I told you this is a header");
	});

	$("p").click(function() {
		alert("This is a paragraph.");
	});

	$("img").click(function() {
		alert("This is an image");
	});
});
