// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
  // Select all buttons with the class 'btn'
  const buttons = document.querySelectorAll('.btn');
  // Variable to store the audio element
  let audio = null;

  // Add event listeners to each button
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      // Get the value of the 'data-sound' attribute of the clicked button
      const soundFile = this.getAttribute('data-sound');
      // Check if the button has a 'data-sound' attribute
      if (soundFile) {
        // If the button has a 'data-sound' attribute, play the corresponding sound
        playSound(soundFile);
      } else {
        // If the button does not have a 'data-sound' attribute, stop the audio
        stopSound();
      }
    });
  }

  // Function to play a sound
  function playSound(soundFile) {
    // Stop any currently playing audio
    stopSound();
    // Create a new audio element with the specified sound file
    audio = new Audio(`sounds/${sound
