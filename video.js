const videoPlayer = document.querySelector('.video-player');
const video = videoPlayer.querySelector(".video");
const playButton = videoPlayer.querySelector(".play-button");

playButton.addEventListener("click", (e) => {
  if (video.paused) {
    video.play();
    e.target.textContent = "play";
    
  } else {
    video.pause();
    e.target.textContent = "pause";

  }
});

// https://youtu.be/-MXgsooMKfA
// oblations of praise 