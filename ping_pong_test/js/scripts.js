jQuery(document).ready(function($) {
	var number = prompt('What number would you like me to ping-pong up to?');

	for (var i=1; i<=number; i++) {
		if (i % 15 === 0) {
			$('.row').append('<li>Ping-Pong</li>');
		} 
		}
	}


})