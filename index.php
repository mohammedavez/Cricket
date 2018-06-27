<!DOCTYPE html>
<html>
<head>
	<title>Select Team</title>
 	<meta name="viewport" content="width=device-width, initial-scale=1.0">
 	<meta name="viewport" content="initial-scale=1, maximum-scale=1">
	<link rel="stylesheet" type="text/css" href="css/indexstyle.css">
</head>
<body>
	<div id="result"></div>
	<form action="Team-1-Names.php" method="post">
<div class="container">

	<div class="team1">
		<img class="team1-image" src="images/india.png"><br><br><br>
	
  <select class="select-team1"  onchange="changeImgTeam1()">
     <option>Select Team:</option>
    <option>Australia</option>
    <option>Bangladesh</option>
    <option >England</option>
    <option >Pakistan</option>
    <option >India</option>
    <option >UAE</option>
  </select>
	</div>	
	<div class="vs">Vs</div>
	<div class="team2">
		<img class="team2-image" src="images/india.png"><br><br><br>
		<select class="select-team2" onchange="changeImgTeam2()" >
    <option>Select Team:</option>
    <option>Australia</option>
    <option>Bangladesh</option>
    <option>India</option>
    <option >England</option>
    <option >Pakistan</option>
    <option >UAE</option>
  </select>

	</div>
	<div class="submit"> 
	<button class="push_button" type="submit">
	Submit</button>
	</div>

</div>
</form>
<script src="scripts/indexscripts.js"></script>
</body>
</html>