
function SumOfDiffrences() {
    var arr = [5,7,8,3,2,1,4,3,1,3,2,3,3];
	var sum = 0;
	for (var i = 1; i < arr.length; i++) {
		sum += Math.abs(arr[i] - arr[i - 1]);
	}
	document.getElementById("demo").innerHTML = sum;
}