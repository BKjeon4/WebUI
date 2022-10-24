//window.onload = function(){	
		
  var item = document.getElementsByClassName('item');
 	//alert(item.length);
	
	/*var table = document.getElementById('table');*/

  // 리스트에서 선택(클릭했을 때)
  
  /*table.onclick = function(evt) {
	//var price = evt.target.getAttribute('data-price');
	alert(price);
	}*/

	for(let i=0;i<item.length;i++) {
		item[i].onclick = function() { 
		var price=item[i].getAttribute('data-price');
		alert(price);
		}
	}  
//};
