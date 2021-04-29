//YOUR FIREBASE LINKS 
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
}
firebase.initializeApp(firebaseConfig);
function send() {
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";

}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

//Start code
 console.log(firebase_message_id);
 console.log(message_data);
 name=message_data['name'];
 message=message_data['message'];
 like=message_data['like'];
 name_with_tag="<h4> "+ name + "<img class='user_tick' src='tick.png'> </h4>" ;
 message_with_tag="<h4 class='message_h4'>" + message + "</h4>";
 like_button="<button class='btn btn-warning' id='+firebase_message_id+' value='+like+' onclick='UpdateLike(this.id)'>";
 span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:" + like + "</span> </button>";
 row=name_with_tag+message_with_tag+like_button + span_with_tag;
document.getElementById("output").innerHTML+=row;
 //End code
} });  }); }
getData();
 function updateLike(message_id) {
     console.log("clicked on the like button-" + message_id);
     buuton_id=message_id;
     likes=document.getElementById(button_id).value;
     updated_likes=Number(likes)+1;
     console.log(updated_likes);
     firebase.database().ref(room_name).child(message_id).update({
           like:updated_likes
     });
}
function  logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}
