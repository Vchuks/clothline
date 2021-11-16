const homegallery =[
    {
        card_img:"slide-1",
        name:"  White Top",
        price:"$60"
    },
    {
        card_img:"product-1",
        name:"Sneakers",
        price:"$40"
    },
    {
        card_img:"slide-1",
        name:"White Top",
        price:"$80"
    }
]

let homegalleryinfo = document.getElementById("home-gallery");
let html ="";

homegallery.forEach(e => {
    html += `
    <div class="card my-5" style="width: 20rem;>
    <div class="card-image">
    <img src="images/${e.card_img}.jpg" class="card-img-top" alt="cloth">
    <div class="card-body">
      <p class="card-text"><h4>${e.name}</h4></p>
      <h3>${e.price}</h3>
    </div>
    </div>
  </div>
    `
    console.log(e)
    homegalleryinfo.innerHTML = html;

});


