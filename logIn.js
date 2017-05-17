$(document).ready(function(){
    $("#login").click(function(){

      var email = document.getElementById("email").value;
      console.log("Aquired email: " + email); 

      var password = document.getElementById("password").value;
      console.log("Aquired password: " + password); 

      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  console.log("attempting to register new user...");  
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorCode);
  console.log(errorMessage);
//add if statement to check if there is any error. if not, console log it
        });
    });
});
 
