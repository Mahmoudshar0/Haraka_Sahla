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


console.log(window.url)