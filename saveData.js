// function of Done button
// saves submitted gratitudes to firebase

    $(document).ready(function(){
    $("#done").click(function(){
    //get all gratitude and reason inputs
    console.log("getting all inputs...");
    const gratitude1 = document.getElementById("gratitudeInput1").value;
    const reason1 = document.getElementById("reasonInput1").value;
    const gratitude2 = document.getElementById("gratitudeInput2").value;
    const reason2 = document.getElementById("reasonInput2").value;
    const gratitude3 = document.getElementById("gratitudeInput3").value;    
    const reason3 = document.getElementById("reasonInput3").value;
     
     //user should already be logged - see <head>
     user = firebase.auth().currentUser; 
     const uid = user.uid;
    
    const DataRef = firebase.database().ref('users/' + uid)
    
   //push(value, oncomplete) // need to do it this way otherwise redirect procedes before firebase can take data
    DataRef.push({ [gratitude1] : reason1, // brackets required for variable as key name. see: http://stackoverflow.com/questions/25707639/firebase-variable-as-key-name
					[gratitude2] : reason2, 	
					[gratitude3]: reason3}, 
          function redirect(){window.location.assign("retrieveAllGrats.html");} 
          );
        });
    });