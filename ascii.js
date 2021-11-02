window.onload = function () {
	var start = document.getElementById('start');
	var stop = document.getElementById('stop');
	var animationsOptions = document.getElementById('animations');
	var size = document.getElementById('size');
	var txtArea = document.getElementById('txtArea');
	var speed = document.getElementById('speed');

	start.disabled = true;
	stop.disabled = true;
	animationsOptions.onchange = function () {
		start.disabled = false;
		var animationType = animationsOptions.value;
		txtArea.value = ANIMATIONS[animationType];
	}
	size.onchange = function(){
		
		var fontsize = size.value;
		//console.log(size);
		txtArea.style.fontSize = fontsize;
	}
	var counter=0;
	var speeding = 250;
	start.onclick = function () {
		animationsOptions.disabled = true;
		start.disabled = false;
		stop.disabled = false;

		var drawing = txtArea.value;
		//var arry = ANIMATIONS["exercise"].split("=====\n");
		var arry = drawing.split("=====\n");
		//console.log(arry);
		var timer = setInterval(function () {
			if(counter < arry.length){
			txtArea.value = arry[counter];
			counter++;
			//console.log(counter);
		}
		else{
			counter=0;
		}
		},speeding);
		stop.onclick = function () {
			clearInterval(timer);
			animationsOptions.disabled = false;
			var animationType = animationsOptions.value;
			txtArea.value = ANIMATIONS[animationType];
			stop.disabled = true;
		}
	}
	speed.onchange = function () {
			if (speed.checked) {
				speeding = 50;
			}
	}
	
}