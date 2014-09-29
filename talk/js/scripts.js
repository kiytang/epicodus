$(document).ready(function() {
	$("button#hello").click(function() {
		$("ul#user").prepend("<li>Ciao, come stai! <span class='clickable delete'>[ x ]</span></li>");
		$("ul#webpage").prepend("<li>tutto bene grazie!<span class='clickable delete'>[ x ]</span></li>");

		$("ul#user").children("li").first().click(function() {
			$(this).remove();
		});

		$("ul#webpage").children("li").first().click(function() {
			$(this).remove();
		})
	});

	$("button#goodbye").click(function() {
		$("ul#user").prepend("<li>Goodbye!</li>");
		$("ul#webpage").prepend("<li>Goodbye dear user!</li>");

		$("ul#user").children("li").first().click(function() {
			$(this).remove();
		});

		$("ul#webpage").children("li").first().click(function() {
			$(this).remove();
		})
	});

	$("button#stop").click(function() {
		$("ul#user").prepend("<li>Stop copying me!</li>");
		$("ul#webpage").prepend("<li>Stop, Stop Stop!!!</li>");

		$("ul#user").children("li").first().click(function() {
			$(this).remove();
		});

		$("ul#webpage").children("li").first().click(function() {
			$(this).remove();
		});
	});
})