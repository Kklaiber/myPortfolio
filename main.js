const parallax = document.getElementById('parallax');

window.addEventListener('scroll', function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
});


// var phoneModal = document.getElementById('myPhoneModal');
// var emailModal = document.getElementById('myEmailModal');
// var emailBtn = document.getElementById('email');
// var phoneBtn = document.getElementById('phone');

// var span = document.getElementsByClassName('close')[0];

// phoneBtn.onclick = function(){
//     phoneModal.style.display = 'block';
// }

// emailBtn.onclick = function(){
//     emailModal.style.display = 'block';
// }

// span.onclick = function(){
//     phoneModal.style.display = 'none';
//     emailModal.style.display = 'none';
// }

// window.onclick = function(event){
//     if (event.target == phoneModal) {
//         phoneModal.style.display = 'none'
//     } else if (event.target == emailModal) {
//         emailModal.style.display = 'none';
//     }
// }




// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}