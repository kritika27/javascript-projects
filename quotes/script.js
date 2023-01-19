const btn = document.getElementById("btn");
const author = document.getElementById("author");
const quote = document.getElementById("quote");
const url = "https://api.quotable.io/random";


fetch(url).then(response=>response.json())
.then(data=>show(data))

function show(data)
{
  
  quote.innerText=data.content;
  author.innerText=data.author;

}
btn.addEventListener("click",function(){
  fetch(url).then(response=>response.json())
.then(data=>show(data))

})