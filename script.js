// // https://jsonplaceholder.typicode.com/posts
// fetch("./db.json")
//   .then(resp => resp.json())
//   .then(data => {
//     console.log(data);
//     // data.map(item => {
//     //   console.log(item.id);
//     //   h1.innerHTML = item.id;
//     // });
//     data.map(element => {
//       let h1 = document.createElement("h1");
//       h1.innerHTML = element.id;
//       div.appendChild(h1);
//     });
//   });

// let id = document.querySelector("input");
// let button = document.querySelector("button");

// button.onclick = function(e) {
//   console.log("object");
//   console.log(id.value);

//   fetch("./db.json", {
//     method: "POST",
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       Allow: "POST",
//       "Content-type": "application/json",
//       Accept: "application/json"
//     },
//     body: JSON.stringify({
//       id: id.value
//     })
//   })
//     .then(resp => resp.json())
//     .then(data => {
//       console.log(data);
//     });
//   e.preventDefault();
// };

// let h1 = document.querySelector("h1");
let div = document.querySelector("div");

const getIds = async () => {
  const resp = await fetch("http://localhost:3000/ids");
  const data = await resp.json();
  console.log(data);
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const element = data[key];
      console.log(element.id);
      let h1 = document.createElement("h1");
      h1.innerHTML = element.id;
      div.appendChild(h1);
    }
  }
};

getIds();

let button = document.querySelector("button");

button.onclick = () => {
  const postIds = async () => {
    let id = document.querySelector("input");
    const resp = await fetch("http://localhost:3000/ids", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        mode: "no-cors",
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify({
        id: parseInt(id.value)
      })
    });
    const data = await resp.json();
    return data;
  };

  postIds().then(data => console.log(data));
};
