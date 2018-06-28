<!DOCTYPE html>
<html>
<head>
	<title>Toss</title>
	<link rel="stylesheet" type="text/css" href="css/Toss.css">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
	<form action="Toss-Winner.php">
<div class="container">
	<div class="headings">
		<h1>Please Toss the Coin...</h1>
		<h2>Who won the toss</h2>
	</div>
	<div class="team-1 teams">
		<img class="team1-img" src="images/india.png">
		<input id="team1" type="radio" name="Team" value="Team1">
	</div>
	<div class="team-2 teams">
		<img class="team2-img" src="images/bangladesh.png">
		<input id="team2" type="radio" name="Team" value="Team2">
	</div>
	<div class="submit"> 
  <button class="push_button" type="submit" onclick="getTossWinner()">
  Submit</button>
  </div>
</div>
</form>
<script src="scripts/toss.js"></script>
</body>
</html>