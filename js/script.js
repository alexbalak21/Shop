let menuItems = document.getElementById("menuItems");
menuItems.style.maxHeight = "0px";
function menuToggle() {
  if (menuItems.style.maxHeight == "0px") menuItems.style.maxHeight = "230px";
  else menuItems.style.maxHeight = "0px";
}

let mainImg = document.getElementById("mainImg");
let imgLink = document.getElementById("imgLink");

function mainImgCh(img) {
  mainImg.src = `assets/img/gallery-${img}.jpg`;
  imgLink.setAttribute("href", `assets/img/gallery-${img}.jpg`);
}

// TOGGLE FROM

let loginFrom = document.getElementById("loginForm");
let regFrom = document.getElementById("regForm");
let indicator = document.getElementById("indicator");

function regDisp() {
  regFrom.style.transform = "translateX(0px)";
  loginFrom.style.transform = "translateX(0px)";
  indicator.style.transform = "translateX(108px)";
}

function loginDisp() {
  regFrom.style.transform = "translateX(300px)";
  loginFrom.style.transform = "translateX(300px)";
  indicator.style.transform = "translateX(0px)";
}
