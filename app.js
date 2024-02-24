let firstitem = document.querySelector('.category-itemfirst');

let items = document.querySelector('.category-items');

let item2 = document.querySelector('.category-items2');

let footerCart1 = document.querySelector('.footer-column');

// first 
let array = [
  {img : "image/1stCart/1.jpg"},
  {img : "image/1stCart/3.webp"},
  {img : "image/1stCart/4.webp"},
  {img : "image/1stCart/5.webp"},
  {img : "image/1stCart/6.webp"}
];
let box = '';
array.forEach(function(item){
  box += `
  <a href="#"><img class="sale-item" src="${item.img}" ></a>
  `
});
firstitem.innerHTML=box;
// card box 1
let arr = [
  {img : "image/Category/1.png"},
  {img : "image/Category/2.png"},
  {img : "image/Category/3.png"},
  {img : "image/Category/4.png"},
  {img : "image/Category/5.png"},
  {img : "image/Category/6.png"},
  {img : "image/Category/7.png"},
  {img : "image/Category/8.png"},
  {img : "image/Category/9.png"},
  {img : "image/Category/10.png"},
  {img : "image/Category/11.png"},
  {img : "image/Category/12.png"}
];

let clutter = '';
arr.forEach(function(item){
  clutter += `
  <a href="#"><img class="sale-item" src="${item.img}" ></a> 
  `
});
items.innerHTML = clutter;

// box 2
let arr2 = [
  {img : "image/offer/1 (1).jpg"},
  {img : "image/offer/2.jpg"},
  {img : "image/offer/3.jpg"},
  {img : "image/offer/4.jpg"},
  {img : "image/offer/5.jpg"},
  {img : "image/offer/6.jpg"},
  {img : "image/offer/7.jpg"},
  {img : "image/offer/8.jpg"},
  {img : "image/offer/9.jpg"},
  {img : "image/offer/10.jpg"}
];

let clutter2 = '';
arr2.forEach(function(item){
  clutter2 += `
  <a href="#"><img class="sale-item" src="${item.img}" ></a>
  `
});
item2.innerHTML = clutter2;

// footer cart 1
let foo1 = [
  {name : "Online Shoping"},
  {name : "Man"},
  {name : "Woman"},
  {name : "Kid's"},
  {name : "Home & Living"},
  {name : "Bueaty"},
  {name : "Gifts Card"},
  {name : "Myntra Insider"},
];
let footer1='';
foo1.forEach(function(item){
  footer1 +=`
  <a href="#">${item.name}</a>
  `
});
footerCart1.innerHTML=footer1;



/////////
let b = document.querySelector('.banner-image');

let image = ['./image/banner.jpg','./image/banner 2.webp','/image/banner3.webp','./image/banner4.webp','./image/banner5.webp'];

setInterval(() => {
  let Random = Math.floor(Math.random() * 5)
    b.src = image[Random];
}, 1000);