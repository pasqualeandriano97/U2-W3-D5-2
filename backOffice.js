const form = document.getElementsByTagName("form")[0];
const articleName = document.getElementById("productname");
const articleDescription = document.getElementById("description");
const articleBrand = document.getElementById("brand");
const articleSrc = document.getElementById("imageSrc");
const articlePrice = document.getElementById("price");
const myUrl = "https://striveschool-api.herokuapp.com/api/product/";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(typeof articlePrice.value);
  let article = {
    name: articleName.value,
    description: articleDescription.value,
    brand: articleBrand.value,
    imageUrl: articleSrc.value,
    price: articlePrice.value,
  };
  fetch(myUrl, {
    method: "POST",
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
      alert("Annuncio Creato") ? "" : location.reload();
    });
});
