window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  const key = document.querySelector(`div[data-key="${e.key}"]`);

  if (!audio) return; // Stop the function from running if no audio element matches the key pressed

  audio.currentTime = 0; // Rewind to the start
  audio.play();
  key.classList.add("playing");
});

function removeTransition(e) {
  if (e.propertyName !== "transform") return; // Skip if it's not a transform event
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
