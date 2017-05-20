document.getElementById('resetPassword-btn').addEventListener('click', function(){
console.log('onclick event listener activated...')
var auth = firebase.auth();
var emailAddress = document.getElementById('email').value;
console.log('got email: ' + emailAddress);
auth.sendPasswordResetEmail(emailAddress).then(function(){
    console.log('email sent to: ' + emailAddress);
}, function(error) {
    console.log(error);
    });

});