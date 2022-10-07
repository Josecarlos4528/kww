
//AÑADE LOS ENLACES FIREBASE
var firebaseConfig={
    apiKey: "AIzaSyBzEnxNuGKYZaRoIPDoZMUVvba1yy_QN9A",
    authDomain: "kwitterapp-db965.firebaseapp.com",
    databaseURL: "https://kwitterapp-db965-default-rtdb.firebaseio.com",
    projectId: "kwitterapp-db965",
    storageBucket: "kwitterapp-db965.appspot.com",
    messagingSenderId: "157295659370",
    appId: "1:157295659370:web:4e2c7013dbd65946063d13"
  };

firebase.initializeApp(firebaseConfig);



function adduser(){
    nombredeusuario=document.getElementById("nombreusuario").value;
    firebase.database().ref("/").child(nombredeusuario).update({
        purpose: "usuario añadido"
    });
}