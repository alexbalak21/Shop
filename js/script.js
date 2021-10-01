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
