jQuery(document).ready(function($) {
	var number = prompt('What number would you like me to ping-pong up to?');

	for (var i = 1; i <= number; i++) {
		if (i % 15 === 0) {
			$('.row').append('<li>Ping-Pong</li>');
		} else if (i % 5 === 0) {
			$('.row').append('<li>Pong</li>');
		} else if (i % 3 === 0) {
			$('.row').append('<li>Ping</li>');
		}	else {
			$('.row').append('<li>' + i + '</li>');
		}
	}
});
		}
		}
	}


})