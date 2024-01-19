let loc = new URL(document.location).searchParams;
let parametro = loc.get("productID");
console.log(parametro);
const myUrl = "https://striveschool-api.herokuapp.com/api/product/";
const article = document.getElementsByTagName("form")[1];
const articleName = document.getElementById("productname");
const articleDescription = document.getElementById("description");
const articleBrand = document.getElementById("brand");
const articleSrc = document.getElementById("imageSrc");
const articlePrice = document.getElementById("price");
const deletebutton = document.getElementById("elimina");
console.log(parametro);
fetch(myUrl, {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhNGVlYzE4N2U1YzAwMTgxNGM2ODQiLCJpYXQiOjE3MDU2NjAxNDAsImV4cCI6MTcwNjg2OTc0MH0.BYoumxc2t38hSThcQyQoO2cRhsXNCW4B0RjQnHYWubg",
  },
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((data) => {
    data.forEach((element) => {
      if (element._id === parametro) {
        const col = document.getElementById("col");
        col.innerHTML = `<div class="card mb-4 shadow-sm h-100">
          <img
            src=${element.imageUrl}
            class="bd-placeholder-img card-img-top"
          />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">Nome Prodotto: ${element.name}</h5>
            <p class="card-text  ">
              Marca: ${element.brand}
            </p>
            <p class="card-text  ">
              Descrizione: ${element.description}
            </p>
            <p class="card-text  ">
              Prezzo: ${element.price} €
            </p>
            
              
            </div>
          </div>`;

        articleName.value = element.name;
        articleDescription.value = element.description;
        articleBrand.value = element.brand;
        articleSrc.value = element.imageUrl;
        articlePrice.value = element.price;
      }
    });
  });
article.addEventListener("submit", (e) => {
  e.preventDefault();
  let article = {
    name: articleName.value,
    description: articleDescription.value,
    brand: articleBrand.value,
    imageUrl: articleSrc.value,
    price: articlePrice.value,
  };
  fetch(myUrl + "/" + parametro, {
    method: "PUT",
    body: JSON.stringify(article),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhNGVlYzE4N2U1YzAwMTgxNGM2ODQiLCJpYXQiOjE3MDU2NjAxNDAsImV4cCI6MTcwNjg2OTc0MH0.BYoumxc2t38hSThcQyQoO2cRhsXNCW4B0RjQnHYWubg",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      alert("Annuncio Modificato");
    });
});

deletebutton.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(myUrl + "/" + parametro, {
    method: "DELETE",
    body: JSON.stringify(article),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhNGVlYzE4N2U1YzAwMTgxNGM2ODQiLCJpYXQiOjE3MDU2NjAxNDAsImV4cCI6MTcwNjg2OTc0MH0.BYoumxc2t38hSThcQyQoO2cRhsXNCW4B0RjQnHYWubg",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      alert("Annuncio Eliminato");
    });
});
