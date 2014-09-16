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

	jQuery("h2").hover(function() {
		alert("This is a h2 header.");
		alert("h2 headers have a smaller size font than h1")
	});

	jQuery("ul").dblclick(function() {
		alert("This is a ul tag.");
	})
});
