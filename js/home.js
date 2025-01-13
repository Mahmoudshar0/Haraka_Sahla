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
window.addEventListener('scroll', () => {
   if (window.scrollY > 200) {
      arrow.style.opacity = "1";
   } else {
      arrow.style.opacity = "0";
   }
});


// slider
function slider() {
   let slider = document.getElementById("x");
   let sliderImages = ["/images/chat1.webp","/images/forest.jpg","/images/forest2.jpg","/images/home_1.png"];
   let i = 0;
   setInterval(() => {
      slider.style.backgroundImage = `url(${sliderImages[i]})`;
      i = (i + 1) % sliderImages.length;
   }, 3000);
}
slider();