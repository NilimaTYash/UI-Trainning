

function accuranceofSameElement() {
    var arr = [5,7,8,3,2,1,4,3,1,3,2,3,3];
    var ctr = [],
      ans = 0;
  
    for(var i = 0; i < 10; i++) {
      ctr.push(0);
    }
    for(var i = 0; i < arr.length; i++) {
      ctr[arr[i] - 1]++;
      if(ctr[arr[i] - 1] > ctr[ans]) {
        ans = arr[i] - 1;
      }
    }
    document.getElementById("demo").innerHTML = ans + 1;  
  }