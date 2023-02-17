

function maxDiff() {
    var arr = [5,7,8,3,2,1,4];
	var max = -1;
    var temp;
	for (var i = 0; i < arr.length - 1; i++)
      {
		temp = Math.abs(arr[i] - arr[i + 1]);
		max = Math.max(max, temp);
	  }
      document.getElementById("demo").innerHTML = max;
}