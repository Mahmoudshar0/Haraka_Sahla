let form = document.getElementById('form')
form.addEventListener('submit', function(event) {
   event.preventDefault();
});
function sendMail(){
   let btn = document.getElementById("btnForm");
   let vars = {
      fromName : document.getElementById("name").value,
      email : document.getElementById("email").value,
      phone : document.getElementById("phone").value,
      message : document.getElementById("message").value
   };
   emailjs.send("service_lsl6qt8","template_khum3la",vars);
   document.getElementById('form').reset();
   let msg = document.getElementById("msgdone");
   msg.style.animationPlayState = "running";
}
