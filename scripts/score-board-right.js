for(i=0;i<=10;i++){
document.getElementsByClassName(playert2_gird_class[i])[0].style.gridRow=i+2;
document.getElementsByClassName(playert2_gird_class[i])[0].style.gridColumn="1";
}
for(i=0;i<=10;i++){
document.getElementsByClassName(over_per_player[i])[0].style.gridRow=i+2;
document.getElementsByClassName(over_per_player[i])[0].style.gridColumn="3";
}

for(var i=0;i<=10;i++){
	for(var j=0;j<=5;j++){
		document.getElementsByClassName(balls[i][j])[0].style.display="none";
		document.getElementsByClassName(balls[i][j])[0].style.gridRow = i+2;
		document.getElementsByClassName(balls[i][j])[0].style.gridColumn="4/6";
	}
}
positions = ["0px","24px","53px","81px","109px","136px"]
for(var i=0;i<=10;i++){
	for(var j=0;j<=5;j++){
		document.getElementsByClassName(balls[i][j])[0].style.position="relative"
		document.getElementsByClassName(balls[i][j])[0].style.left=positions[j]
	}
}
for(i=0;i<=10;i++){
document.getElementsByClassName(over_increment[i])[0].style.gridRow=i+2;
document.getElementsByClassName(over_increment[i])[0].style.gridColumn="6";
}
var clicks=[0,0,0,0,0,0,0,0,0,0,0];
function p1_button_fun(){
	var value=parseFloat(document.getElementsByClassName("p1_over")[0].innerHTML);
	clicks[0]++;
	if(clicks[0]<6){
	value=(value+0.1).toFixed(1);
	}
	if(clicks[0]==6){
		value=(value+0.5).toFixed(1);
		clicks[0]=0;
	}
	document.getElementsByClassName("p1_over")[0].innerHTML=value
	if(tosswinner=="Team1"  &&   batorball=="Batting"){
	var array2 = JSON.parse(localStorage.getItem("Team-2-P1"));
	array2[1]=value;
	localStorage.setItem('Team-2-P1', JSON.stringify(array2));
	}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
		var array2 = JSON.parse(localStorage.getItem("Team-1-P1"));
		array2[1]=value;
		localStorage.setItem('Team-1-P1', JSON.stringify(array2));
	}else if(tosswinner=="Team2"  &&   batorball=="Batting"){
		var array2 = JSON.parse(localStorage.getItem("Team-1-P1"));
		array2[1]=value;
		localStorage.setItem('Team-1-P1', JSON.stringify(array2));
	}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
		var array2 = JSON.parse(localStorage.getItem("Team-2-P1"));
		array2[1]=value;
		localStorage.setItem('Team-2-P1', JSON.stringify(array2));
	}
}
function p2_button_fun(){
	var value=parseFloat(document.getElementsByClassName("p2_over")[0].innerHTML);
	clicks[1]++;
	if(clicks[1]<6){
	value=(value+0.1).toFixed(1);  
	}
	if(clicks[1]==6){
		value=(value+0.5).toFixed(1);
		clicks[1]=0;
	}
	document.getElementsByClassName("p2_over")[0].innerHTML=value
	if(tosswinner=="Team1"  &&   batorball=="Batting"){
	var array2 = JSON.parse(localStorage.getItem("Team-2-P2"));
	array2[1]=value;
	localStorage.setItem('Team-2-P2', JSON.stringify(array2));
	}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
		var array2 = JSON.parse(localStorage.getItem("Team-1-P2"));
		array2[1]=value;
		localStorage.setItem('Team-1-P2', JSON.stringify(array2));
	}else if(tosswinner=="Team2"  &&   batorball=="Batting"){
		var array2 = JSON.parse(localStorage.getItem("Team-1-P2"));
		array2[1]=value;
		localStorage.setItem('Team-1-P2', JSON.stringify(array2));
	}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
		var array2 = JSON.parse(localStorage.getItem("Team-2-P2"));
		array2[1]=value;
		localStorage.setItem('Team-2-P2', JSON.stringify(array2));
	}
}
function p3_button_fun(){
	var value=parseFloat(document.getElementsByClassName("p3_over")[0].innerHTML);
	clicks[2]++;
	if(clicks[2]<6){
	value=(value+0.1).toFixed(1);
	}
	if(clicks[2]==6){
		value=(value+0.5).toFixed(1);
		clicks[2]=0;
	}
	document.getElementsByClassName("p3_over")[0].innerHTML=value
	if(tosswinner=="Team1"  &&   batorball=="Batting"){
	var array2 = JSON.parse(localStorage.getItem("Team-2-P3"));
	array2[1]=value;
	localStorage.setItem('Team-2-P3', JSON.stringify(array2));
	}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
		var array2 = JSON.parse(localStorage.getItem("Team-1-P3"));
		array2[1]=value;
		localStorage.setItem('Team-1-P3', JSON.stringify(array2));
	}else if(tosswinner=="Team2"  &&   batorball=="Batting"){
		var array2 = JSON.parse(localStorage.getItem("Team-1-P3"));
		array2[1]=value;
		localStorage.setItem('Team-1-P3', JSON.stringify(array2));
	}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
		var array2 = JSON.parse(localStorage.getItem("Team-2-P3"));
		array2[1]=value;
		localStorage.setItem('Team-2-P3', JSON.stringify(array2));
	}
}
function p4_button_fun(){
	var value=parseFloat(document.getElementsByClassName("p4_over")[0].innerHTML);
	clicks[3]++;
	if(clicks[3]<6){
	value=(value+0.1).toFixed(1);
	}
	if(clicks[3]==6){
		value=(value+0.5).toFixed(1);
		clicks[3]=0;
	}
	document.getElementsByClassName("p4_over")[0].innerHTML=value
	if(tosswinner=="Team1"  &&   batorball=="Batting"){
	var array2 = JSON.parse(localStorage.getItem("Team-2-P4"));
	array2[1]=value;
	localStorage.setItem('Team-2-P4', JSON.stringify(array2));
	}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
		var array2 = JSON.parse(localStorage.getItem("Team-1-P4"));
		array2[1]=value;
		localStorage.setItem('Team-1-P4', JSON.stringify(array2));
	}else if(tosswinner=="Team2"  &&   batorball=="Batting"){
		var array2 = JSON.parse(localStorage.getItem("Team-1-P4"));
		array2[1]=value;
		localStorage.setItem('Team-1-P4', JSON.stringify(array2));
	}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
		var array2 = JSON.parse(localStorage.getItem("Team-2-P4"));
		array2[1]=value;
		localStorage.setItem('Team-2-P4', JSON.stringify(array2));
	}
}
function p5_button_fun(){
	var value=parseFloat(document.getElementsByClassName("p5_over")[0].innerHTML);
	clicks[4]++;
	if(clicks[4]<6){
	value=(value+0.1).toFixed(1);
	}
	if(clicks[4]==6){
		value=(value+0.5).toFixed(1);
		clicks[4]=0;
	}
	document.getElementsByClassName("p5_over")[0].innerHTML=value
	if(tosswinner=="Team1"  &&   batorball=="Batting"){
	var array2 = JSON.parse(localStorage.getItem("Team-2-P5"));
	array2[1]=value;
	localStorage.setItem('Team-2-P5', JSON.stringify(array2));
	}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
		var array2 = JSON.parse(localStorage.getItem("Team-1-P5"));
		array2[1]=value;
		localStorage.setItem('Team-1-P5', JSON.stringify(array2));
	}else if(tosswinner=="Team2"  &&   batorball=="Batting"){
		var array2 = JSON.parse(localStorage.getItem("Team-1-P5"));
		array2[1]=value;
		localStorage.setItem('Team-1-P5', JSON.stringify(array2));
	}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
		var array2 = JSON.parse(localStorage.getItem("Team-2-P5"));
		array2[1]=value;
		localStorage.setItem('Team-2-P5', JSON.stringify(array2));
	}
}
function p6_button_fun(){
	var value=parseFloat(document.getElementsByClassName("p6_over")[0].innerHTML);
	clicks[5]++;
	if(clicks[5]<6){
	value=(value+0.1).toFixed(1);
	}
	if(clicks[5]==6){
		value=(value+0.5).toFixed(1);
		clicks[5]=0;
	}
	document.getElementsByClassName("p6_over")[0].innerHTML=value
	if(tosswinner=="Team1"  &&   batorball=="Batting"){
	var array2 = JSON.parse(localStorage.getItem("Team-2-P6"));
	array2[1]=value;
	localStorage.setItem('Team-2-P6', JSON.stringify(array2));
	}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
		var array2 = JSON.parse(localStorage.getItem("Team-1-P6"));
		array2[1]=value;
		localStorage.setItem('Team-1-P6', JSON.stringify(array2));
	}else if(tosswinner=="Team2"  &&   batorball=="Batting"){
		var array2 = JSON.parse(localStorage.getItem("Team-1-P6"));
		array2[1]=value;
		localStorage.setItem('Team-1-P6', JSON.stringify(array2));
	}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
		var array2 = JSON.parse(localStorage.getItem("Team-2-P6"));
		array2[1]=value;
		localStorage.setItem('Team-2-P6', JSON.stringify(array2));
	}
}
function p7_button_fun(){
	var value=parseFloat(document.getElementsByClassName("p7_over")[0].innerHTML);
	clicks[6]++;
	if(clicks[6]<6){
	value=(value+0.1).toFixed(1);
	}
	if(clicks[6]==6){
		value=(value+0.5).toFixed(1);
		clicks[6]=0;
	}
	document.getElementsByClassName("p7_over")[0].innerHTML=value
	if(tosswinner=="Team1"  &&   batorball=="Batting"){
	var array2 = JSON.parse(localStorage.getItem("Team-2-P7"));
	array2[1]=value;
	localStorage.setItem('Team-2-P7', JSON.stringify(array2));
	}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
		var array2 = JSON.parse(localStorage.getItem("Team-1-P7"));
		array2[1]=value;
		localStorage.setItem('Team-1-P7', JSON.stringify(array2));
	}else if(tosswinner=="Team2"  &&   batorball=="Batting"){
		var array2 = JSON.parse(localStorage.getItem("Team-1-P7"));
		array2[1]=value;
		localStorage.setItem('Team-1-P7', JSON.stringify(array2));
	}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
		var array2 = JSON.parse(localStorage.getItem("Team-2-P7"));
		array2[1]=value;
		localStorage.setItem('Team-2-P7', JSON.stringify(array2));
	}
}
function p8_button_fun(){
	var value=parseFloat(document.getElementsByClassName("p8_over")[0].innerHTML);
	clicks[7]++;
	if(clicks[7]<6){
	value=(value+0.1).toFixed(1);
	}
	if(clicks[7]==6){
		value=(value+0.5).toFixed(1);
		clicks[7]=0;
	}
	document.getElementsByClassName("p8_over")[0].innerHTML=value
	if(tosswinner=="Team1"  &&   batorball=="Batting"){
	var array2 = JSON.parse(localStorage.getItem("Team-2-P8"));
	array2[1]=value;
	localStorage.setItem('Team-2-P8', JSON.stringify(array2));
	}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
		var array2 = JSON.parse(localStorage.getItem("Team-1-P8"));
		array2[1]=value;
		localStorage.setItem('Team-1-P8', JSON.stringify(array2));
	}else if(tosswinner=="Team2"  &&   batorball=="Batting"){
		var array2 = JSON.parse(localStorage.getItem("Team-1-P8"));
		array2[1]=value;
		localStorage.setItem('Team-1-P8', JSON.stringify(array2));
	}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
		var array2 = JSON.parse(localStorage.getItem("Team-2-P8"));
		array2[1]=value;
		localStorage.setItem('Team-2-P8', JSON.stringify(array2));
	}
}
function p9_button_fun(){
	var value=parseFloat(document.getElementsByClassName("p9_over")[0].innerHTML);
	clicks[8]++;
	if(clicks[8]<6){
	value=(value+0.1).toFixed(1);
	}
	if(clicks[8]==6){
		value=(value+0.5).toFixed(1);
		clicks[8]=0;
	}
	document.getElementsByClassName("p9_over")[0].innerHTML=value
	if(tosswinner=="Team1"  &&   batorball=="Batting"){
	var array2 = JSON.parse(localStorage.getItem("Team-2-P9"));
	array2[1]=value;
	localStorage.setItem('Team-2-P9', JSON.stringify(array2));
	}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
		var array2 = JSON.parse(localStorage.getItem("Team-1-P9"));
		array2[1]=value;
		localStorage.setItem('Team-1-P9', JSON.stringify(array2));
	}else if(tosswinner=="Team2"  &&   batorball=="Batting"){
		var array2 = JSON.parse(localStorage.getItem("Team-1-P9"));
		array2[1]=value;
		localStorage.setItem('Team-1-P9', JSON.stringify(array2));
	}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
		var array2 = JSON.parse(localStorage.getItem("Team-2-P9"));
		array2[1]=value;
		localStorage.setItem('Team-2-P9', JSON.stringify(array2));
	}
}
function p10_button_fun(){
	var value=parseFloat(document.getElementsByClassName("p10_over")[0].innerHTML);
	clicks[9]++;
	if(clicks[9]<6){
	value=(value+0.1).toFixed(1);
	}
	if(clicks[9]==6){
		value=(value+0.5).toFixed(1);
		clicks[9]=0;
	}
	document.getElementsByClassName("p10_over")[0].innerHTML=value
	if(tosswinner=="Team1"  &&   batorball=="Batting"){
	var array2 = JSON.parse(localStorage.getItem("Team-2-P10"));
	array2[1]=value;
	localStorage.setItem('Team-2-P10', JSON.stringify(array2));
	}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
		var array2 = JSON.parse(localStorage.getItem("Team-1-P10"));
		array2[1]=value;
		localStorage.setItem('Team-1-P10', JSON.stringify(array2));
	}else if(tosswinner=="Team2"  &&   batorball=="Batting"){
		var array2 = JSON.parse(localStorage.getItem("Team-1-P10"));
		array2[1]=value;
		localStorage.setItem('Team-1-P10', JSON.stringify(array2));
	}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
		var array2 = JSON.parse(localStorage.getItem("Team-2-P10"));
		array2[1]=value;
		localStorage.setItem('Team-2-P10', JSON.stringify(array2));
	}
}
function p11_button_fun(){
	var value=parseFloat(document.getElementsByClassName("p11_over")[0].innerHTML);
	clicks[10]++;
	if(clicks[10]<6){
	value=(value+0.1).toFixed(1);
	}
	if(clicks[10]==6){
		value=(value+0.5).toFixed(1);
		clicks[10]=0;
	}
	document.getElementsByClassName("p11_over")[0].innerHTML=value
	if(tosswinner=="Team1"  &&   batorball=="Batting"){
	var array2 = JSON.parse(localStorage.getItem("Team-2-P11"));
	array2[1]=value;
	localStorage.setItem('Team-2-P11', JSON.stringify(array2));
	}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
		var array2 = JSON.parse(localStorage.getItem("Team-1-P11"));
		array2[1]=value;
		localStorage.setItem('Team-1-P11', JSON.stringify(array2));
	}else if(tosswinner=="Team2"  &&   batorball=="Batting"){
		var array2 = JSON.parse(localStorage.getItem("Team-1-P11"));
		array2[1]=value;
		localStorage.setItem('Team-1-P11', JSON.stringify(array2));
	}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
		var array2 = JSON.parse(localStorage.getItem("Team-2-P11"));
		array2[1]=value;
		localStorage.setItem('Team-2-P11', JSON.stringify(array2));
	}
}