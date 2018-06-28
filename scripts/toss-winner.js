document.getElementById("wishing").innerHTML="Congratulations Team "+localStorage.getItem("TossWinner");
function batorball(){
var batorball=document.querySelector('input[name="batorballchoose"]:checked').value;
localStorage.setItem("Batorball", batorball);
}