window.onload = function(){
	//Get the video
	var video = document.getElementById("myVideo");
	//Get the buttons
	var playBtn = document.getElementById("playBtn");
	var pauseBtn = document.getElementById("pauseBtn");
	var seekBar = document.getElementById("seekBar");
	var volumeControl = document.getElementById("volume");
	var muteBtn = document.getElementById("muteBtn");
	
	//Add Event Listener for play button.
	playBtn.addEventListener("click",function(e){
		video.play();
	});
	
	//Add Event Listener for pause button.
	pauseBtn.addEventListener("click",function(e){
		video.pause();
	});
	
	//Add Event Listener for the seek bar
	seekBar.addEventListener("change",function(e){
		var time = video.duration*(seekBar.value/100);
		video.currentTime = time;
	});
	
	//Update the seek bar as the video plays
		video.addEventListener("timeupdate",function(e){
			var value = (100/video.duration)*video.currentTime;
			seekBar.value = value;
	});
	
	//Pause playback when users starts seeking
	seekBar.addEventListener("mousedown",function(e){
		video.pause();
	});
	
	//Continue playback when user stops seeking
	seekBar.addEventListener("mousedown",function(e){
		video.play();
	});
	
	//Add Event listener for volume control.
	volumeControl.addEventListener("change",function(e){
		video.volume = volumecontrol.value;
	});
	
	//Add Event listener for mute button.
		muteBtn.addEventListener("click",function(e){
		if(video.muted==true){
			video.muted = false;
			muteBtn.textContent = "Unmute";
		}
		else{
			video.muted=true;
			muteBtn.textContent = "mute";
		}
	});
	
}