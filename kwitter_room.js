// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCY19KmvSdF8u_9_cI12glfm63tlBbmWLw",
    authDomain: "greetingbot-fbxl.firebaseapp.com",
    databaseURL: "https://greetingbot-fbxl-default-rtdb.firebaseio.com",
    projectId: "greetingbot-fbxl",
    storageBucket: "greetingbot-fbxl.appspot.com",
    messagingSenderId: "205550354832",
    appId: "1:205550354832:web:f014cb65454b3d1ad0f315"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room name -" + Room_names);
    row = "<div class= 'room_name' id="+Room_names+" onclick='redrictToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML = row;
    //End code
    });
});
}
