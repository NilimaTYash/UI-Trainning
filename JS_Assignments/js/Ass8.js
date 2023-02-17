

function count_P_T(str)
{ var conditionCheck = "";
  var cnt_p = str.replace(/[^p]/g, "").length;
  var cnt_t = str.replace(/[^t]/g, "").length;

  if(cnt_p === cnt_t){
    conditionCheck =true;
  }else{
    conditionCheck =false;
  }
  document.getElementById("demo").innerHTML = conditionCheck;
         
}