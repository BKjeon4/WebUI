$ (function() {
	
	$('.menu > li > a > img').hover(function() {
		let s = $(this).attr('src');
		$(this).attr('src', s.replace('off','on'));		
	}, function(){
		let src = $(this).attr('src');
		$(this).attr('src', src.replace('on','off'));	
	
	});
	

})