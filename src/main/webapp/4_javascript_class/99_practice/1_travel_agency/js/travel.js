window.onload = function(){
	
	for(let i=0; i < 21; i++) {
		frm.adult.add(new Option(i , i));
	}
	
	for(let i=0; i < 21; i++) {
		frm.kid.add(new Option(i , i));
	}
	
	for(let i=0; i < 21; i++) {
		frm.baby.add(new Option(i , i));
	}
	
	
	frm.adult.onchange = calC;
	frm.kid.onchange = calC;
	frm.baby.onchange = calC;
	
	function calC() {
		frm.total.value = frm.adult.value * 39000 + frm.kid.value*29000 + frm.baby.value*19000
	}
	
	
	
	

}