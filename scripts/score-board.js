var player_gird_class_style=['p1','p2','p3','p4',
									'p5','p6','p7','p8',
									'p9','p10','p11']
var score_per_player =['p1_score','p2_score','p3_score',
							'p4_score','p5_score','p6_score',
							'p7_score','p8_score','p9_score',
							'p10_score','p11_score']
var score_buttons_player =['score_buttons1','score_buttons2','score_buttons3',
								 'score_buttons4','score_buttons5','score_buttons6',
								 'score_buttons7','score_buttons8','score_buttons9',
								 'score_buttons10','score_buttons11']

for(i=0;i<=10;i++){
document.getElementsByClassName(player_gird_class_style[i])[0].style.gridRow=i+2;
document.getElementsByClassName(player_gird_class_style[i])[0].style.gridColumn="1";
}
for(i=0;i<=10;i++){
document.getElementsByClassName(score_per_player[i])[0].style.gridRow=i+2;
document.getElementsByClassName(score_per_player[i])[0].style.gridColumn="3";
}
for(i=0;i<=10;i++){
document.getElementsByClassName(score_buttons_player[i])[0].style.gridRow=i+2;
document.getElementsByClassName(score_buttons_player[i])[0].style.gridColumn="4/6";
}
var player_names_update =['Team-1-P1','Team-1-P2','Team-1-P3',
								  'Team-1-P4','Team-1-P5','Team-1-P6',
								  'Team-1-P7','Team-1-P8','Team-1-P9',
								  'Team-1-P10','Team-1-P11']
				
var player_names2_update =['Team-2-P1','Team-2-P2','Team-2-P3',
									'Team-2-P4','Team-2-P5','Team-2-P6',
									'Team-2-P7','Team-2-P8','Team-2-P9',
									'Team-2-P10','Team-2-P11']
var tosswinnerfor
function p1_4_button(){
	var value =parseInt(document.querySelector(".p1_score p").innerHTML);
	value = value+4;
	var total_score =parseInt(document.querySelector(".score").innerHTML);
	total_score=total_score+4;
	document.querySelector(".score").innerHTML= total_score
	if(tosswinner=="Team1"  &&   batorball=="Batting"){
	var array2 = JSON.parse(localStorage.getItem("Team-1-P1"));
	array2[1]=value;
	localStorage.setItem('Team-1-P1', JSON.stringify(array2));
	}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
		var array2 = JSON.parse(localStorage.getItem("Team-2-P1"));
		array2[1]=value;
		localStorage.setItem('Team-2-P1', JSON.stringify(array2));
	}else if(tosswinner=="Team2"  &&   batorball=="Batting"){
		var array2 = JSON.parse(localStorage.getItem("Team-2-P1"));
		array2[1]=value;
		localStorage.setItem('Team-2-P1', JSON.stringify(array2));
	}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
		var array2 = JSON.parse(localStorage.getItem("Team-1-P1"));
		array2[1]=value;
		localStorage.setItem('Team-1-P1', JSON.stringify(array2));
	}
// var test = JSON.parse(localStorage.getItem("testKey"));
	document.querySelector(".p1_score p").innerHTML=value;
}
function p1_6_button(){
	var value =parseInt(document.querySelector(".p1_score p").innerHTML);
	value = value+6;
	var total_score =parseInt(document.querySelector(".score").innerHTML);
	total_score=total_score+6;
	document.querySelector(".score").innerHTML= total_score
	if(tosswinner=="Team1"  &&   batorball=="Batting"){
	var array2 = JSON.parse(localStorage.getItem("Team-1-P1"));
	array2[1]=value;
	localStorage.setItem('Team-1-P1', JSON.stringify(array2));
	}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
		var array2 = JSON.parse(localStorage.getItem("Team-2-P1"));
		array2[1]=value;
		localStorage.setItem('Team-2-P1', JSON.stringify(array2));
	}else if(tosswinner=="Team2"  &&   batorball=="Batting"){
		var array2 = JSON.parse(localStorage.getItem("Team-2-P1"));
		array2[1]=value;
		localStorage.setItem('Team-2-P1', JSON.stringify(array2));
	}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
		var array2 = JSON.parse(localStorage.getItem("Team-1-P1"));
		array2[1]=value;
		localStorage.setItem('Team-1-P1', JSON.stringify(array2));
	}
	document.querySelector(".p1_score p").innerHTML=value;
}
function p1_1_button(){
	var value =parseInt(document.querySelector(".p1_score p").innerHTML);
	value = value+1;
	var total_score =parseInt(document.querySelector(".score").innerHTML);
	total_score=total_score+1;
	document.querySelector(".score").innerHTML= total_score
	if(tosswinner=="Team1"  &&   batorball=="Batting"){
	var array2 = JSON.parse(localStorage.getItem("Team-1-P1"));
	array2[1]=value;
	localStorage.setItem('Team-1-P1', JSON.stringify(array2));
	}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
		var array2 = JSON.parse(localStorage.getItem("Team-2-P1"));
		array2[1]=value;
		localStorage.setItem('Team-2-P1', JSON.stringify(array2));
	}else if(tosswinner=="Team2"  &&   batorball=="Batting"){
		var array2 = JSON.parse(localStorage.getItem("Team-2-P1"));
		array2[1]=value;
		localStorage.setItem('Team-2-P1', JSON.stringify(array2));
	}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
		var array2 = JSON.parse(localStorage.getItem("Team-1-P1"));
		array2[1]=value;
		localStorage.setItem('Team-1-P1', JSON.stringify(array2));
	}
	document.querySelector(".p1_score p").innerHTML=value;
}

