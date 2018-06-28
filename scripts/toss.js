
var team1 = localStorage.getItem("Team-1-Name");
var team2 = localStorage.getItem("Team-2-Name");
document.querySelector(".team1-img").src="images/"+team1+".png";
document.querySelector(".team2-img").src="images/"+team2+".png";
document.getElementById("team1").value=localStorage.getItem("Team-1-Name");
document.getElementById("team2").value=localStorage.getItem("Team-2-Name");

function getTossWinner(){
var tossWinner=document.querySelector('input[name="Team"]:checked').value;
localStorage.setItem("TossWinner", tossWinner);
}