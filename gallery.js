const gallery =[
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
        name:"Jackets",
        price:"$80"
    },
    {
        card_img:"you-may2",
        name:"Jeans and T-Shirt",
        price:"$100"
    },
    {
        card_img:"you-may3",
        name:"Coat",
        price:"$40"
    },
    {
        card_img:"you-may4",
        name:"Jeans and Boot",
        price:"$120"
    },
    {
        card_img:"slide-1",
        name:"Sneakers",
        price:"$40"
    },
    {
        card_img:"product-1",
        name:"Sneakers",
        price:"$40"
    },
    {
        card_img:"product-1",
        name:"Sneakers",
        price:"$40"
    },
    {
        card_img:"you-may2",
        name:"Jeans and T-Shirt",
        price:"$100"
    },
    {
        card_img:"you-may3",
        name:"Coat",
        price:"$40"
    },
    {
        card_img:"you-may4",
        name:"Jeans and Boot",
        price:"$120"
    },

]

let galleryinfo = document.getElementById("gallery");
let html ="";

gallery.forEach(e => {
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
    galleryinfo.innerHTML = html;

});


