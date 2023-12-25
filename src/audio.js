export function audioFun() {
  const audioPlayer = document.querySelector(".audioPlayer");
  const toggleButton = document.querySelector(".toggleButton");

  const unmute = '<img width="25" height="25" src="https://img.icons8.com/ios/100/high-volume--v1.png" alt="high-volume--v1"/>';

  const mute = '<img width="25" height="25" src="https://img.icons8.com/ios/100/mute--v1.png" alt="mute--v1"/>';

  toggleButton.addEventListener("click", function () {
    if (audioPlayer.paused) {
      toggleButton.innerHTML = unmute
      audioPlayer.play();
    } else {
      toggleButton.innerHTML = mute
      audioPlayer.pause();
    }
  });
}

