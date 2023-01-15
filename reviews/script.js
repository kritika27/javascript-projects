const btn = document.getElementById("btn");
const disp = document.getElementById("disp");
const url = "https://api.github.com/users/kritika27";

const fetchData = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);

  xhr.onload = () => {
    const data = JSON.parse(xhr.response());
    console.log(data);
  }
}
btn.addEventListener("click", function () {

  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);

  xhr.onload = () => {
    const data = JSON.parse(xhr.response);

    show(data);
  }
  xhr.send();
});

const show = (par) => {

  let temp = "";

  temp =
    `<div>
<p>${par.id}</p>
<h1>${par.login}</h1>
<h3>${par.name}</h3>
<p>${par.url}</p>
</div>`

  disp.innerHTML = temp;
}