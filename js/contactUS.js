document.getElementById('form')
.addEventListener('submit', function(event) {
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
   // alert(`name : ${vars.fromName} email : ${vars.emai=l} phone : ${vars.phone} message : ${vars.message}`);
}

