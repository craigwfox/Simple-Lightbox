$(window).ready(function(){
	var windowHeight = function() {
		if ($(window).resize()) {
			console.log('Resized :)');
		} else {
			console.log('No Resize');
		}		
	};

	windowHeight();
});