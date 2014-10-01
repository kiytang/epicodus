$(document).ready(function() {
	$("button#cat").click(function() {
		$("ul#starter").prepend("<li>meow</li>");
		$("ul#response").prepend("<li>bark bark</li>");
	});

	$("button#dog").click(function() {
		$("ul#starter").prepend("<li>bark bark</li>");
		$("ul#response").prepend("<li> meow meow</li>");
	});	
});