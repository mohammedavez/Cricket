function changeImgTeam1(){
  var team1 = document.querySelector(".select-team1");
  var text = team1.options[team1.selectedIndex].text;
  document.querySelector(".team1-image").src="images/"+text+".png";
   localStorage.setItem("Team-1-Name", text);
}
function changeImgTeam2(){
  var team2 = document.querySelector(".select-team2");
  var text2 = team2.options[team2.selectedIndex].text;
  document.querySelector(".team2-image").src="images/"+text2+".png";
   localStorage.setItem("Team-2-Name", text2);
}