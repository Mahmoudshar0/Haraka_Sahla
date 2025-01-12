// Nav Bar
let menu = document.getElementById("menu");
function showMenu(){
   menu.style.right = "0";
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


// function updateScrollPosition() {
//    console.log(window.scrollX);
//    console.log(window.scrollY);
// }

// // Event listener for scroll
// window.addEventListener('scroll', updateScrollPosition);

// // Initial display
// updateScrollPosition();