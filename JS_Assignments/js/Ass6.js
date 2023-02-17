
var pattern = /a...b/;
function spacechek(str)
 {
    
    document.getElementById("demo").innerHTML = pattern.test(str);;
 }