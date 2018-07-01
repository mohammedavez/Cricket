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

var playert2_gird_class=['team2_p1','team2_p2','team2_p3','team2_p4',
							  'team2_p5','team2_p6','team2_p7','team2_p8',
							  'team2_p9','team2_p10','team2_p11']

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

var over_per_player =['p1_over','p2_over','p3_over',
							'p4_over','p5_over','p6_over',
							'p7_over','p8_over','p9_over',
							'p10_over','p11_over']

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
var six_button_classes = ['p1_6_class','p2_6_class','p3_6_class',
								'p4_6_class','p5_6_class','p6_6_class',
								'p7_6_class','p8_6_class','p9_6_class',
								'p10_6_class','p11_6_class']
				
var one_button_classes = ['p1_1_class','p2_1_class','p3_1_class',
								'p4_1_class','p5_1_class','p6_1_class',
								'p7_1_class','p8_1_class','p9_1_class',
								'p10_1_class','p11_1_class']

var four_button_classes = ['p1_4_class','p2_4_class','p3_4_class',
								 'p4_4_class','p5_4_class','p6_4_class',
								 'p7_4_class','p8_4_class','p9_4_class',
								 'p10_4_class','p11_4_class']

var out_functions= ['p1_out()','p2_out()','p3_out()',
						'p4_out()','p5_out()','p6_out()',
						'p7_out()','p8_out()','p9_out()',
						'p10_out()','p11_out()']

var out_select_option_classes = ['p1_out_reason','p2_out_reason','p3_out_reason',																'p4_out_reason','p5_out_reason','p6_out_reason',
										'p7_out_reason','p8_out_reason','p9_out_reason',
										'p10_out_reason','p11_out_reason']

var team_1_array = [JSON.parse(localStorage.getItem("Team-1-P1")),
						 JSON.parse(localStorage.getItem("Team-1-P2")),
						 JSON.parse(localStorage.getItem("Team-1-P3")),
						 JSON.parse(localStorage.getItem("Team-1-P4")),
						 JSON.parse(localStorage.getItem("Team-1-P5")),
						 JSON.parse(localStorage.getItem("Team-1-P6")),
						 JSON.parse(localStorage.getItem("Team-1-P7")),
						 JSON.parse(localStorage.getItem("Team-1-P8")),
						 JSON.parse(localStorage.getItem("Team-1-P9")),
						 JSON.parse(localStorage.getItem("Team-1-P10")),
						 JSON.parse(localStorage.getItem("Team-1-P11"))
						   ]
