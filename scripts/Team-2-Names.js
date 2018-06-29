function team2players(){
	var playerNames = [document.getElementsByName('team2-player-1')[0].value,
							document.getElementsByName('team2-player-2')[0].value,
							document.getElementsByName('team2-player-3')[0].value,
							document.getElementsByName('team2-player-4')[0].value,
							document.getElementsByName('team2-player-5')[0].value,
							document.getElementsByName('team2-player-6')[0].value,
							document.getElementsByName('team2-player-7')[0].value,
							document.getElementsByName('team2-player-8')[0].value,
							document.getElementsByName('team2-player-9')[0].value,
							document.getElementsByName('team2-player-10')[0].value,
							document.getElementsByName('team2-player-11')[0].value];
  var playerNamesAndScore2 = [[playerNames[0],0],[playerNames[1],0],[playerNames[2],0],
                                     [playerNames[3],0],[playerNames[4],0],[playerNames[5],0],
                                     [playerNames[6],0],[playerNames[7],0],[playerNames[8],0],
                                     [playerNames[9],0],[playerNames[10],0]]
	var keyValuesTeam2Names = ["Team-2-P1","Team-2-P2","Team-2-P3",
										"Team-2-P4","Team-2-P5","Team-2-P6",
										"Team-2-P7","Team-2-P8","Team-2-P9",
										"Team-2-P10","Team-2-P11"]
			for (var i =0; i <=10; i++) {
		    localStorage.setItem(keyValuesTeam2Names[i], JSON.stringify(playerNamesAndScore2[i]));
			}
	}
	function team2player1skill(){
	
  var p1 = document.querySelector(".p1-skill");
  var skill = p1.options[p1.selectedIndex].text;
  document.getElementsByName('team2-player-1')[0].style.backgroundImage = "url('images/logos/"+skill+".png')"; 
  	}
  		function team2player2skill(){
  var p2 = document.querySelector(".p2-skill");
  var skill = p2.options[p2.selectedIndex].text;
  document.getElementsByName('team2-player-2')[0].style.backgroundImage = "url('images/logos/"+skill+".png')"; 
  	}
  		function team2player3skill(){
  var p3 = document.querySelector(".p3-skill");
  var skill = p3.options[p3.selectedIndex].text;
  document.getElementsByName('team2-player-3')[0].style.backgroundImage = "url('images/logos/"+skill+".png')"; 
  	}
  		function team2player4skill(){
  var p4 = document.querySelector(".p4-skill");
  var skill = p4.options[p4.selectedIndex].text;
  document.getElementsByName('team2-player-4')[0].style.backgroundImage = "url('images/logos/"+skill+".png')"; 
  	}
  		function team2player5skill(){
  var p5 = document.querySelector(".p5-skill");
  var skill = p5.options[p5.selectedIndex].text;
  document.getElementsByName('team2-player-5')[0].style.backgroundImage = "url('images/logos/"+skill+".png')"; 
  	}
  		function team2player6skill(){
  var p6 = document.querySelector(".p6-skill");
  var skill = p6.options[p6.selectedIndex].text;
  document.getElementsByName('team2-player-6')[0].style.backgroundImage = "url('images/logos/"+skill+".png')"; 
  	}
  		function team2player7skill(){
  var p7 = document.querySelector(".p7-skill");
  var skill = p7.options[p7.selectedIndex].text;
  document.getElementsByName('team2-player-7')[0].style.backgroundImage = "url('images/logos/"+skill+".png')"; 
  	}
  		function team2player8skill(){
  var p8 = document.querySelector(".p8-skill");
  var skill = p8.options[p8.selectedIndex].text;
  document.getElementsByName('team2-player-8')[0].style.backgroundImage = "url('images/logos/"+skill+".png')"; 
  	}
  		function team2player9skill(){
  var p9 = document.querySelector(".p9-skill");
  var skill = p9.options[p9.selectedIndex].text;
  document.getElementsByName('team2-player-9')[0].style.backgroundImage = "url('images/logos/"+skill+".png')"; 
  	}
  		function team2player10skill(){
  var p10 = document.querySelector(".p10-skill");
  var skill = p10.options[p10.selectedIndex].text;
  document.getElementsByName('team2-player-10')[0].style.backgroundImage = "url('images/logos/"+skill+".png')"; 
  	}
  		function team2player11skill(){
  var p11 = document.querySelector(".p11-skill");
  var skill = p11.options[p11.selectedIndex].text;
  document.getElementsByName('team2-player-11')[0].style.backgroundImage = "url('images/logos/"+skill+".png')"; 
  	}