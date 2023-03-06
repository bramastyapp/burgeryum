// DOM content Loaded/ketika di reload
document.addEventListener("DOMContentLoaded", () => {
  shopping();
});
// toggle class active hamburger
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger").onclick = () => {
  navbarNav.classList.toggle("active");
};
// hilangkan class active saat klik diluar sidebar
const hamburger = document.querySelector("#hamburger");
document.addEventListener("click", function (e) {
  if (!navbarNav.contains(e.target) && !hamburger.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
// toggle class active cart
const cart = document.getElementById("cart");
const navCart = document.querySelector(".nav-cart");
cart.addEventListener("click", () => {
  navCart.classList.toggle("active");
});
// remove class active cart
document.addEventListener("click", (e) => {
  if (!cart.contains(e.target) && !navCart.contains(e.target)) {
    navCart.classList.remove("active");
  }
});
// Shopping bag
let qty1 = document.getElementById("qty-1");
let qty2 = document.getElementById("qty-2");
let qty3 = document.getElementById("qty-3");
let qty4 = document.getElementById("qty-4");
// icon shopping bag
shopping = () => {
  let countIcon = document.getElementById("count-bag");
  const totalQty =
    parseInt(qty1.value) +
    parseInt(qty2.value) +
    parseInt(qty3.value) +
    parseInt(qty4.value);
  countIcon.innerText = totalQty.toString();
  totalAll();
};
// Total harga
totalAll = () => {
  let getTotal = document.querySelectorAll(".total-all");
  const result = document.querySelector(".result");
  let sum =
    parseInt(getTotal[0].value) +
    parseInt(getTotal[1].value) +
    parseInt(getTotal[2].value) +
    parseInt(getTotal[3].value);
  console.log(sum);
  result.innerText = sum.toString();
};
// menambahkan add cart dari menu
const add = document.querySelectorAll(".add");

add[0].addEventListener("click", () => {
  const price = document.getElementById("price-1");
  const total = document.getElementById("total-1");
  qty1.value = parseInt(qty1.value) + 1;
  total.value = qty1.value * price.value;

  // menghilangkan class none pada food-1 supaya menjadi active
  document.querySelector(".food-1").classList.remove("none");
  shopping();
  alert("Food added!");
});
add[1].addEventListener("click", () => {
  const price = document.getElementById("price-2");
  const total = document.getElementById("total-2");
  qty2.value = parseInt(qty2.value) + 1;
  total.value = qty2.value * price.value;

  document.querySelector(".food-2").classList.remove("none");
  shopping();
  alert("Food added!");
});
add[2].addEventListener("click", () => {
  const price = document.getElementById("price-3");
  const total = document.getElementById("total-3");
  qty3.value = parseInt(qty3.value) + 1;
  total.value = qty3.value * price.value;

  document.querySelector(".food-3").classList.remove("none");
  shopping();
  alert("Food added!");
});
add[3].addEventListener("click", () => {
  const price = document.getElementById("price-4");
  const total = document.getElementById("total-4");
  qty4.value = parseInt(qty4.value) + 1;
  total.value = qty4.value * price.value;

  document.querySelector(".food-4").classList.remove("none");
  shopping();
  alert("Food added!");
});

// Mereset semua qty menjadi 0
const reset = document.querySelector(".btn-reset");
reset.addEventListener("click", () => {
  alert("Are you sure to 'reset'?");
  document.getElementById("total-1").value = 0;
  document.getElementById("total-2").value = 0;
  document.getElementById("total-3").value = 0;
  document.getElementById("total-4").value = 0;
  if (qty1.value != 0) {
    document.querySelector(".food-1").classList.toggle("none");
  }
  if (qty2.value != 0) {
    document.querySelector(".food-2").classList.toggle("none");
  }
  if (qty3.value != 0) {
    document.querySelector(".food-3").classList.toggle("none");
  }
  if (qty4.value != 0) {
    document.querySelector(".food-4").classList.toggle("none");
  }
  qty1.value = 0;
  qty2.value = 0;
  qty3.value = 0;
  qty4.value = 0;
  shopping();
});
// Continue
const cont = document.querySelector(".btn-continue");
cont.addEventListener("click", () => {
  alert("Are you sure to 'continue'?");
  document.getElementById("total-1").value = 0;
  document.getElementById("total-2").value = 0;
  document.getElementById("total-3").value = 0;
  document.getElementById("total-4").value = 0;
  if (qty1.value != 0) {
    document.querySelector(".food-1").classList.toggle("none");
  }
  if (qty2.value != 0) {
    document.querySelector(".food-2").classList.toggle("none");
  }
  if (qty3.value != 0) {
    document.querySelector(".food-3").classList.toggle("none");
  }
  if (qty4.value != 0) {
    document.querySelector(".food-4").classList.toggle("none");
  }
  qty1.value = 0;
  qty2.value = 0;
  qty3.value = 0;
  qty4.value = 0;
  shopping();
});

// menambahkan menu di Nota
const plus = document.querySelectorAll(".plus-cart");
const min = document.querySelectorAll(".minus-cart");
// Menambahkan

plus[0].addEventListener("click", () => {
  const qty = document.getElementById("qty-1");
  const price = document.getElementById("price-1");
  const total = document.getElementById("total-1");

  qty.value = parseInt(qty.value) + 1;
  total.value = qty.value * price.value;
  shopping();
});
plus[1].addEventListener("click", () => {
  const qty = document.getElementById("qty-2");
  const price = document.getElementById("price-2");
  const total = document.getElementById("total-2");

  qty.value = parseInt(qty.value) + 1;
  total.value = qty.value * price.value;
  shopping();
});
plus[2].addEventListener("click", () => {
  const qty = document.getElementById("qty-3");
  const price = document.getElementById("price-3");
  const total = document.getElementById("total-3");

  qty.value = parseInt(qty.value) + 1;
  total.value = qty.value * price.value;
  shopping();
});
plus[3].addEventListener("click", () => {
  const qty = document.getElementById("qty-4");
  const price = document.getElementById("price-4");
  const total = document.getElementById("total-4");

  qty.value = parseInt(qty.value) + 1;
  total.value = qty.value * price.value;
  shopping();
});
// mengurangi
min[0].addEventListener("click", () => {
  const qty = document.getElementById("qty-1");
  const price = document.getElementById("price-1");
  const total = document.getElementById("total-1");
  if (qty.value > 0) {
    qty.value = parseInt(qty.value) - 1;
    total.value = qty.value * price.value;
    shopping();
  }
  if (qty.value == 0) {
    document.querySelector(".food-1").classList.toggle("none");
  }
});
min[1].addEventListener("click", () => {
  const qty = document.getElementById("qty-2");
  const price = document.getElementById("price-2");
  const total = document.getElementById("total-2");
  if (qty.value > 0) {
    qty.value = parseInt(qty.value) - 1;
    total.value = qty.value * price.value;
    shopping();
  }
  if (qty.value == 0) {
    document.querySelector(".food-2").classList.toggle("none");
  }
});
min[2].addEventListener("click", () => {
  const qty = document.getElementById("qty-3");
  const price = document.getElementById("price-3");
  const total = document.getElementById("total-3");
  if (qty.value > 0) {
    qty.value = parseInt(qty.value) - 1;
    total.value = qty.value * price.value;
    shopping();
  }
  if (qty.value == 0) {
    document.querySelector(".food-3").classList.toggle("none");
  }
});
min[3].addEventListener("click", () => {
  const qty = document.getElementById("qty-4");
  const price = document.getElementById("price-4");
  const total = document.getElementById("total-4");
  if (qty.value > 0) {
    qty.value = parseInt(qty.value) - 1;
    total.value = qty.value * price.value;
    shopping();
  }
  if (qty.value == 0) {
    document.querySelector(".food-4").classList.toggle("none");
  }
});
