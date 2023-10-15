let disc = document.querySelector('.mixin');
let scratch = new Audio("./sounds/sound.mp3");
var isPlaying = false;

togglePlay = () => {
isPlaying ? pauseMusic() : playMusic(); 
}

let playMusic = () => {
  isPlaying = true;
  console.log(isPlaying);
  scratch.play();
  disc.classList.add('set-disc-animated');
  console.log('Playing music...');
  
}

let pauseMusic = () => {
  isPlaying = false;
  console.log(isPlaying)
  scratch.pause();
  disc.classList.remove('set-disc-animated');
  console.log('Music paused...');
}

/* 
****************************************************
====================================================
*                                                  *
*            Coded by CarlosFrontend ®             *
* ============|||||||||||||||||||||||============= *
*            All Rights Reserved 2023              *
*                                                  *
****************************************************
==================================================== */