const parallax = document.getElementById('parallax');

window.addEventListener('scroll', function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
});


var phoneModal = document.getElementById('myPhoneModal');
var emailModal = document.getElementById('myEmailModal');
var emailBtn = document.getElementById('email');
var phoneBtn = document.getElementById('phone');

var span = document.getElementsByClassName('close')[0];


phoneBtn.onclick = function(){
    phoneModal.style.display = "inherit";
}

emailBtn.onclick = function(){
    emailModal.style.display = "inherit";
}

span.onclick = function(){
    phoneModal.style.display = 'none';
    emailModal.style.display = 'none';
}

window.onclick = function(event){
    if (event.target == phoneModal) {
        phoneModal.style.display = 'none'
    } else if (event.target == emailModal) {
        emailModal.style.display = 'none';
    }
}




