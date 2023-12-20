var firebaseConfig = {
  apiKey: "AIzaSyAkM8lDHN10HcsyTsN6J9Z3mbiPP5rpykA",
  authDomain: "sistemadelivery-a9c41.firebaseapp.com",
  databaseURL: "https://sistemadelivery-a9c41-default-rtdb.firebaseio.com",
  projectId: "sistemadelivery-a9c41",
  storageBucket: "sistemadelivery-a9c41.appspot.com",
  messagingSenderId: "1029652095407",
  appId: "1:1029652095407:web:2914af9bb6887ab1c80f5a"
};
//ADICIONE SEUS LINKS FIREBASE

  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = ""; 
        snapshot.forEach(function(childSnapshot){ 
          childKey  = childSnapshot.key;
          roomNames = childKey;
          console.log("Nome da Sala - " + roomNames);
          row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
          document.getElementById("output").innerHTML += row;
      });
    });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}
