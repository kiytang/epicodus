$(document).ready(function() {
	$("button#cat").click(function() {
		alert("You Have chosen Mufasa to voice first.");
		$("ul#starter").prepend("<li>meow <span class='clickable'>[x]</span></li>");
		$("ul#response").prepend("<li>bark bark <span class='clickable'>[x]</span></li>");

		$("ul#starter").children("li").first().click(function() {
			$(this).remove();
		})
		$("ul#response").children("li").first().click(function() {
			$(this).remove();
		})
	});

	$("img#cat_img").click(function() {
		$("ul#starter").prepend("<li>Everything you see exists together in a delicate balance. . <span class='clickable'>[x]</span></li>");
		$("ul#response").prepend("<li>You know what? That makes me mad. <span class='clickable'>[x]</span></li>");

		$("ul#starter").children("li").first().click(function() {
			$(this).remove();
		})
		$("ul#response").children("li").first().click(function() {
			$(this).remove();
		})
	});

	$("button#dog").click(function() {
		alert("You have chose Droopy to voice first")
		$("ul#starter").prepend("<li>bark bark <span class='clickable'>[x]</span></li>");
		$("ul#response").prepend("<li> meow meow <span class='clickable'>[x]</span></li>");

		$("ul#starter").children("li").first().click(function() {
			$(this).remove();
		})
		$("ul#response").children('li').first().click(function() {
			$(this).remove();
		})
	});	

	$("img#dog_img").click(function() {
		$("ul#starter").prepend("<li> Hello, all you happy people. You know what? I'm the hero. <span class='clickable'>[x]</span></li>");
		$("ul#response").prepend("<li>The great Kings of the past look down on us from those stars. <span class='clickable'>[x]</span></li>");

		$("ul#starter").children("li").first().click(function() {
			$(this).remove();
		})
		$("ul#response").children("li").first().click(function() {
			$(this).remove();
		})
	});
});