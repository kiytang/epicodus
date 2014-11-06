$(document).ready(function() {
	$("form#date").submit(function(event) {
		var age = parseInt($("input#age").val());
		var gender = $("select#gender").val();

		var celebrity_1 = "Mickey Mouse";
		var celebrity_2 = "Miss Piggy";
		var prediction = "";

		if (gender === "Male") {
			prediction = celebrity_2;
		}

		else if (gender === "Female") {
			prediction = celebrity_1;
		}

		else if (age < 17) {
			alert('Under 17');
			$("#too-young").show();
		}

		else if (age > 30) {
			alert('Over 30');
			$("#too-old").show();
		}

		$("#celebrity").empty().append(prediction);
		$("#result").show();
		
		} else {
			alert('Please enter your age');
		}
		event.preventDefault();
	});
});