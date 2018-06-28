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

