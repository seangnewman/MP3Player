var player;
var rngVolume;
var intv;

window.onload = function(){

  init();
  //document.addEventListener('deviceready', init, false);
}

function init(){
  player = document.getElementById('player');
  var btnPlay = document.getElementById('btnPlay');
  var btnStop = document.getElementById('btnStop');
  var btnPause = document.getElementById('btnPause');
  rngVolume = document.getElementById('rngVolume');

  btnPlay.addEventListener('click', playMusic, false);
  btnStop.addEventListener('click', stopMusic, false);
  btnPause.addEventListener('click', pauseMusic, false);

}

function changeVolume(){
  player.volume = rngVolume.value;
}

function pauseMusic(){
  player.pause();
}

function playMusic(){
  player.play();
  startTimer();
}

function stopMusic(){
  player.pause();
  player.currentTime = 0;
  stopTimer();
}

function changeSong(song){
  stopTimer();
  player.pause();
  player.src = "./resources/audio/" + song + ".mp3";
  player.play();
  startTimer();
}

function startTimer(){
  intv = setInterval(updateTime, 1000);
}



function stopTimer(){
   clearInterval(intv);
}

function updateTime(){
  document.getElementById('timeOut').innerHTML = "Elapsed Time: " + secsToMins(player.currentTime);
}

function secsToMins(seconds){
  var minutes = Math.floor(seconds/60);
  var theSeconds = seconds - minutes * 60;

  if( theSeconds > 9){
    return minutes + ":" + Math.round(theSeconds)
  }else{
    return minutes + ":0" + Math.round(theSeconds);
  }

}
