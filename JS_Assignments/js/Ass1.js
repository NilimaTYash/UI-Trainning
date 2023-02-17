var newString = "";
function reverseString(str) {
    
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    document.getElementById("demo").innerHTML = newString;
}

