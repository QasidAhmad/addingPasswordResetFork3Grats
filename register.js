   $("#register").click(function(){ // refers to register button click
//capturing email and password from form: 
      var email = document.getElementById("email").value;
      console.log("captured email from form: " + email); 
      var password = document.getElementById("password").value;
      console.log("captured password from form: " + password); 
//using captured email and password from form to create new Firebase user:
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) { 
        console.log(error.code);
        console.log(error.message);
        //TO DO add password reset procedure 
        //TO DO add error message beside relavent field not only console log
        });
});
// user logs in automatically if registered in firebase but takes a wee while to do so
// so anAuthStateChanged (which has now moved to logStatus.js) helps wait till then