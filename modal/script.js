const btn = document.getElementById("btn");
const modal = document.getElementById("overlay");
const close = document.getElementById("close");

btn.addEventListener("click", function () {
  btn.style.display = "none";
  modal.style.display = "block";
});
close.addEventListener("click", function () {
  btn.style.display = "block";
  modal.style.display = "none";
});
