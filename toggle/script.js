const btn = document.querySelector("#btn");
const text = document.querySelector("#content");

let toggle = true;

btn.addEventListener("click", function () {
  toggle = !toggle;
  if (!toggle) {
    btn.textContent = "Show Text";
    text.style.opacity = 0;
  } else {
    btn.textContent = "Hide Text";
    text.style.opacity = 1;
  }
});
