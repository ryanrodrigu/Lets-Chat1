
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCQKUG_HK0QGviq1KM31AK-7Fz4I73lG1I",
      authDomain: "kwitter-df80e.firebaseapp.com",
      databaseURL: "https://kwitter-df80e-default-rtdb.firebaseio.com",
      projectId: "kwitter-df80e",
      storageBucket: "kwitter-df80e.appspot.com",
      messagingSenderId: "380437436648",
      appId: "1:380437436648:web:dfa2ef6258a07cd1e4d15d"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
