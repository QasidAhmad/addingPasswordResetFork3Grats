//to inform user which email they are signed in with
 $(document).ready(function (){
      firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
	  email= user.email;
	document.getElementById("signedInAs").innerHTML = email; 
   } 
 });
});