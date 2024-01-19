const myUrl = "https://striveschool-api.herokuapp.com/api/product/";

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
    console.log(data);
    data.forEach((data, i) => {
      const row = document.getElementById("row");

      let col = document.createElement("div");

      col.classList.add("col-md-4", "mt-4");
      col.innerHTML = `<div class="card mb-4 shadow-sm h-100">
          <img
            src=${data.imageUrl}
            class="bd-placeholder-img card-img-top"
          />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">Nome Prodotto: ${data.name}</h5>
            <p class="card-text  ">
              Marca: ${data.brand}
            </p>
            <p class="card-text  ">
              Descrizione: ${data.description}
            </p>
            <p class="card-text  flex-grow-1">
              Prezzo: ${data.price} €
            </p>
            <div
              class="d-flex justify-content-between align-items-center"
            >
              <div class="btn-group">
              <a href="./details.html?productID=${data._id}"><button
              type="button"
              class="btn btn-warning"
            >
              dettagli
            
              </div>
              
            </div>
          </div>`;
      row.appendChild(col);
    });
  });
