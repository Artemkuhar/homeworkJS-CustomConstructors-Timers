function Clock(){
	var time = new Date();
	this.seconds = time.getSeconds();
		if(this.seconds < 10){
			this.seconds = '0' + this.seconds;
		}
	this.minutes = time.getMinutes();
		if(this.minutes < 10){
			this.minutes = '0' + this.minutes;
		}
	this.hours = time.getHours();
		if(this.hours < 10){
			this.hours = '0' + this.hours;
		}
	this.rendered = true;
	this.render = function(){
		document.getElementById('hours').innerHTML = this.hours;
		document.getElementById('minutes').innerHTML = this.minutes;
		document.getElementById('seconds').innerHTML = this.seconds;
	};
	this.start = function(){
		setInterval(updateSeconds ,1000);
	};
	function updateHours(){
		var hours = document.getElementById('hours').innerHTML;
		hours = +hours + 1;
		if(hours < 10){
			hours = '0' + hours;
		}else if( hours == 23){
			hours = '0' + 0;
		}
		document.getElementById('hours').innerHTML = hours;
	}
	function updateMinutes(){
		var minutes = document.getElementById('minutes').innerHTML;
		minutes = +minutes + 1;
		if(minutes < 10){
			minutes = '0' + minutes;
		}else if( minutes == 60){
			minutes = '0' + 0;
			setTimeout(updateHours, 1);
		}
		document.getElementById('minutes').innerHTML = minutes;
	}
	function updateSeconds(){
		var seconds = document.getElementById('seconds').innerHTML;
		seconds = +seconds + 1;
		if(seconds < 10){
			seconds = '0' + seconds;
		}else if( seconds == 59){
			seconds = '0' + 0;
			setTimeout(updateMinutes, 1);
		}
		document.getElementById('seconds').innerHTML = seconds;
	}
}
var fooTime = function(){
	if(document.getElementById('clock')){
		var TIME = new Clock;
		if(TIME.rendered = true) {
			TIME.render();
			TIME.start();
		}
	}
};
fooTime();














