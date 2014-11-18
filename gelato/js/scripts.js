jQuery(document).ready(function() {

	var gelatos = ['Pana', 'Cioccolato', 'Limone', 'Pistacchio', 'Bacio']
	$('body').click(function() {

		gelatos.forEach(function(gelato) {
			$('p').append(gelato).add('li')
		});
	});
});