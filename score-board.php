<!DOCTYPE html>
<html>
<head>
	<title>Score Board</title>
	<link rel="stylesheet" type="text/css" href="css/score-board-style.css">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<div class="container">
	<div class="team-1 teams">
		<div class="nested-grid">
			<script>
				var player_gird_class=['p1','p2','p3','p4',
											'p5','p6','p7','p8',
											'p9','p10','p11']
				
				var player_names =['Team-1-P1','Team-1-P2','Team-1-P3',
										'Team-1-P4','Team-1-P5','Team-1-P6',
										'Team-1-P7','Team-1-P8','Team-1-P9',
										'Team-1-P10','Team-1-P11']
				
				var player_names2 =['Team-2-P1','Team-2-P2','Team-2-P3',
										'Team-2-P4','Team-2-P5','Team-2-P6',
										'Team-2-P7','Team-2-P8','Team-2-P9',
										'Team-2-P10','Team-2-P11']
				
				var score_per_player =['p1_score','p2_score','p3_score',
											'p4_score','p5_score','p6_score',
											'p7_score','p8_score','p9_score',
											'p10_score','p11_score']
				
				var score_buttons =['score_buttons1','score_buttons2','score_buttons3',
										'score_buttons4','score_buttons5','score_buttons6',
										'score_buttons7','score_buttons8','score_buttons9',
										'score_buttons10','score_buttons11']
										
				var six_button_functions = ['p1_6_button()','p2_6_button()','p3_6_button()',
												  'p4_6_button()','p5_6_button()','p6_6_button()',
												  'p7_6_button()','p8_6_button()','p9_6_button()',
												  'p10_6_button()','p11_6_button()']
				
				var one_button_functions = ['p1_1_button()','p2_1_button()','p3_1_button()',
												   'p4_1_button()','p5_1_button()','p6_1_button()',
												   'p7_1_button()','p8_1_button()','p9_1_button()',
												   'p10_1_button()','p11_1_button()']

				var four_button_functions = ['p1_4_button()','p2_4_button()','p3_4_button()',
													'p4_4_button()','p5_4_button()','p6_4_button()',
													'p7_4_button()','p8_4_button()','p9_4_button()',
													'p10_4_button()','p11_4_button()']
				var tosswinner = localStorage.getItem("TossWinner")
				var batorball  = localStorage.getItem("Batorball")
				if(tosswinner=="Team1"  &&   batorball=="Batting"){
				for(i=0;i<10;i++){
					document.write("<div class='"+player_gird_class[i]+"'>")
					document.write("<p>"+localStorage.getItem(player_names[i])+"</p>")
					document.write("</div>");
				}
				for(i=0;i<10;i++){
					document.write("<div class='"+score_per_player[i]+"'>")
					document.write("<p>0</p>")
					document.write("</div>");
				}
				for(i=0;i<10;i++){
					document.write("<div class='"+score_buttons[i]+"'>")
					document.write("<button class='fourbutton' onclick="+four_button_functions[i]+" type='submit'></button>")
					document.write("<button class='sixbutton' onclick="+six_button_functions[i]+" type='submit'></button>")
					document.write("<button class='onebutton' onclick="+one_button_functions[i]+" type='submit'></button>")
					document.write("<select class='player_out' >")
					document.write("<option></option>")
					document.write("<option>Not Out</option>")
					document.write("<option>Not Out</option>")
					document.write("<option>Not Out</option>")
					document.write("</select>")
					document.write("</div>");
				}
			}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){

				for(i=0;i<10;i++){
					document.write("<div class='"+player_gird_class[i]+"'>")
					document.write("<p>"+localStorage.getItem(player_names2[i])+"</p>")
					document.write("</div>");
				}
				for(i=0;i<10;i++){
					document.write("<div class='"+score_per_player[i]+"'>")
					document.write("<p>0</p>")
					document.write("</div>");
				}
				for(i=0;i<10;i++){
					document.write("<div class='"+score_buttons[i]+"'>")
					document.write("<button class='fourbutton' onclick="+four_button_functions[i]+" type='submit'></button>")
					document.write("<button class='sixbutton' onclick="+six_button_functions[i]+" type='submit'></button>")
					document.write("<button class='onebutton' onclick="+one_button_functions[i]+" type='submit'></button>")
					document.write("<select class='player_out' >")
					document.write("<option></option>")
					document.write("<option>Not Out</option>")
					document.write("<option>Not Out</option>")
					document.write("<option>Not Out</option>")
					document.write("</select>")
					document.write("</div>");
				}
			}else if(tosswinner=="Team2"  &&   batorball=="Batting"){
				for(i=0;i<10;i++){
					document.write("<div class='"+player_gird_class[i]+"'>")
					document.write("<p>"+localStorage.getItem(player_names2[i])+"</p>")
					document.write("</div>");
				}
				for(i=0;i<10;i++){
					document.write("<div class='"+score_per_player[i]+"'>")
					document.write("<p>0</p>")
					document.write("</div>");
				}
				for(i=0;i<10;i++){
					document.write("<div class='"+score_buttons[i]+"'>")
					document.write("<button class='fourbutton' onclick="+four_button_functions[i]+" type='submit'></button>")
					document.write("<button class='sixbutton' onclick="+six_button_functions[i]+" type='submit'></button>")
					document.write("<button class='onebutton' onclick="+one_button_functions[i]+" type='submit'></button>")
					document.write("<select class='player_out' >")
					document.write("<option></option>")
					document.write("<option>Not Out</option>")
					document.write("<option>Not Out</option>")
					document.write("<option>Not Out</option>")
					document.write("</select>")
					document.write("</div>");
				}
			}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
				for(i=0;i<10;i++){
					document.write("<div class='"+player_gird_class[i]+"'>")
					document.write("<p>"+localStorage.getItem(player_names[i])+"</p>")
					document.write("</div>");
				}
				for(i=0;i<10;i++){
					document.write("<div class='"+score_per_player[i]+"'>")
					document.write("<p>0</p>")
					document.write("</div>");
				}
				for(i=0;i<10;i++){
					document.write("<div class='"+score_buttons[i]+"'>")
					document.write("<button class='fourbutton' onclick="+four_button_functions[i]+" type='submit'></button>")
					document.write("<button class='sixbutton' onclick="+six_button_functions[i]+" type='submit'></button>")
					document.write("<button class='onebutton' onclick="+one_button_functions[i]+" type='submit'></button>")
					document.write("<select class='player_out' >")
					document.write("<option></option>")
					document.write("<option>Not Out</option>")
					document.write("<option>Not Out</option>")
					document.write("<option>Not Out</option>")
					document.write("</select>")
					document.write("</div>");
				}
			}
			</script>
		</div>

	</div>
	<div class="team-2 teams">
		
	</div>
</div>
<script src="scripts/score-board.js"></script>
</body>
</html>