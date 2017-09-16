const abs = $("div");

const button = $("button");

function position(){
	abs.each(function(i){
		var abso = $(this);
		setTimeout(function(){
			abso.addClass("abso");
		}, i*300);
	})
}

button.click(position)