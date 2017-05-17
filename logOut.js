function logOut() {

    firebase.auth().signOut().then(function() {
		console.log("logged out");//  sign-out success check.
            }, function(error) {
	            console.log(error);// error check.
                });
}

    //document.getElementById('logOut-btn').addEventListener('click', logOut);