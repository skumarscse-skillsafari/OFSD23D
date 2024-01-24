// const fetchData = async (url) => {
//   try {
//     // console.log(url);
//     const res = await fetch(url);
//     // console.log(res);
//     const data = await res.json();
//     // console.log(data);
//     const container = document.querySelector(".container");
//     const productsEleArr = data.map((product) => {
//       return `
//               <div>
//                   <h2>${product.title}</h2>
//                   <h3>${product.description}</h3>
//                   <p>${product.category}</p>
//                   <p>
//                       <img src=${product.image} alt=${product.title} height="150" width="150" />
//                   </p>
//                   <hr />
//               </div>
//               `;
//     });
//     // console.log(productsEleArr.join(" "));
//     container.innerHTML = productsEleArr.join(" ");
//   } catch (error) {
//     console.log(error);
//   }
// };

// fetchData("https://fakestoreapi.com/products");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    const container = document.querySelector(".container");
    const productsEleArr = data.map((product) => {
      return `
              <div>
                  <h2>${product.title}</h2>
                  <h3>${product.description}</h3>
                  <p>${product.category}</p>
                  <p>
                      <img src=${product.image} alt=${product.title} height="150" width="150" />
                  </p>
                  <hr />
              </div>
              `;
    });
    // console.log(productsEleArr.join(" "));
    container.innerHTML = productsEleArr.join(" ");
  })
  .catch((err) => console.log(err));

let userCredentials = {
  user: {
    uid: "123",
  },
};
let {
  user: { uid },
} = userCredentials;
console.log(uid);