function p2_4_button(){
	var value =parseInt(document.querySelector(".p2_score p").innerHTML);
	value = value+4;
	var total_score =parseInt(document.querySelector(".score").innerHTML);
	total_score=total_score+4;
	document.querySelector(".score").innerHTML= total_score
	if(tosswinner=="Team1"  &&   batorball=="Batting"){
	var array3 = JSON.parse(localStorage.getItem("Team-1-P2"));
	array3[1]=value;
	localStorage.setItem('Team-1-P2', JSON.stringify(array3));
	}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
		var array3 = JSON.parse(localStorage.getItem("Team-2-P2"));
		array3[1]=value;
		localStorage.setItem('Team-2-P2', JSON.stringify(array3));
	}else if(tosswinner=="Team2"  &&   batorball=="Batting"){
		var array3 = JSON.parse(localStorage.getItem("Team-2-P2"));
		array3[1]=value;
		localStorage.setItem('Team-2-P2', JSON.stringify(array3));
	}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
		var array3 = JSON.parse(localStorage.getItem("Team-1-P2"));
		array3[1]=value;
		localStorage.setItem('Team-1-P2', JSON.stringify(array3));
	}
	document.querySelector(".p2_score p").innerHTML=value;
}
function p2_6_button(){
	var value =parseInt(document.querySelector(".p2_score p").innerHTML);
	value = value+6;
	var total_score =parseInt(document.querySelector(".score").innerHTML);
	total_score=total_score+6;
	document.querySelector(".score").innerHTML= total_score
	if(tosswinner=="Team1"  &&   batorball=="Batting"){
	var array3 = JSON.parse(localStorage.getItem("Team-1-P2"));
	array3[1]=value;
	localStorage.setItem('Team-1-P2', JSON.stringify(array3));
	}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
		var array3 = JSON.parse(localStorage.getItem("Team-2-P2"));
		array3[1]=value;
		localStorage.setItem('Team-2-P2', JSON.stringify(array3));
	}else if(tosswinner=="Team2"  &&   batorball=="Batting"){
		var array3 = JSON.parse(localStorage.getItem("Team-2-P2"));
		array3[1]=value;
		localStorage.setItem('Team-2-P2', JSON.stringify(array3));
	}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
		var array3 = JSON.parse(localStorage.getItem("Team-1-P2"));
		array3[1]=value;
		localStorage.setItem('Team-1-P2', JSON.stringify(array3));
	}
	document.querySelector(".p2_score p").innerHTML=value;
}
function p2_1_button(){
	var value =parseInt(document.querySelector(".p2_score p").innerHTML);
	value = value+1;
	var total_score =parseInt(document.querySelector(".score").innerHTML);
	total_score=total_score+1;
	document.querySelector(".score").innerHTML= total_score
	if(tosswinner=="Team1"  &&   batorball=="Batting"){
	var array3 = JSON.parse(localStorage.getItem("Team-1-P2"));
	array3[1]=value;
	localStorage.setItem('Team-1-P2', JSON.stringify(array3));
	}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
		var array3 = JSON.parse(localStorage.getItem("Team-2-P2"));
		array3[1]=value;
		localStorage.setItem('Team-2-P2', JSON.stringify(array3));
	}else if(tosswinner=="Team2"  &&   batorball=="Batting"){
		var array3 = JSON.parse(localStorage.getItem("Team-2-P2"));
		array3[1]=value;
		localStorage.setItem('Team-2-P2', JSON.stringify(array3));
	}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
		var array3 = JSON.parse(localStorage.getItem("Team-1-P2"));
		array3[1]=value;
		localStorage.setItem('Team-1-P2', JSON.stringify(array3));
	}
	document.querySelector(".p2_score p").innerHTML=value;
}
function p3_4_button(){
	var value =parseInt(document.querySelector(".p3_score p").innerHTML);
	value = value+4;
	var total_score =parseInt(document.querySelector(".score").innerHTML);
	total_score=total_score+4;
	document.querySelector(".score").innerHTML= total_score
	if(tosswinner=="Team1"  &&   batorball=="Batting"){
	var array4 = JSON.parse(localStorage.getItem("Team-1-P3"));
	array4[1]=value;
	localStorage.setItem('Team-1-P3', JSON.stringify(array4));
	}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
		var array4 = JSON.parse(localStorage.getItem("Team-2-P3"));
		array4[1]=value;
		localStorage.setItem('Team-2-P3', JSON.stringify(array4));
	}else if(tosswinner=="Team2"  &&   batorball=="Batting"){
		var array4 = JSON.parse(localStorage.getItem("Team-2-P3"));
		array4[1]=value;
		localStorage.setItem('Team-2-P3', JSON.stringify(array4));
	}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
		var array4 = JSON.parse(localStorage.getItem("Team-1-P3"));
		array4[1]=value;
		localStorage.setItem('Team-1-P3', JSON.stringify(array4));
	}
	document.querySelector(".p3_score p").innerHTML=value;
}
function p3_6_button(){
	var value =parseInt(document.querySelector(".p3_score p").innerHTML);
	value = value+6;
	var total_score =parseInt(document.querySelector(".score").innerHTML);
	total_score=total_score+6;
	document.querySelector(".score").innerHTML= total_score
if(tosswinner=="Team1"  &&   batorball=="Batting"){
	var array4 = JSON.parse(localStorage.getItem("Team-1-P3"));
	array4[1]=value;
	localStorage.setItem('Team-1-P3', JSON.stringify(array4));
	}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
		var array4 = JSON.parse(localStorage.getItem("Team-2-P3"));
		array4[1]=value;
		localStorage.setItem('Team-2-P3', JSON.stringify(array4));
	}else if(tosswinner=="Team2"  &&   batorball=="Batting"){
		var array4 = JSON.parse(localStorage.getItem("Team-2-P3"));
		array4[1]=value;
		localStorage.setItem('Team-2-P3', JSON.stringify(array4));
	}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
		var array4 = JSON.parse(localStorage.getItem("Team-1-P3"));
		array4[1]=value;
		localStorage.setItem('Team-1-P3', JSON.stringify(array4));
	}
	document.querySelector(".p3_score p").innerHTML=value;
}
function p3_1_button(){
	var value =parseInt(document.querySelector(".p3_score p").innerHTML);
	value = value+1;
	var total_score =parseInt(document.querySelector(".score").innerHTML);
	total_score=total_score+1;
	document.querySelector(".score").innerHTML= total_score
if(tosswinner=="Team1"  &&   batorball=="Batting"){
	var array4 = JSON.parse(localStorage.getItem("Team-1-P3"));
	array4[1]=value;
	localStorage.setItem('Team-1-P3', JSON.stringify(array4));
	}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
		var array4 = JSON.parse(localStorage.getItem("Team-2-P3"));
		array4[1]=value;
		localStorage.setItem('Team-2-P3', JSON.stringify(array4));
	}else if(tosswinner=="Team2"  &&   batorball=="Batting"){
		var array4 = JSON.parse(localStorage.getItem("Team-2-P3"));
		array4[1]=value;
		localStorage.setItem('Team-2-P3', JSON.stringify(array4));
	}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
		var array4 = JSON.parse(localStorage.getItem("Team-1-P3"));
		array4[1]=value;
		localStorage.setItem('Team-1-P3', JSON.stringify(array4));
	}
	document.querySelector(".p3_score p").innerHTML=value;
}
function p4_4_button(){
	var value =parseInt(document.querySelector(".p4_score p").innerHTML);
	value = value+4;
	var total_score =parseInt(document.querySelector(".score").innerHTML);
	total_score=total_score+4;
	document.querySelector(".score").innerHTML= total_score
if(tosswinner=="Team1"  &&   batorball=="Batting"){
	var array5 = JSON.parse(localStorage.getItem("Team-1-P4"));
	array5[1]=value;
	localStorage.setItem('Team-1-P4', JSON.stringify(array5));
	}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
		var array5 = JSON.parse(localStorage.getItem("Team-2-P4"));
		array5[1]=value;
		localStorage.setItem('Team-2-P4', JSON.stringify(array5));
	}else if(tosswinner=="Team2"  &&   batorball=="Batting"){
		var array5 = JSON.parse(localStorage.getItem("Team-2-P4"));
		array5[1]=value;
		localStorage.setItem('Team-2-P4', JSON.stringify(array5));
	}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
		var array5 = JSON.parse(localStorage.getItem("Team-1-P4"));
		array5[1]=value;
		localStorage.setItem('Team-1-P4', JSON.stringify(array5));
	}
	document.querySelector(".p4_score p").innerHTML=value;
}
function p4_6_button(){
	var value =parseInt(document.querySelector(".p4_score p").innerHTML);
	value = value+6;
	var total_score =parseInt(document.querySelector(".score").innerHTML);
	total_score=total_score+6;
	document.querySelector(".score").innerHTML= total_score
	if(tosswinner=="Team1"  &&   batorball=="Batting"){
	var array5 = JSON.parse(localStorage.getItem("Team-1-P4"));
	array5[1]=value;
	localStorage.setItem('Team-1-P4', JSON.stringify(array5));
	}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
		var array5 = JSON.parse(localStorage.getItem("Team-2-P4"));
		array5[1]=value;
		localStorage.setItem('Team-2-P4', JSON.stringify(array5));
	}else if(tosswinner=="Team2"  &&   batorball=="Batting"){
		var array5 = JSON.parse(localStorage.getItem("Team-2-P4"));
		array5[1]=value;
		localStorage.setItem('Team-2-P4', JSON.stringify(array5));
	}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
		var array5 = JSON.parse(localStorage.getItem("Team-1-P4"));
		array5[1]=value;
		localStorage.setItem('Team-1-P4', JSON.stringify(array5));
	}
	document.querySelector(".p4_score p").innerHTML=value;
}
function p4_1_button(){
	var value =parseInt(document.querySelector(".p4_score p").innerHTML);
	value = value+1;
	var total_score =parseInt(document.querySelector(".score").innerHTML);
	total_score=total_score+1;
	document.querySelector(".score").innerHTML= total_score
	if(tosswinner=="Team1"  &&   batorball=="Batting"){
	var array5 = JSON.parse(localStorage.getItem("Team-1-P4"));
	array5[1]=value;
	localStorage.setItem('Team-1-P4', JSON.stringify(array5));
	}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
		var array5 = JSON.parse(localStorage.getItem("Team-2-P4"));
		array5[1]=value;
		localStorage.setItem('Team-2-P4', JSON.stringify(array5));
	}else if(tosswinner=="Team2"  &&   batorball=="Batting"){
		var array5 = JSON.parse(localStorage.getItem("Team-2-P4"));
		array5[1]=value;
		localStorage.setItem('Team-2-P4', JSON.stringify(array5));
	}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
		var array5 = JSON.parse(localStorage.getItem("Team-1-P4"));
		array5[1]=value;
		localStorage.setItem('Team-1-P4', JSON.stringify(array5));
	}
	document.querySelector(".p4_score p").innerHTML=value;
}
function p5_4_button(){
	var value =parseInt(document.querySelector(".p5_score p").innerHTML);
	value = value+4;
	var total_score =parseInt(document.querySelector(".score").innerHTML);
	total_score=total_score+4;
	document.querySelector(".score").innerHTML= total_score
	if(tosswinner=="Team1"  &&   batorball=="Batting"){
	var array6 = JSON.parse(localStorage.getItem("Team-1-P5"));
	array6[1]=value;
	localStorage.setItem('Team-1-P5', JSON.stringify(array6));
	}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
		var array6 = JSON.parse(localStorage.getItem("Team-2-P5"));
		array6[1]=value;
		localStorage.setItem('Team-2-P5', JSON.stringify(array6));
	}else if(tosswinner=="Team2"  &&   batorball=="Batting"){
		var array6 = JSON.parse(localStorage.getItem("Team-2-P5"));
		array6[1]=value;
		localStorage.setItem('Team-2-P5', JSON.stringify(array6));
	}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
		var array6 = JSON.parse(localStorage.getItem("Team-1-P5"));
		array6[1]=value;
		localStorage.setItem('Team-1-P5', JSON.stringify(array6));
	}
	document.querySelector(".p5_score p").innerHTML=value;
}
function p5_6_button(){
	var value =parseInt(document.querySelector(".p5_score p").innerHTML);
	value = value+6;
	var total_score =parseInt(document.querySelector(".score").innerHTML);
	total_score=total_score+6;
	document.querySelector(".score").innerHTML= total_score
	if(tosswinner=="Team1"  &&   batorball=="Batting"){
	var array6 = JSON.parse(localStorage.getItem("Team-1-P5"));
	array6[1]=value;
	localStorage.setItem('Team-1-P5', JSON.stringify(array6));
	}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
		var array6 = JSON.parse(localStorage.getItem("Team-2-P5"));
		array6[1]=value;
		localStorage.setItem('Team-2-P5', JSON.stringify(array6));
	}else if(tosswinner=="Team2"  &&   batorball=="Batting"){
		var array6 = JSON.parse(localStorage.getItem("Team-2-P5"));
		array6[1]=value;
		localStorage.setItem('Team-2-P5', JSON.stringify(array6));
	}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
		var array6 = JSON.parse(localStorage.getItem("Team-1-P5"));
		array6[1]=value;
		localStorage.setItem('Team-1-P5', JSON.stringify(array6));
	}
	document.querySelector(".p5_score p").innerHTML=value;
}
function p5_1_button(){
	var value =parseInt(document.querySelector(".p5_score p").innerHTML);
	value = value+1;
	var total_score =parseInt(document.querySelector(".score").innerHTML);
	total_score=total_score+1;
	document.querySelector(".score").innerHTML= total_score
	if(tosswinner=="Team1"  &&   batorball=="Batting"){
	var array6 = JSON.parse(localStorage.getItem("Team-1-P5"));
	array6[1]=value;
	localStorage.setItem('Team-1-P5', JSON.stringify(array6));
	}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
		var array6 = JSON.parse(localStorage.getItem("Team-2-P5"));
		array6[1]=value;
		localStorage.setItem('Team-2-P5', JSON.stringify(array6));
	}else if(tosswinner=="Team2"  &&   batorball=="Batting"){
		var array6 = JSON.parse(localStorage.getItem("Team-2-P5"));
		array6[1]=value;
		localStorage.setItem('Team-2-P5', JSON.stringify(array6));
	}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
		var array6 = JSON.parse(localStorage.getItem("Team-1-P5"));
		array6[1]=value;
		localStorage.setItem('Team-1-P5', JSON.stringify(array6));
	}
	document.querySelector(".p5_score p").innerHTML=value;
}
function p6_4_button(){
	var value =parseInt(document.querySelector(".p6_score p").innerHTML);
	value = value+4;
	var total_score =parseInt(document.querySelector(".score").innerHTML);
	total_score=total_score+4;
	document.querySelector(".score").innerHTML= total_score
	if(tosswinner=="Team1"  &&   batorball=="Batting"){
	var array7 = JSON.parse(localStorage.getItem("Team-1-P6"));
	array7[1]=value;
	localStorage.setItem('Team-1-P6', JSON.stringify(array7));
	}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
		var array7= JSON.parse(localStorage.getItem("Team-2-P6"));
		array7[1]=value;
		localStorage.setItem('Team-2-P6', JSON.stringify(array7));
	}else if(tosswinner=="Team2"  &&   batorball=="Batting"){
		var array7 = JSON.parse(localStorage.getItem("Team-2-P6"));
		array7[1]=value;
		localStorage.setItem('Team-2-P6', JSON.stringify(array7));
	}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
		var array7 = JSON.parse(localStorage.getItem("Team-1-P6"));
		array7[1]=value;
		localStorage.setItem('Team-1-P6', JSON.stringify(array7));
	}
	document.querySelector(".p6_score p").innerHTML=value;
}
function p6_6_button(){
	var value =parseInt(document.querySelector(".p6_score p").innerHTML);
	value = value+6;
	var total_score =parseInt(document.querySelector(".score").innerHTML);
	total_score=total_score+6;
	document.querySelector(".score").innerHTML= total_score
		if(tosswinner=="Team1"  &&   batorball=="Batting"){
	var array7 = JSON.parse(localStorage.getItem("Team-1-P6"));
	array7[1]=value;
	localStorage.setItem('Team-1-P6', JSON.stringify(array7));
	}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
		var array7= JSON.parse(localStorage.getItem("Team-2-P6"));
		array7[1]=value;
		localStorage.setItem('Team-2-P6', JSON.stringify(array7));
	}else if(tosswinner=="Team2"  &&   batorball=="Batting"){
		var array7 = JSON.parse(localStorage.getItem("Team-2-P6"));
		array7[1]=value;
		localStorage.setItem('Team-2-P6', JSON.stringify(array7));
	}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
		var array7 = JSON.parse(localStorage.getItem("Team-1-P6"));
		array7[1]=value;
		localStorage.setItem('Team-1-P6', JSON.stringify(array7));
	}
	document.querySelector(".p6_score p").innerHTML=value;
}
function p6_1_button(){
	var value =parseInt(document.querySelector(".p6_score p").innerHTML);
	value = value+1;
	var total_score =parseInt(document.querySelector(".score").innerHTML);
	total_score=total_score+1;
	document.querySelector(".score").innerHTML= total_score
		if(tosswinner=="Team1"  &&   batorball=="Batting"){
	var array7 = JSON.parse(localStorage.getItem("Team-1-P6"));
	array7[1]=value;
	localStorage.setItem('Team-1-P6', JSON.stringify(array7));
	}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
		var array7= JSON.parse(localStorage.getItem("Team-2-P6"));
		array7[1]=value;
		localStorage.setItem('Team-2-P6', JSON.stringify(array7));
	}else if(tosswinner=="Team2"  &&   batorball=="Batting"){
		var array7 = JSON.parse(localStorage.getItem("Team-2-P6"));
		array7[1]=value;
		localStorage.setItem('Team-2-P6', JSON.stringify(array7));
	}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
		var array7 = JSON.parse(localStorage.getItem("Team-1-P6"));
		array7[1]=value;
		localStorage.setItem('Team-1-P6', JSON.stringify(array7));
	}
	document.querySelector(".p6_score p").innerHTML=value;
}
function p7_4_button(){
	var value =parseInt(document.querySelector(".p7_score p").innerHTML);
	value = value+4;
	var total_score =parseInt(document.querySelector(".score").innerHTML);
	total_score=total_score+4;
	document.querySelector(".score").innerHTML= total_score
		if(tosswinner=="Team1"  &&   batorball=="Batting"){
	var array8 = JSON.parse(localStorage.getItem("Team-1-P7"));
	array8[1]=value;
	localStorage.setItem('Team-1-P7', JSON.stringify(array8));
	}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
		var array8= JSON.parse(localStorage.getItem("Team-2-P7"));
		array8[1]=value;
		localStorage.setItem('Team-2-P7', JSON.stringify(array8));
	}else if(tosswinner=="Team2"  &&   batorball=="Batting"){
		var array8= JSON.parse(localStorage.getItem("Team-2-P7"));
		array8[1]=value;
		localStorage.setItem('Team-2-P7', JSON.stringify(array8));
	}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
		var array8 = JSON.parse(localStorage.getItem("Team-1-P7"));
		array8[1]=value;
		localStorage.setItem('Team-1-P7', JSON.stringify(array8));
	}
	document.querySelector(".p7_score p").innerHTML=value;
}
function p7_6_button(){
	var value =parseInt(document.querySelector(".p7_score p").innerHTML);
	value = value+6;
	var total_score =parseInt(document.querySelector(".score").innerHTML);
	total_score=total_score+6;
	document.querySelector(".score").innerHTML= total_score
		if(tosswinner=="Team1"  &&   batorball=="Batting"){
	var array8 = JSON.parse(localStorage.getItem("Team-1-P7"));
	array8[1]=value;
	localStorage.setItem('Team-1-P7', JSON.stringify(array8));
	}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
		var array8= JSON.parse(localStorage.getItem("Team-2-P7"));
		array8[1]=value;
		localStorage.setItem('Team-2-P7', JSON.stringify(array8));
	}else if(tosswinner=="Team2"  &&   batorball=="Batting"){
		var array8= JSON.parse(localStorage.getItem("Team-2-P7"));
		array8[1]=value;
		localStorage.setItem('Team-2-P7', JSON.stringify(array8));
	}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
		var array8 = JSON.parse(localStorage.getItem("Team-1-P7"));
		array8[1]=value;
		localStorage.setItem('Team-1-P7', JSON.stringify(array8));
	}
	document.querySelector(".p7_score p").innerHTML=value;
}
function p7_1_button(){
	var value =parseInt(document.querySelector(".p7_score p").innerHTML);
	value = value+1;
	var total_score =parseInt(document.querySelector(".score").innerHTML);
	total_score=total_score+1;
	document.querySelector(".score").innerHTML= total_score
		if(tosswinner=="Team1"  &&   batorball=="Batting"){
	var array8 = JSON.parse(localStorage.getItem("Team-1-P7"));
	array8[1]=value;
	localStorage.setItem('Team-1-P7', JSON.stringify(array8));
	}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
		var array8= JSON.parse(localStorage.getItem("Team-2-P7"));
		array8[1]=value;
		localStorage.setItem('Team-2-P7', JSON.stringify(array8));
	}else if(tosswinner=="Team2"  &&   batorball=="Batting"){
		var array8= JSON.parse(localStorage.getItem("Team-2-P7"));
		array8[1]=value;
		localStorage.setItem('Team-2-P7', JSON.stringify(array8));
	}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
		var array8 = JSON.parse(localStorage.getItem("Team-1-P7"));
		array8[1]=value;
		localStorage.setItem('Team-1-P7', JSON.stringify(array8));
	}
	document.querySelector(".p7_score p").innerHTML=value;
}
function p8_4_button(){
	var value =parseInt(document.querySelector(".p8_score p").innerHTML);
	value = value+4;
	var total_score =parseInt(document.querySelector(".score").innerHTML);
	total_score=total_score+4;
	document.querySelector(".score").innerHTML= total_score
		if(tosswinner=="Team1"  &&   batorball=="Batting"){
	var array9 = JSON.parse(localStorage.getItem("Team-1-P8"));
	array9[1]=value;
	localStorage.setItem('Team-1-P8', JSON.stringify(array9));
	}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
		var array9= JSON.parse(localStorage.getItem("Team-2-P8"));
		array9[1]=value;
		localStorage.setItem('Team-2-P8', JSON.stringify(array9));
	}else if(tosswinner=="Team2"  &&   batorball=="Batting"){
		var array9= JSON.parse(localStorage.getItem("Team-2-P8"));
		array9[1]=value;
		localStorage.setItem('Team-2-P8', JSON.stringify(array9));
	}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
		var array9= JSON.parse(localStorage.getItem("Team-1-P8"));
		array9[1]=value;
		localStorage.setItem('Team-1-P8', JSON.stringify(array9));
	}
	document.querySelector(".p8_score p").innerHTML=value;
}
function p8_6_button(){
	var value =parseInt(document.querySelector(".p8_score p").innerHTML);
	value = value+6;
	var total_score =parseInt(document.querySelector(".score").innerHTML);
	total_score=total_score+6;
	document.querySelector(".score").innerHTML= total_score
	if(tosswinner=="Team1"  &&   batorball=="Batting"){
	var array9 = JSON.parse(localStorage.getItem("Team-1-P8"));
	array9[1]=value;
	localStorage.setItem('Team-1-P8', JSON.stringify(array9));
	}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
		var array9= JSON.parse(localStorage.getItem("Team-2-P8"));
		array9[1]=value;
		localStorage.setItem('Team-2-P8', JSON.stringify(array9));
	}else if(tosswinner=="Team2"  &&   batorball=="Batting"){
		var array9= JSON.parse(localStorage.getItem("Team-2-P8"));
		array9[1]=value;
		localStorage.setItem('Team-2-P8', JSON.stringify(array9));
	}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
		var array9= JSON.parse(localStorage.getItem("Team-1-P8"));
		array9[1]=value;
		localStorage.setItem('Team-1-P8', JSON.stringify(array9));
	}
	document.querySelector(".p8_score p").innerHTML=value;
}
function p8_1_button(){
	var value =parseInt(document.querySelector(".p8_score p").innerHTML);
	value = value+1;
	var total_score =parseInt(document.querySelector(".score").innerHTML);
	total_score=total_score+1;
	document.querySelector(".score").innerHTML= total_score
	if(tosswinner=="Team1"  &&   batorball=="Batting"){
	var array9 = JSON.parse(localStorage.getItem("Team-1-P8"));
	array9[1]=value;
	localStorage.setItem('Team-1-P8', JSON.stringify(array9));
	}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
		var array9= JSON.parse(localStorage.getItem("Team-2-P8"));
		array9[1]=value;
		localStorage.setItem('Team-2-P8', JSON.stringify(array9));
	}else if(tosswinner=="Team2"  &&   batorball=="Batting"){
		var array9= JSON.parse(localStorage.getItem("Team-2-P8"));
		array9[1]=value;
		localStorage.setItem('Team-2-P8', JSON.stringify(array9));
	}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
		var array9= JSON.parse(localStorage.getItem("Team-1-P8"));
		array9[1]=value;
		localStorage.setItem('Team-1-P8', JSON.stringify(array9));
	}
	document.querySelector(".p8_score p").innerHTML=value;
}
function p9_4_button(){
	var value =parseInt(document.querySelector(".p9_score p").innerHTML);
	value = value+4;
	var total_score =parseInt(document.querySelector(".score").innerHTML);
	total_score=total_score+4;
	document.querySelector(".score").innerHTML= total_score
	if(tosswinner=="Team1"  &&   batorball=="Batting"){
	var array10 = JSON.parse(localStorage.getItem("Team-1-P9"));
	array10[1]=value;
	localStorage.setItem('Team-1-P9', JSON.stringify(array10));
	}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
		var array10= JSON.parse(localStorage.getItem("Team-2-P9"));
		array10[1]=value;
		localStorage.setItem('Team-2-P9', JSON.stringify(array10));
	}else if(tosswinner=="Team2"  &&   batorball=="Batting"){
		var array10= JSON.parse(localStorage.getItem("Team-2-P9"));
		array10[1]=value;
		localStorage.setItem('Team-2-P9', JSON.stringify(array10));
	}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
		var array10= JSON.parse(localStorage.getItem("Team-1-P9"));
		array10[1]=value;
		localStorage.setItem('Team-1-P9', JSON.stringify(array10));
	}
	document.querySelector(".p9_score p").innerHTML=value;
}
function p9_6_button(){
	var value =parseInt(document.querySelector(".p9_score p").innerHTML);
	value = value+6;
	var total_score =parseInt(document.querySelector(".score").innerHTML);
	total_score=total_score+6;
	document.querySelector(".score").innerHTML= total_score
		if(tosswinner=="Team1"  &&   batorball=="Batting"){
	var array10 = JSON.parse(localStorage.getItem("Team-1-P9"));
	array10[1]=value;
	localStorage.setItem('Team-1-P9', JSON.stringify(array10));
	}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
		var array10= JSON.parse(localStorage.getItem("Team-2-P9"));
		array10[1]=value;
		localStorage.setItem('Team-2-P9', JSON.stringify(array10));
	}else if(tosswinner=="Team2"  &&   batorball=="Batting"){
		var array10= JSON.parse(localStorage.getItem("Team-2-P9"));
		array10[1]=value;
		localStorage.setItem('Team-2-P9', JSON.stringify(array10));
	}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
		var array10= JSON.parse(localStorage.getItem("Team-1-P9"));
		array10[1]=value;
		localStorage.setItem('Team-1-P9', JSON.stringify(array10));
	}
	document.querySelector(".p9_score p").innerHTML=value;
}
function p9_1_button(){
	var value =parseInt(document.querySelector(".p9_score p").innerHTML);
	value = value+1;
	var total_score =parseInt(document.querySelector(".score").innerHTML);
	total_score=total_score+1;
	document.querySelector(".score").innerHTML= total_score
		if(tosswinner=="Team1"  &&   batorball=="Batting"){
	var array10 = JSON.parse(localStorage.getItem("Team-1-P9"));
	array10[1]=value;
	localStorage.setItem('Team-1-P9', JSON.stringify(array10));
	}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
		var array10= JSON.parse(localStorage.getItem("Team-2-P9"));
		array10[1]=value;
		localStorage.setItem('Team-2-P9', JSON.stringify(array10));
	}else if(tosswinner=="Team2"  &&   batorball=="Batting"){
		var array10= JSON.parse(localStorage.getItem("Team-2-P9"));
		array10[1]=value;
		localStorage.setItem('Team-2-P9', JSON.stringify(array10));
	}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
		var array10= JSON.parse(localStorage.getItem("Team-1-P9"));
		array10[1]=value;
		localStorage.setItem('Team-1-P9', JSON.stringify(array10));
	}
	document.querySelector(".p9_score p").innerHTML=value;
}
function p10_4_button(){
	var value =parseInt(document.querySelector(".p10_score p").innerHTML);
	value = value+4;
	var total_score =parseInt(document.querySelector(".score").innerHTML);
	total_score=total_score+4;
	document.querySelector(".score").innerHTML= total_score
		if(tosswinner=="Team1"  &&   batorball=="Batting"){
	var array11 = JSON.parse(localStorage.getItem("Team-1-P10"));
	array11[1]=value;
	localStorage.setItem('Team-1-P10', JSON.stringify(array11));
	}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
		var array11= JSON.parse(localStorage.getItem("Team-2-P10"));
		array11[1]=value;
		localStorage.setItem('Team-2-P10', JSON.stringify(array11));
	}else if(tosswinner=="Team2"  &&   batorball=="Batting"){
		var array11= JSON.parse(localStorage.getItem("Team-2-P10"));
		array11[1]=value;
		localStorage.setItem('Team-2-P10', JSON.stringify(array11));
	}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
		var array11= JSON.parse(localStorage.getItem("Team-1-P10"));
		array11[1]=value;
		localStorage.setItem('Team-1-P10', JSON.stringify(array11));
	}
	document.querySelector(".p10_score p").innerHTML=value;
}
function p10_6_button(){
	var value =parseInt(document.querySelector(".p10_score p").innerHTML);
	value = value+6;
	var total_score =parseInt(document.querySelector(".score").innerHTML);
	total_score=total_score+6;
	document.querySelector(".score").innerHTML= total_score
		if(tosswinner=="Team1"  &&   batorball=="Batting"){
	var array11 = JSON.parse(localStorage.getItem("Team-1-P10"));
	array11[1]=value;
	localStorage.setItem('Team-1-P10', JSON.stringify(array11));
	}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
		var array11= JSON.parse(localStorage.getItem("Team-2-P10"));
		array11[1]=value;
		localStorage.setItem('Team-2-P10', JSON.stringify(array11));
	}else if(tosswinner=="Team2"  &&   batorball=="Batting"){
		var array11= JSON.parse(localStorage.getItem("Team-2-P10"));
		array11[1]=value;
		localStorage.setItem('Team-2-P10', JSON.stringify(array11));
	}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
		var array11= JSON.parse(localStorage.getItem("Team-1-P10"));
		array11[1]=value;
		localStorage.setItem('Team-1-P10', JSON.stringify(array11));
	}
	document.querySelector(".p10_score p").innerHTML=value;
}
function p10_1_button(){
	var value =parseInt(document.querySelector(".p10_score p").innerHTML);
	value = value+1;
	var total_score =parseInt(document.querySelector(".score").innerHTML);
	total_score=total_score+1;
	document.querySelector(".score").innerHTML= total_score
		if(tosswinner=="Team1"  &&   batorball=="Batting"){
	var array11 = JSON.parse(localStorage.getItem("Team-1-P10"));
	array11[1]=value;
	localStorage.setItem('Team-1-P10', JSON.stringify(array11));
	}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
		var array11= JSON.parse(localStorage.getItem("Team-2-P10"));
		array11[1]=value;
		localStorage.setItem('Team-2-P10', JSON.stringify(array11));
	}else if(tosswinner=="Team2"  &&   batorball=="Batting"){
		var array11= JSON.parse(localStorage.getItem("Team-2-P10"));
		array11[1]=value;
		localStorage.setItem('Team-2-P10', JSON.stringify(array11));
	}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
		var array11= JSON.parse(localStorage.getItem("Team-1-P10"));
		array11[1]=value;
		localStorage.setItem('Team-1-P10', JSON.stringify(array11));
	}
	document.querySelector(".p10_score p").innerHTML=value;
}
function p11_4_button(){
	var value =parseInt(document.querySelector(".p11_score p").innerHTML);
	value = value+4;
	var total_score =parseInt(document.querySelector(".score").innerHTML);
	total_score=total_score+4;
	document.querySelector(".score").innerHTML= total_score
		if(tosswinner=="Team1"  &&   batorball=="Batting"){
	var array12 = JSON.parse(localStorage.getItem("Team-1-P11"));
	array12[1]=value;
	localStorage.setItem('Team-1-P11', JSON.stringify(array12));
	}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
		var array12= JSON.parse(localStorage.getItem("Team-2-P11"));
		array12[1]=value;
		localStorage.setItem('Team-2-P11', JSON.stringify(array12));
	}else if(tosswinner=="Team2"  &&   batorball=="Batting"){
		var array12= JSON.parse(localStorage.getItem("Team-2-P11"));
		array12[1]=value;
		localStorage.setItem('Team-2-P11', JSON.stringify(array12));
	}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
		var array12= JSON.parse(localStorage.getItem("Team-1-P11"));
		array12[1]=value;
		localStorage.setItem('Team-1-P11', JSON.stringify(array12));
	}
	document.querySelector(".p11_score p").innerHTML=value;
}
function p11_6_button(){
	var value =parseInt(document.querySelector(".p11_score p").innerHTML);
	value = value+6;
	var total_score =parseInt(document.querySelector(".score").innerHTML);
	total_score=total_score+6;
	document.querySelector(".score").innerHTML= total_score
			if(tosswinner=="Team1"  &&   batorball=="Batting"){
	var array12 = JSON.parse(localStorage.getItem("Team-1-P11"));
	array12[1]=value;
	localStorage.setItem('Team-1-P11', JSON.stringify(array12));
	}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
		var array12= JSON.parse(localStorage.getItem("Team-2-P11"));
		array12[1]=value;
		localStorage.setItem('Team-2-P11', JSON.stringify(array12));
	}else if(tosswinner=="Team2"  &&   batorball=="Batting"){
		var array12= JSON.parse(localStorage.getItem("Team-2-P11"));
		array12[1]=value;
		localStorage.setItem('Team-2-P11', JSON.stringify(array12));
	}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
		var array12= JSON.parse(localStorage.getItem("Team-1-P11"));
		array12[1]=value;
		localStorage.setItem('Team-1-P11', JSON.stringify(array12));
	}
	document.querySelector(".p11_score p").innerHTML=value;
}
function p11_1_button(){
	var value =parseInt(document.querySelector(".p11_score p").innerHTML);
	value = value+1;
	var total_score =parseInt(document.querySelector(".score").innerHTML);
	total_score=total_score+1;
	document.querySelector(".score").innerHTML= total_score
			if(tosswinner=="Team1"  &&   batorball=="Batting"){
	var array12 = JSON.parse(localStorage.getItem("Team-1-P11"));
	array12[1]=value;
	localStorage.setItem('Team-1-P11', JSON.stringify(array12));
	}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
		var array12= JSON.parse(localStorage.getItem("Team-2-P11"));
		array12[1]=value;
		localStorage.setItem('Team-2-P11', JSON.stringify(array12));
	}else if(tosswinner=="Team2"  &&   batorball=="Batting"){
		var array12= JSON.parse(localStorage.getItem("Team-2-P11"));
		array12[1]=value;
		localStorage.setItem('Team-2-P11', JSON.stringify(array12));
	}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
		var array12= JSON.parse(localStorage.getItem("Team-1-P11"));
		array12[1]=value;
		localStorage.setItem('Team-1-P11', JSON.stringify(array12));
	}
	document.querySelector(".p11_score p").innerHTML=value;
}
function p1_out(){
	var team1 = document.querySelector(".p1_out_reason");
  	var text = team1.options[team1.selectedIndex].text;
  	console.log("hello world")
  	if(text != "Not Out"){
  		document.getElementsByClassName('p1_6_class')[0].disabled=true;
  		document.getElementsByClassName('p1_4_class')[0].disabled=true;
  		document.getElementsByClassName('p1_1_class')[0].disabled=true;
  	}else{
  		document.getElementsByClassName('p1_6_class')[0].disabled=false;
  		document.getElementsByClassName('p1_4_class')[0].disabled=false;
  		document.getElementsByClassName('p1_1_class')[0].disabled=false;
  	}
}
function p2_out(){
	var team1 = document.querySelector(".p2_out_reason");
  	var text = team1.options[team1.selectedIndex].text;
  	if(text != "Not Out"){
  		document.getElementsByClassName('p2_6_class')[0].disabled=true;
  		document.getElementsByClassName('p2_4_class')[0].disabled=true;
  		document.getElementsByClassName('p2_1_class')[0].disabled=true;
  	}else{
  		document.getElementsByClassName('p2_6_class')[0].disabled=false;
  		document.getElementsByClassName('p2_4_class')[0].disabled=false;
  		document.getElementsByClassName('p2_1_class')[0].disabled=false;
  	}
}
function p3_out(){
	var team1 = document.querySelector(".p3_out_reason");
  	var text = team1.options[team1.selectedIndex].text;
  	if(text != "Not Out"){
  		document.getElementsByClassName('p3_6_class')[0].disabled=true;
  		document.getElementsByClassName('p3_4_class')[0].disabled=true;
  		document.getElementsByClassName('p3_1_class')[0].disabled=true;
  	}else{
  		document.getElementsByClassName('p3_6_class')[0].disabled=false;
  		document.getElementsByClassName('p3_4_class')[0].disabled=false;
  		document.getElementsByClassName('p3_1_class')[0].disabled=false;
  	}
}
function p4_out(){
	var team1 = document.querySelector(".p4_out_reason");
  	var text = team1.options[team1.selectedIndex].text;
  	if(text != "Not Out"){
  		document.getElementsByClassName('p4_6_class')[0].disabled=true;
  		document.getElementsByClassName('p4_4_class')[0].disabled=true;
  		document.getElementsByClassName('p4_1_class')[0].disabled=true;
  	}else{
  		document.getElementsByClassName('p4_6_class')[0].disabled=false;
  		document.getElementsByClassName('p4_4_class')[0].disabled=false;
  		document.getElementsByClassName('p4_1_class')[0].disabled=false;
  	}
}
function p5_out(){
	var team1 = document.querySelector(".p5_out_reason");
  	var text = team1.options[team1.selectedIndex].text;
  	if(text != "Not Out"){
  		document.getElementsByClassName('p5_6_class')[0].disabled=true;
  		document.getElementsByClassName('p5_4_class')[0].disabled=true;
  		document.getElementsByClassName('p5_1_class')[0].disabled=true;
  	}else{
  		document.getElementsByClassName('p5_6_class')[0].disabled=false;
  		document.getElementsByClassName('p5_4_class')[0].disabled=false;
  		document.getElementsByClassName('p5_1_class')[0].disabled=false;
  	}
}
function p6_out(){
	var team1 = document.querySelector(".p6_out_reason");
  	var text = team1.options[team1.selectedIndex].text;
  	if(text != "Not Out"){
  		document.getElementsByClassName('p6_6_class')[0].disabled=true;
  		document.getElementsByClassName('p6_4_class')[0].disabled=true;
  		document.getElementsByClassName('p6_1_class')[0].disabled=true;
  	}else{
  		document.getElementsByClassName('p6_6_class')[0].disabled=false;
  		document.getElementsByClassName('p6_4_class')[0].disabled=false;
  		document.getElementsByClassName('p6_1_class')[0].disabled=false;
  	}
}
function p7_out(){
	var team1 = document.querySelector(".p7_out_reason");
  	var text = team1.options[team1.selectedIndex].text;
  	if(text != "Not Out"){
  		document.getElementsByClassName('p7_6_class')[0].disabled=true;
  		document.getElementsByClassName('p7_4_class')[0].disabled=true;
  		document.getElementsByClassName('p7_1_class')[0].disabled=true;
  	}else{
  		document.getElementsByClassName('p7_6_class')[0].disabled=false;
  		document.getElementsByClassName('p7_4_class')[0].disabled=false;
  		document.getElementsByClassName('p7_1_class')[0].disabled=false;
  	}
}
function p8_out(){
	var team1 = document.querySelector(".p8_out_reason");
  	var text = team1.options[team1.selectedIndex].text;
  	if(text != "Not Out"){
  		document.getElementsByClassName('p8_6_class')[0].disabled=true;
  		document.getElementsByClassName('p8_4_class')[0].disabled=true;
  		document.getElementsByClassName('p8_1_class')[0].disabled=true;
  	}else{
  		document.getElementsByClassName('p8_6_class')[0].disabled=false;
  		document.getElementsByClassName('p8_4_class')[0].disabled=false;
  		document.getElementsByClassName('p8_1_class')[0].disabled=false;
  	}
}
function p9_out(){
	var team1 = document.querySelector(".p9_out_reason");
  	var text = team1.options[team1.selectedIndex].text;
  	if(text != "Not Out"){
  		document.getElementsByClassName('p9_6_class')[0].disabled=true;
  		document.getElementsByClassName('p9_4_class')[0].disabled=true;
  		document.getElementsByClassName('p9_1_class')[0].disabled=true;
  	}else{
  		document.getElementsByClassName('p9_6_class')[0].disabled=false;
  		document.getElementsByClassName('p9_4_class')[0].disabled=false;
  		document.getElementsByClassName('p9_1_class')[0].disabled=false;
  	}
}
function p10_out(){
	var team1 = document.querySelector(".p10_out_reason");
  	var text = team1.options[team1.selectedIndex].text;
  	if(text != "Not Out"){
  		document.getElementsByClassName('p10_6_class')[0].disabled=true;
  		document.getElementsByClassName('p10_4_class')[0].disabled=true;
  		document.getElementsByClassName('p10_1_class')[0].disabled=true;
  	}else{
  		document.getElementsByClassName('p10_6_class')[0].disabled=false;
  		document.getElementsByClassName('p10_4_class')[0].disabled=false;
  		document.getElementsByClassName('p10_1_class')[0].disabled=false;
  	}
}
function p11_out(){
	var team1 = document.querySelector(".p11_out_reason");
  	var text = team1.options[team1.selectedIndex].text;
  	if(text != "Not Out"){
  		document.getElementsByClassName('p11_6_class')[0].disabled=true;
  		document.getElementsByClassName('p11_4_class')[0].disabled=true;
  		document.getElementsByClassName('p11_1_class')[0].disabled=true;
  	}else{
  		document.getElementsByClassName('p11_6_class')[0].disabled=false;
  		document.getElementsByClassName('p11_4_class')[0].disabled=false;
  		document.getElementsByClassName('p11_1_class')[0].disabled=false;
  	}
}