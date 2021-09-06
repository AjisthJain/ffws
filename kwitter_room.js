
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBd5g0pwkex1ga6ZD6Y-VP_Xaa00M_MoFE",
      authDomain: "kwitter-9eb03.firebaseapp.com",
      databaseURL: "https://kwitter-9eb03-default-rtdb.firebaseio.com",
      projectId: "kwitter-9eb03",
      storageBucket: "kwitter-9eb03.appspot.com",
      messagingSenderId: "358021936063",
      appId: "1:358021936063:web:20928bedb2d1204f55670a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+ user_name+"!";
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(user_name).update({
          key : "adding room name"
    });
    
    localStorage.setItem("room_name" , room_name);
    
    window.location = "kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log("room name -" + Room_names);
     row = "<div class='room_name' id="+room_name+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}