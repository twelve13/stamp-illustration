const divs = document.getElementsByTagName("DIV");

function illustrate(){
	for(let i=0; i<divs.length; i++){
		setTimeout(function(){divs[i].classList.add("showme")}, i*200);
	}
};

