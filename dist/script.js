const closeBtn = document.getElementById("close-button");
const bar = document.getElementById("bar");
closeBtn.addEventListener("click", () => {
  bar.classList.toggle("-top-96");
});
