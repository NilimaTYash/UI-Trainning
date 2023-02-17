var str = "";
function sortTheString(str) { 

    str  = str.split("").sort().join("");
    document.getElementById("demo").innerHTML = str;

         
}
