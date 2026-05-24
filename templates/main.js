const page = document.body;
const glitch = document.querySelector(".glitch");

glitch.addEventListener("click", () => {
  page.classList.remove("glitch-active");
  void page.offsetWidth;
  page.classList.add("glitch-active");

  setTimeout(() => {
    page.classList.remove("glitch-active");
  }, 1500);
});

function playSound(path, volume = 1, speed = 1) {

    const sound = new Audio(path);

    sound.volume = volume;
    sound.playbackRate = speed;

    sound.play();
}

function playThenGo(path, event, url) {
  event.preventDefault();

  const sound = new Audio(path);
  sound.volume = 1;

  sound.play();

  setTimeout(() => {
    window.location.href = url;
  }, 250);
}