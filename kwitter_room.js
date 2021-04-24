
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig={
      // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      apiKey: "AIzaSyCCfUZHi9nKKoR_M_Gk_PJcUI5JbWcDwZE",
      authDomain: "rubies-and-emerald-fcd69.firebaseapp.com",
      databaseURL: "https://rubies-and-emerald-fcd69-default-rtdb.firebaseio.com",
      projectId: "rubies-and-emerald-fcd69",
      storageBucket: "rubies-and-emerald-fcd69.appspot.com",
      messagingSenderId: "148074414787",
      appId: "1:148074414787:web:b19d82d259526287af9876",
      measurementId: "G-7HEX8HKFJZ"
};
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";
function addRoom() {
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
console.log("Room name-" + Room_names);
row="<di class='room_name'id='+Room_names' onclick='redirectToRoomName(this.id)'>#" +Room_names+"</div> <hr> ";
document.getElementById("output").innerHTML=row;
      //End code
      
});});}

getData();
function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}