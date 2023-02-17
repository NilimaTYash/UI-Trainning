
var regex =  /[^aeiou]/g;
var vowelCnt = "";
function CountVowels(str)
{ 

    vowelCnt =  str.replace(regex, "").length; 
    document.getElementById("demo").innerHTML = vowelCnt;


}
