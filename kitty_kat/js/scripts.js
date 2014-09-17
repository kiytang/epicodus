jQuery(document).ready(function(){
	jQuery(function() {
		jQuery(".clickable").click(function() {
			jQuery("#initial-show").toggle();
			jQuery("#initial-hide").toggle();
		});
	});
})