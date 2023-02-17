
function HalfString (str) {
    if (str.length % 2 == 0) {
        document.getElementById("demo").innerHTML = str.slice(0, str.length / 2);
    }else{

        document.getElementById("demo").innerHTML = "String is not of even legth"
    }
    
  }