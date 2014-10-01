$(document).ready(function() {
	$("button#cat").click(function() {
		$("ul#starter").prepend("<li>meow <span class='clickable'>[x]</span></li>");
		$("ul#response").prepend("<li>bark bark <span class='clickable'>[x]</span></li>");

		$("ul#starter").children("li").first().click(function() {
			$(this).remove();
		})
		$("ul#response").children("li").first().click(function() {
			$(this).remove();
		})
	});

	$("button#dog").click(function() {
		$("ul#starter").prepend("<li>bark bark <span class='clickable'>[x]</span></li>");
		$("ul#response").prepend("<li> meow meow <span class='clickable'>[x]</span></li>");

		$("ul#starter").children("li").first().click(function() {
			$(this).remove();
		})
		$("ul#response").children('li').first().click(function() {
			$(this).remove();
		})


	});	


});