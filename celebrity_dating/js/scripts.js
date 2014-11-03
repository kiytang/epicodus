$(document).ready(function() {
	$("form#date").submit(function(event) {
		var age = parseInt($("input#age").val());
		var gender = $("select#gender").val();

		var celebrity_1 = "Mickey Mouse"
		var celebrity_2 = "Miss Piggy"

		if (gender === 'male') {
			person = person_2;
		}

		elsif (gender == 'female') {
			person === person_1;
		}

		else if (age < 17) {
			alert('Under 17');
			$('$under-17').show();
		}

		else if (age > 30) {
			alert('Over 30');
			$('$over-30').show();
		}

		$("#celebrity").empty().append(result);
		$("#result").show();
		} else {
			alert('Please enter your age');
		}
		event.preventDefault();
	});
})