var team_2_array = [JSON.parse(localStorage.getItem("Team-2-P1")),
						 JSON.parse(localStorage.getItem("Team-2-P2")),
						 JSON.parse(localStorage.getItem("Team-2-P3")),
						 JSON.parse(localStorage.getItem("Team-2-P4")),
						 JSON.parse(localStorage.getItem("Team-2-P5")),
						 JSON.parse(localStorage.getItem("Team-2-P6")),
						 JSON.parse(localStorage.getItem("Team-2-P7")),
						 JSON.parse(localStorage.getItem("Team-2-P8")),
						 JSON.parse(localStorage.getItem("Team-2-P9")),
						 JSON.parse(localStorage.getItem("Team-2-P10")),
						 JSON.parse(localStorage.getItem("Team-2-P11"))
						   ]

				var tosswinner = localStorage.getItem("TossWinner")
				var batorball  = localStorage.getItem("Batorball")

				if(tosswinner=="Team1"  &&   batorball=="Batting"){
					document.write("<h2 class='heading'>"+localStorage.getItem("Team-1-Name")+"</h2>")
				for(i=0;i<=10;i++){
					document.write("<div class='"+player_gird_class[i]+"'>")
					document.write("<p>"+team_1_array[i][0]+"</p>")
					document.write("</div>");
				}
				for(i=0;i<=10;i++){
					document.write("<div class='"+score_per_player[i]+"'>")
					document.write("<p>0</p>")
					document.write("</div>");
				}
				for(i=0;i<=10;i++){
					document.write("<div class='"+score_buttons[i]+"'>")
					document.write("<button class='fourbutton "+four_button_classes[i]+"' onclick="+four_button_functions[i]+" type='submit'></button>")
					document.write("<button class='sixbutton "+six_button_classes[i]+"' onclick="+six_button_functions[i]+" type='submit'></button>")
					document.write("<button class='onebutton "+one_button_classes[i]+"' onclick="+one_button_functions[i]+" type='submit'></button>")
					document.write("<select class='player_out "+out_select_option_classes[i]+"' onchange="+out_functions[i]+" >")
					document.write("<option></option>")
					document.write("<option>Not Out</option>")
					document.write("<option>Caught Behind by the keeper</option>")
					document.write("<option>Caught by a Fielder</option>")
					document.write("<option>Caught & Bowled</option>")
					document.write("<option>Leg Before Wicket</option>")
					document.write("<option>Stumped</option>")
					document.write("<option>Hit-wicket</option>")
					document.write("<option>Timed-out</option>")
					document.write("<option>Obstructing the Field</option>")
					document.write("<option>Handling the Ball</option>")
					document.write("<option>Run out</option>")
					document.write("</select>")
					document.write("</div>");
				}
			}else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
					document.write("<h2 class='heading'>"+localStorage.getItem("Team-2-Name")+"</h2>")
				for(i=0;i<=10;i++){
					document.write("<div class='"+player_gird_class[i]+"'>")
					document.write("<p>"+team_2_array[i][0]+"</p>")
					document.write("</div>");
				}
				for(i=0;i<=10;i++){
					document.write("<div class='"+score_per_player[i]+"'>")
					document.write("<p>0</p>")
					document.write("</div>");
				}
				for(i=0;i<=10;i++){
					document.write("<div class='"+score_buttons[i]+"'>")
					document.write("<button class='fourbutton "+four_button_classes[i]+"' onclick="+four_button_functions[i]+" type='submit'></button>")
					document.write("<button class='sixbutton "+six_button_classes[i]+"' onclick="+six_button_functions[i]+" type='submit'></button>")
					document.write("<button class='onebutton "+one_button_classes[i]+"' onclick="+one_button_functions[i]+" type='submit'></button>")
					document.write("<select class='player_out "+out_select_option_classes[i]+"' onchange="+out_functions[i]+"  >")
					document.write("<option></option>")
					document.write("<option></option>")
					document.write("<option>Not Out</option>")
					document.write("<option>Caught Behind by the keeper</option>")
					document.write("<option>Caught by a Fielder</option>")
					document.write("<option>Caught & Bowled</option>")
					document.write("<option>Leg Before Wicket</option>")
					document.write("<option>Stumped</option>")
					document.write("<option>Hit-wicket</option>")
					document.write("<option>Timed-out</option>")
					document.write("<option>Obstructing the Field</option>")
					document.write("<option>Handling the Ball</option>")
					document.write("<option>Run out</option>")
					document.write("</select>")
					document.write("</div>");
				}
			}
			else if(tosswinner=="Team2"  &&   batorball=="Batting"){
				document.write("<h2 class='heading'>"+localStorage.getItem("Team-2-Name")+"</h2>")
				for(i=0;i<=10;i++){
					document.write("<div class='"+player_gird_class[i]+"'>")
					document.write("<p>"+team_2_array[i][0]+"</p>")
					document.write("</div>");
				}
				for(i=0;i<=10;i++){
					document.write("<div class='"+score_per_player[i]+"'>")
					document.write("<p>0</p>")
					document.write("</div>");
				}
				for(i=0;i<=10;i++){
					document.write("<div class='"+score_buttons[i]+"'>")
					document.write("<button class='fourbutton "+four_button_classes[i]+"' onclick="+four_button_functions[i]+" type='submit'></button>")
					document.write("<button class='sixbutton "+six_button_classes[i]+"' onclick="+six_button_functions[i]+" type='submit'></button>")
					document.write("<button class='onebutton "+one_button_classes[i]+"' onclick="+one_button_functions[i]+" type='submit'></button>")
					document.write("<select class='player_out "+out_select_option_classes[i]+"' onchange="+out_functions[i]+"  >")
					document.write("<option></option>")
					document.write("<option>Not Out</option>")
					document.write("<option>Caught Behind by the keeper</option>")
					document.write("<option>Caught by a Fielder</option>")
					document.write("<option>Caught & Bowled</option>")
					document.write("<option>Leg Before Wicket</option>")
					document.write("<option>Stumped</option>")
					document.write("<option>Hit-wicket</option>")
					document.write("<option>Timed-out</option>")
					document.write("<option>Obstructing the Field</option>")
					document.write("<option>Handling the Ball</option>")
					document.write("<option>Run out</option>")
					document.write("</select>")
					document.write("</div>");
				}
			}else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
				document.write("<h2 class='heading'>"+localStorage.getItem("Team-1-Name")+"</h2>")
				for(i=0;i<=10;i++){
					document.write("<div class='"+player_gird_class[i]+"'>")
					document.write("<p>"+team_1_array[i][0]+"</p>")
					document.write("</div>");
				}
				for(i=0;i<=10;i++){
					document.write("<div class='"+score_per_player[i]+"'>")
					document.write("<p>0</p>")
					document.write("</div>");
				}
				for(i=0;i<=10;i++){
					document.write("<div class='"+score_buttons[i]+"'>")
					document.write("<button class='fourbutton "+four_button_classes[i]+"' onclick="+four_button_functions[i]+" type='submit'></button>")
					document.write("<button class='sixbutton "+six_button_classes[i]+"' onclick="+six_button_functions[i]+" type='submit'></button>")
					document.write("<button class='onebutton "+one_button_classes[i]+"' onclick="+one_button_functions[i]+" type='submit'></button>")
					document.write("<select class='player_out "+out_select_option_classes[i]+"' onchange="+out_functions[i]+"  >")
					document.write("<option></option>")
					document.write("<option>Not Out</option>")
					document.write("<option>Caught Behind by the keeper</option>")
					document.write("<option>Caught by a Fielder</option>")
					document.write("<option>Caught & Bowled</option>")
					document.write("<option>Leg Before Wicket</option>")
					document.write("<option>Stumped</option>")
					document.write("<option>Hit-wicket</option>")
					document.write("<option>Timed-out</option>")
					document.write("<option>Obstructing the Field</option>")
					document.write("<option>Handling the Ball</option>")
					document.write("<option>Run out</option>")
					document.write("</select>")
					document.write("</div>");
				}
			}
			</script>
		</div>

	</div>
	<div class="team-2 teams">
		<div class="nested-grid2">
			<script>
				var balls=[['p1_ball1','p1_ball2','p1_ball3','p1_ball4','p1_ball5','p1_ball6'],
							['p2_ball1','p2_ball2','p2_ball3','p2_ball4','p2_ball5','p2_ball6'],
							['p3_ball1','p3_ball2','p3_ball3','p3_ball4','p3_ball5','p3_ball6'],
							['p4_ball1','p4_ball2','p4_ball3','p4_ball4','p4_ball5','p4_ball6'],
							['p5_ball1','p5_ball2','p5_ball3','p5_ball4','p5_ball5','p5_ball6'],
							['p6_ball1','p6_ball2','p6_ball3','p6_ball4','p6_ball5','p6_ball6'],
							['p7_ball1','p7_ball2','p7_ball3','p7_ball4','p7_ball5','p7_ball6'],
							['p8_ball1','p8_ball2','p8_ball3','p8_ball4','p8_ball5','p8_ball6'],
							['p9_ball1','p9_ball2','p9_ball3','p9_ball4','p9_ball5','p9_ball6'],
							['p10_ball1','p10_ball2','p10_ball3','p10_ball4','p10_ball5','p10_ball6'],
							['p11_ball1','p11_ball2','p11_ball3','p11_ball4','p11_ball5','p11_ball6']
							]
				var over_increment=['p1_over_button','p2_over_button','p3_over_button',
										'p4_over_button','p5_over_button','p6_over_button',
										'p7_over_button','p8_over_button','p9_over_button',
										'p10_over_button','p11_over_button']
			if(tosswinner=="Team1"  &&   batorball=="Batting"){
					document.write("<h2 class='heading2'>"+localStorage.getItem("Team-2-Name")+"</h2>")
				for(i=0;i<=10;i++){
					document.write("<div class='"+playert2_gird_class[i]+"'>")
					document.write("<p>"+team_2_array[i][0]+"</p>")
					document.write("</div>");
				}
				for(i=0;i<=10;i++){
					document.write("<div class='"+over_per_player[i]+"'>")
					document.write("<p>0.0</p>")
					document.write("</div>");
				}
				for(var i=0;i<=10;i++){
					for(var j=0;j<=5;j++){
						document.write("<p class='"+balls[i][j]+" balls'>0</p>")
					}
				}
				for(var i=0;i<=10;i++){
					document.write("<button class='over_increment "+over_increment[i]+" ' type='submit'></button>")
				}
			}
			else if(tosswinner=="Team1"  &&   batorball=="Bowling"){
					document.write("<h2 class='heading2'>"+localStorage.getItem("Team-1-Name")+"</h2>")
				for(i=0;i<=10;i++){
					document.write("<div class='"+playert2_gird_class[i]+"'>")
					document.write("<p>"+team_1_array[i][0]+"</p>")
					document.write("</div>");
				}
				for(i=0;i<=10;i++){
					document.write("<div class='"+over_per_player[i]+"'>")
					document.write("<p>0.0</p>")
					document.write("</div>");
				}
			for(var i=0;i<=10;i++){
					for(var j=0;j<=5;j++){
						document.write("<p class='"+balls[i][j]+" balls'>0</p>")
					}
				}
			}
			else if(tosswinner=="Team2"  &&   batorball=="Batting"){
				document.write("<h2 class='heading2'>"+localStorage.getItem("Team-1-Name")+"</h2>")
				for(i=0;i<=10;i++){
					document.write("<div class='"+playert2_gird_class[i]+"'>")
					document.write("<p>"+team_1_array[i][0]+"</p>")
					document.write("</div>");
				}
				for(i=0;i<=10;i++){
					document.write("<div class='"+over_per_player[i]+"'>")
					document.write("<p>0.0</p>")
					document.write("</div>");
				}
				for(var i=0;i<=10;i++){
					for(var j=0;j<=5;j++){
						document.write("<p class='"+balls[i][j]+" balls'>0</p>")
					}
				}
			}
			else if(tosswinner=="Team2"  &&   batorball=="Bowling"){
				document.write("<h2 class='heading2'>"+localStorage.getItem("Team-2-Name")+"</h2>")
				for(i=0;i<=10;i++){
					document.write("<div class='"+playert2_gird_class[i]+"'>")
					document.write("<p>"+team_2_array[i][0]+"</p>")
					document.write("</div>");
				}
				for(i=0;i<=10;i++){
					document.write("<div class='"+over_per_player[i]+"'>")
					document.write("<p>0.0</p>")
					document.write("</div>");
				}
				for(var i=0;i<=10;i++){
					for(var j=0;j<=5;j++){
						document.write("<p class='"+balls[i][j]+" balls'>0</p>")
					}
				}
			}
			</script>
		</div>
	</div>
</div>
<div class="team-total-overs">
		<p>Overs:</p>
	</div>
<div class="team-total-score">
		<p class="score">0</p>
		<p>Score:</p>
</div>

<script src="scripts/score-board.js"></script>
<script src="scripts/score-board-right.js"></script>
</body>
</html>