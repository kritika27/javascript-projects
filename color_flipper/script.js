const btn = document.getElementById("btn");
const colors = ["red", "green", "blue", "#444", "black"];

btn.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * colors.length);

  document.body.style.backgroundColor = colors[randomNumber];
});
