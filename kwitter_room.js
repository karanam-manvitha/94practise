
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDh80NJSubSqb35u096z8K3VF-aXFCuY1g",
      authDomain: "kwitter1-10786.firebaseapp.com",
      databaseURL: "https://kwitter1-10786-default-rtdb.firebaseio.com",
      projectId: "kwitter1-10786",
      storageBucket: "kwitter1-10786.appspot.com",
      messagingSenderId: "332003643654",
      appId: "1:332003643654:web:c831bd7579007d07cc8e87",
      measurementId: "G-ZLKCB1BNYQ"
    };

    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
    
function addRoom()
{
room_name=document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
});

     localStorage.setItem("room_name",room_name);

     window.location="kwitter_page.html";
}

   

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room_name-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+ "</div><hr>" ;
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location="index.html";
}