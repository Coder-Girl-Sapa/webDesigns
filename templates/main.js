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