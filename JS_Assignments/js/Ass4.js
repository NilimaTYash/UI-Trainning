
var numToTime = "";
function ConvertNumToTime(number)
 { 
  var hrs = Math.floor(number / 60);  
  var min = number % 60;
  numToTime =  hrs + ":" + min; 
  document.getElementById("demo").innerHTML = numToTime;
  
  
}
