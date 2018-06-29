<!DOCTYPE html>
<html>
<body>

<div id="result">Hello</div>

<script>
var value1 = ["aa","bb","cc"]
var value2 = ["aa","bb","cc"]
localStorage.setItem("testKey", JSON.stringify(value1));
localStorage.setItem("testKey2", JSON.stringify(value2));
var test = [JSON.parse(localStorage.getItem("testKey")),JSON.parse(localStorage.getItem("testKey"))];
console.log(test[0][0]);
</script>

</body>
</html>
