// slider
function slider() {
   let slider = document.getElementById("x");
   let sliderImages = ['/images/home_1.png','/images/home_2.png','/images/home_3.png','/images/home_4.png'];
   let i = 0;
   setInterval(() => {
      slider.style.backgroundImage = `url(${sliderImages[i]})`;
      i = (i + 1) % sliderImages.length;
   }, 3000);
}
slider();


// logo handle
let logo = document.getElementById("logo");
function resize(){
   logo.style.width = "160px";
   logo.style.top = "-65%";
   logo.style.right = "7%";
}
setTimeout(resize,1500)
