$(function() {
	
	$('#hideButton').click(function(){
	$('#intro').hide('./imgs/grim.jpg');
	});
	
	$('#showButton').click(function(){
	$('#intro').show('./imgs/grim.jpg');
	});
	
	$('#toggleButton').click(function(){
	$('#intro').toggle('./imgs/grim.jpg');		//fadeToggle() / slideToggle()
	
	});
	
	$('#toggleButton').click(function(){
		if($('#intro').is(':visible'))
	{
		$('#intro').fadeOut(1000);
	}else{
		$('#intro').fadeIn(1000);
	}
	});
	
	//테이블의 내용 중 홀수행을 배경색 지정
	//$('#celebs table.data > tbody > tr:even').css({'background':'lightblue'})
	$('#celebs table.data > tbody > tr:even').addClass('table_striping')
	
	// 마우스가 올라갔을 때 배경색 바뀌고 다시 나오면 원래색으로
	$('#celebs tr').hover(function() {
		$(this).addClass('td_mouseover');		//('#celebs tr') -> (this)
	}, function(){
		$(this).removeClass('td_mouseover');	//('#celebs tr') -> (this)
	})
	
	
})