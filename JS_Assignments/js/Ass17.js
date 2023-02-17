

function replaceNumberWithOtherNum() {
    var arr = [5,7,8,3,2,1,4,3,1,3,2,3,3];
    previousVal = 3;
    newVal = 8;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === previousVal) {
        arr[i] = newVal;
      }
    }
    document.getElementById("demo").innerHTML = "["+arr+"]";
  }