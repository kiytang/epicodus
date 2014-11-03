$(document).ready(function() {
	$("form#date").submit(function(event) {
		var age = parseInt($("input#age").val());
		var gender = $("select#gender").val();

		var celebrity_1 = "Mickey Mouse";
		var celebrity_2 = "Miss Piggy";

		if (gender === 'male') {
			date = celebrity_2;
		}

		else if (gender == 'female') {
			date === celebrity_1;
		}

		else if (age < 17) {
			alert('Under 17');
			$('$too-young').show();
		}

		else if (age > 30) {
			alert('Over 30');
			$('#too-old').show();
		}

		$("#celebrity").empty().append(date);
		$("#result").show();
		
		} else {
			alert('Please enter your age');
		}
		event.preventDefault();
	});
});