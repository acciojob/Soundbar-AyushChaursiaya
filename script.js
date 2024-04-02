document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.btn');
  let audio = null;

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      const soundFile = this.getAttribute('data-sound');
      if (soundFile) {
        playSound(soundFile);
      } else {
        stopSound();
      }
    });
  }

  function playSound(soundFile) {
    stopSound();
    audio = new Audio(`sounds/${soundFile}`);
    audio.play();
  }

  function stopSound() {
    if (audio)
