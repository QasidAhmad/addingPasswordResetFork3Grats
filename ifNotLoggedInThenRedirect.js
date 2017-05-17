firebase.auth().onAuthStateChanged(function(user){

if(!user) {
    console.log('user not logged in');
    console.log("redirecting user to signup/login page");
    location.replace("index.html");  // re-direct
  }

});