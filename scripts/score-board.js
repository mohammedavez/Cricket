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

for(i=0;i<10;i++){
document.getElementsByClassName(player_gird_class_style[i])[0].style.gridRow=i+2;
document.getElementsByClassName(player_gird_class_style[i])[0].style.gridColumn="1";
}
for(i=0;i<10;i++){
document.getElementsByClassName(score_per_player[i])[0].style.gridRow=i+2;
document.getElementsByClassName(score_per_player[i])[0].style.gridColumn="3";
}
for(i=0;i<10;i++){
document.getElementsByClassName(score_buttons_player[i])[0].style.gridRow=i+2;
document.getElementsByClassName(score_buttons_player[i])[0].style.gridColumn="4/6";
}
function p1_4_button(){
	var value =parseInt(document.querySelector(".p1_score p").innerHTML);
	value = value+4;
	document.querySelector(".p1_score p").innerHTML=value;
}
function p1_6_button(){
	var value =parseInt(document.querySelector(".p1_score p").innerHTML);
	value = value+6;
	document.querySelector(".p1_score p").innerHTML=value;
}
function p1_1_button(){
	var value =parseInt(document.querySelector(".p1_score p").innerHTML);
	value = value+1;
	document.querySelector(".p1_score p").innerHTML=value;
}
function p2_4_button(){
	var value =parseInt(document.querySelector(".p2_score p").innerHTML);
	value = value+4;
	document.querySelector(".p2_score p").innerHTML=value;
}
function p2_6_button(){
	var value =parseInt(document.querySelector(".p2_score p").innerHTML);
	value = value+6;
	document.querySelector(".p2_score p").innerHTML=value;
}
function p2_1_button(){
	var value =parseInt(document.querySelector(".p2_score p").innerHTML);
	value = value+1;
	document.querySelector(".p2_score p").innerHTML=value;
}
function p3_4_button(){
	var value =parseInt(document.querySelector(".p3_score p").innerHTML);
	value = value+4;
	document.querySelector(".p3_score p").innerHTML=value;
}
function p3_6_button(){
	var value =parseInt(document.querySelector(".p3_score p").innerHTML);
	value = value+6;
	document.querySelector(".p3_score p").innerHTML=value;
}
function p3_1_button(){
	var value =parseInt(document.querySelector(".p3_score p").innerHTML);
	value = value+1;
	document.querySelector(".p3_score p").innerHTML=value;
}
function p4_4_button(){
	var value =parseInt(document.querySelector(".p4_score p").innerHTML);
	value = value+4;
	document.querySelector(".p4_score p").innerHTML=value;
}
function p4_6_button(){
	var value =parseInt(document.querySelector(".p4_score p").innerHTML);
	value = value+6;
	document.querySelector(".p4_score p").innerHTML=value;
}
function p4_1_button(){
	var value =parseInt(document.querySelector(".p4_score p").innerHTML);
	value = value+1;
	document.querySelector(".p4_score p").innerHTML=value;
}
function p5_4_button(){
	var value =parseInt(document.querySelector(".p5_score p").innerHTML);
	value = value+4;
	document.querySelector(".p5_score p").innerHTML=value;
}
function p5_6_button(){
	var value =parseInt(document.querySelector(".p5_score p").innerHTML);
	value = value+6;
	document.querySelector(".p5_score p").innerHTML=value;
}
function p5_1_button(){
	var value =parseInt(document.querySelector(".p5_score p").innerHTML);
	value = value+1;
	document.querySelector(".p5_score p").innerHTML=value;
}
function p6_4_button(){
	var value =parseInt(document.querySelector(".p6_score p").innerHTML);
	value = value+4;
	document.querySelector(".p6_score p").innerHTML=value;
}
function p6_6_button(){
	var value =parseInt(document.querySelector(".p6_score p").innerHTML);
	value = value+6;
	document.querySelector(".p6_score p").innerHTML=value;
}
function p6_1_button(){
	var value =parseInt(document.querySelector(".p6_score p").innerHTML);
	value = value+1;
	document.querySelector(".p6_score p").innerHTML=value;
}
function p7_4_button(){
	var value =parseInt(document.querySelector(".p7_score p").innerHTML);
	value = value+4;
	document.querySelector(".p7_score p").innerHTML=value;
}
function p7_6_button(){
	var value =parseInt(document.querySelector(".p7_score p").innerHTML);
	value = value+6;
	document.querySelector(".p7_score p").innerHTML=value;
}
function p7_1_button(){
	var value =parseInt(document.querySelector(".p7_score p").innerHTML);
	value = value+1;
	document.querySelector(".p7_score p").innerHTML=value;
}
function p8_4_button(){
	var value =parseInt(document.querySelector(".p8_score p").innerHTML);
	value = value+4;
	document.querySelector(".p8_score p").innerHTML=value;
}
function p8_6_button(){
	var value =parseInt(document.querySelector(".p8_score p").innerHTML);
	value = value+6;
	document.querySelector(".p8_score p").innerHTML=value;
}
function p8_1_button(){
	var value =parseInt(document.querySelector(".p8_score p").innerHTML);
	value = value+1;
	document.querySelector(".p8_score p").innerHTML=value;
}
function p9_4_button(){
	var value =parseInt(document.querySelector(".p9_score p").innerHTML);
	value = value+4;
	document.querySelector(".p9_score p").innerHTML=value;
}
function p9_6_button(){
	var value =parseInt(document.querySelector(".p9_score p").innerHTML);
	value = value+6;
	document.querySelector(".p9_score p").innerHTML=value;
}
function p9_1_button(){
	var value =parseInt(document.querySelector(".p9_score p").innerHTML);
	value = value+1;
	document.querySelector(".p9_score p").innerHTML=value;
}
function p10_4_button(){
	var value =parseInt(document.querySelector(".p10_score p").innerHTML);
	value = value+4;
	document.querySelector(".p10_score p").innerHTML=value;
}
function p10_6_button(){
	var value =parseInt(document.querySelector(".p10_score p").innerHTML);
	value = value+6;
	document.querySelector(".p10_score p").innerHTML=value;
}
function p10_1_button(){
	var value =parseInt(document.querySelector(".p10_score p").innerHTML);
	value = value+1;
	document.querySelector(".p10_score p").innerHTML=value;
}
function p11_4_button(){
	var value =parseInt(document.querySelector(".p11_score p").innerHTML);
	value = value+4;
	document.querySelector(".p11_score p").innerHTML=value;
}
function p11_6_button(){
	var value =parseInt(document.querySelector(".p11_score p").innerHTML);
	value = value+6;
	document.querySelector(".p11_score p").innerHTML=value;
}
function p11_1_button(){
	var value =parseInt(document.querySelector(".p11_score p").innerHTML);
	value = value+1;
	document.querySelector(".p11_score p").innerHTML=value;
}
