

function MaxDiffofInteger(arr) {
    var arr = [5,7,8,3,2,1,4];
    let max_diff = 0;

    for(let i=0;i<arr.length;i++)
       {
        for(let j=0; j!=i && j<arr.length; j++)
        {
            const diff = Math.abs(arr[i]-arr[j]);
            max_diff = Math.max(max_diff, diff);
        }
    }
    document.getElementById("demo").innerHTML = max_diff;
}