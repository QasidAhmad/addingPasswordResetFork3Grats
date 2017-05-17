// Checks if user is logged in or not and re-directs user to correct 
// page accordingly.
firebase.auth().onAuthStateChanged(function(user){

  if (user) {
  console.log("user signed in");
 var uid= user.uid;
		console.log("users uID is: " + uid);
		console.log("users email is: " + email); 
  console.log("redirecting user to gratitude submission page");
  location.replace("submitGratitudes.html");  // re-direct
}

  else {
    console.log('user not logged in');
    console.log("redirecting user to signup/login page");
    location.replace("index.html");  // re-direct
  }
});