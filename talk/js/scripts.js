$(document).ready(function() {
	$("button#hello").click(function() {
		$("ul#user").prepend("<li>Ciao, come stai! <span class='clickable'>[ x ]</span></li>");
		$("ul#webpage").prepend("<li>tutto bene grazie!<span class='clickable'>[ x ]</span></li>");

		$("ul#user").children("li").first().click(function() {
			$(this).remove();
		});

		$("ul#webpage").children("li").first().click(function() {
			$(this).remove();
		})
	});

	$("button#goodbye").click(function() {
		$("ul#user").prepend("<li>Goodbye! <span class='clickable'>[ x ]</span></li>");
		$("ul#webpage").prepend("<li>Goodbye dear user! <span class='clickable'>[ x ]</span></li>");

		$("ul#user").children("li").first().click(function() {
			$(this).remove();
		});

		$("ul#webpage").children("li").first().click(function() {
			$(this).remove();
		})
	});

	$("button#stop").click(function() {
		$("ul#user").prepend("<li>Stop copying me! <span class='clickable'>[ x ]</span></li>");
		$("ul#webpage").prepend("<li>Stop, Stop Stop!!! <span class='clickable'>[ x ]</span></li>");

		$("ul#user").children("li").first().click(function() {
			$(this).remove();
		});

		$("ul#webpage").children("li").first().click(function() {
			$(this).remove();
		});
	});
})