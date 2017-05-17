firebase.auth().onAuthStateChanged(function(user){

  if (user) {
  console.log("user signed in");
 var uid= user.uid;
		//console.log("users uID is: " + uid);
		//console.log("users email is: " + email); 
  console.log("redirecting user to gratitude submission page");
  location.replace("submitGratitudes.html");  // re-direct
    }
    
});