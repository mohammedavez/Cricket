<!DOCTYPE html>
<html>
<head>
	<title>Toss</title>
	<link rel="stylesheet" type="text/css" href="css/Toss-winner.css">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
	<form action="score-board.php">
<div class="container">
	<div class="headings">
		<h1 id="wishing">Congratulations Team Bangladesh</h1><br>
		<h2>Please Choose to Bat or Ball</h2>
	</div>
	<div class="team-1 teams">
		<img src="images/Batting.png">
		<input type="radio" name="batorballchoose" value="Batting">
	</div>
	<div class="team-2 teams">
		<img src="images/bowling.png">
		<input type="radio" name="batorballchoose" value="Bowling">
	</div>
	<div class="submit"> 
  <button class="push_button" type="submit" onclick="batorball()">
  Submit</button>
  </div>
</div>
</form>
<script src="scripts/toss-winner.js"></script>
</body>
</html>