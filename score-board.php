<!DOCTYPE html>
<html>
<head>
	<title>Score Board</title>
	<link rel="stylesheet" type="text/css" href="css/score-board-style.css">
</head>
<body>
<div class="container">
	<div class="team-1 teams">
		<div class="nested-details">
			<div class="player-names">
				<?php
					$name = "Mohammed Avez";
					for ($i=0; $i <11 ; $i++) { 
						echo $name;
						echo "<br><br><br>";
					}
				  ?>
			</div>
			<div class="player-score">
				<?php
					$name = "11";
					for ($i=0; $i <11 ; $i++) { 
						echo $i;
						echo "<br><br><br>";
					}
				  ?>
			</div>
			<div class="score-buttons">
				
			</div>
		</div>
	</div>
	<div class="team-2 teams">
		
	</div>
</div>
</body>
</html>