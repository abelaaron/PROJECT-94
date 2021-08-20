var firebaseConfig = {

    apiKey: "AIzaSyCddszAJxRH6JdqnmYPjlTuAT-u1w-DXbo",

    authDomain: "kwiter-ead70.firebaseapp.com",

    databaseURL: "https://kwiter-ead70-default-rtdb.firebaseio.com",

    projectId: "kwiter-ead70",

    storageBucket: "kwiter-ead70.appspot.com",

    messagingSenderId: "824555237470",

    appId: "1:824555237470:web:463372a1e23a64556a84cf",

    measurementId: "G-4CT2B6XEN3"

  };

  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);


  // Initialize Firebase

 //ADD YOUR FIREBASE LINKS

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}