// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var chooseMen = document.getElementById("myImage1"); //Men Image
var chooseWoMen = document.getElementById("myImage2"); //Women Image


var Player1 = document.getElementById("Player1"); //Men Image
var Player2 = document.getElementById("Player2"); //Women Image


var CPlayer1 = document.getElementById("Cplay1"); //Men Image
var CPlayer2 = document.getElementById("Cplay2"); //Women Image


let i = 0;

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";

}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}




chooseMen.addEventListener("click", (e) => {
  chooseMen.style.border = "5px solid lightseagreen";
  chooseWoMen.style.border = null;
  if (i == 1)
    Player1.src = "https://th.bing.com/th/id/OIP.H9FYQceSefc4O18Tj5zxZwHaHa?pid=ImgDet&rs=1";
  else
    Player2.src = "https://th.bing.com/th/id/OIP.H9FYQceSefc4O18Tj5zxZwHaHa?pid=ImgDet&rs=1";

})

chooseWoMen.addEventListener("click", (e) => {
  chooseWoMen.style.border = "5px solid lightseagreen";
  chooseMen.style.border = null;
  if (i == 1)
    Player1.src = "https://th.bing.com/th/id/OIP.7z--rqgVzS_KCgrWosrfOQHaHX?pid=ImgDet&w=639&h=635&rs=1";
  else
    Player2.src = "https://th.bing.com/th/id/OIP.7z--rqgVzS_KCgrWosrfOQHaHX?pid=ImgDet&w=639&h=635&rs=1";
})

CPlayer1.addEventListener("click", (e) => {
  i = 1;
  CPlayer1.style.backgroundColor = "lightskyblue";
  CPlayer2.style.backgroundColor = null;
})



CPlayer2.addEventListener("click", (e) => {
  i = 2;
  CPlayer2.style.backgroundColor = "lightskyblue";
  CPlayer1.style.backgroundColor = null;
})

