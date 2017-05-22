// retrieve data from firebase to populate feedback fields 
   //defining user
  firebase.auth().onAuthStateChanged(function(user){//check user is logged in
   var uid = user.uid; // get user ID
  //https://firebase.google.com/docs/database/web/lists-of-data	
 firebase.database().ref("users/" + uid).once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot){
        //var childKey = childSnapshot.key;
        var childData = childSnapshot.val();

        //console.log(childKey);// transactions unique ID 
        console.log(childData); //transactions key:value (gratitude:reason) pairs
        
        var gratitudes = Object.keys(childData); // extracting array of gratitudes
        var reasons = Object.values(childData); // extracting array of reasons

        for (i=0; i<gratitudes.length; i++){ //looping through (3) gratitudes and reasons for each submission
        gratitude= gratitudes[i]; // exctrating current gratitude in loop
        reason= reasons[i]; // extracting current reason in loop
        $('#gratsListOutputDiv').append("<br><br>"+ "I am grateful for " + gratitude +
         " because " + reason);//outputting gratitude and reason
            }
        
        });
      });
    }); 
    
