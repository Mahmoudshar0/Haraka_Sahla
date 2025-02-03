// Nav Bar
let menu = document.getElementById("menu");
function showMenu(){
   menu.style.right = "-5px";
}
function hideMenu(){
   menu.style.right = "-300px";
}

// arrow icon
let arrow = document.getElementById("arrow");
let wts = document.getElementById("wts");
window.addEventListener('scroll', () => {
   if (window.scrollY > 200) {
      wts.style.bottom = "70px";
      arrow.style.opacity = "1";
   } else {
      arrow.style.opacity = "0";
      wts.style.bottom = "130px";
   }
});


// slider
function slider() {
   let slider = document.getElementById("x");
   let sliderImages = ['../images/home_1.png','../images/home_2.png','../images/home_3.png','../images/home_4.png'];
   let i = 0;
   setInterval(() => {
      slider.style.backgroundImage = `url('${sliderImages[i]}')`;
      i = (i + 1) % sliderImages.length;
   }, 3000);
}
slider();
