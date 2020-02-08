// let h1 = document.querySelector("h1");
let div = document.querySelector("div");
// https://jsonplaceholder.typicode.com/posts
fetch("./db.json")
  .then(resp => resp.json())
  .then(data => {
    console.log(data);
    // data.map(item => {
    //   console.log(item.id);
    //   h1.innerHTML = item.id;
    // });
    data.map(element => {
      let h1 = document.createElement("h1");
      h1.innerHTML = element.id;
      div.appendChild(h1);
    });
  });

let id = document.querySelector("input");
let button = document.querySelector("button");

button.onclick = function(e) {
  e.preventDefault();
  console.log("object");
  console.log(id.value);

  fetch("./db.json", {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      id: id.value
    })
  })
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
    });
};
