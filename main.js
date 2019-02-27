const parallax = document.getElementById("parallax");

window.addEventListener("scroll", function() {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
});

var phoneModal = document.getElementById("myPhoneModal");
var emailModal = document.getElementById("myEmailModal");
var emailBtn = document.getElementById("email");
var phoneBtn = document.getElementById("phone");

var span = document.getElementsByClassName("closeEmail")[0];
var span2 = document.getElementsByClassName("closePhone")[0]

phoneBtn.onclick = function() {
  phoneModal.style.display = "block";
};

emailBtn.onclick = function() {
  emailModal.style.display = "block";
};

span.onclick = function() {

    emailModal.style.display = "none";
};

span2.onclick = function(){
    phoneModal.style.display = "none"
}

//Close modal when click anywhere outside of modal
window.onclick = function(event) {
  if (event.target == phoneModal) {
    phoneModal.style.display = "none";
  } else if (event.target == emailModal) {
    emailModal.style.display = "none";
  }
};


//Sandwich menu bar for mobile
function mobileMenu(){
    var x = document.getElementById('nav');

    if(x.className === 'navbar') {
        x.className += ' responsive';
    } else {
        x.className = 'navbar'
    }
}



