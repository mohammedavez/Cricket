for(i=0;i<=10;i++){
document.getElementsByClassName(playert2_gird_class[i])[0].style.gridRow=i+2;
document.getElementsByClassName(playert2_gird_class[i])[0].style.gridColumn="1";
}
for(i=0;i<=10;i++){
document.getElementsByClassName(over_per_player[i])[0].style.gridRow=i+2;
document.getElementsByClassName(over_per_player[i])[0].style.gridColumn="3";
}
for(var i=0;i<=10;i++){
	for(var j=0;j<=5;j++){
		document.getElementsByClassName(balls[i][j])[0].style.gridRow = i+2;
		document.getElementsByClassName(balls[i][j])[0].style.gridColumn="4/6";
	}
}
positions = ["0px","24px","53px","81px","109px","136px"]
for(var i=0;i<=10;i++){
	for(var j=0;j<=5;j++){
		document.getElementsByClassName(balls[i][j])[0].style.position="relative"
		document.getElementsByClassName(balls[i][j])[0].style.left=positions[j]
	}
}
for(i=0;i<=10;i++){
document.getElementsByClassName(over_increment[i])[0].style.gridRow=i+2;
document.getElementsByClassName(over_increment[i])[0].style.gridColumn="6";
}