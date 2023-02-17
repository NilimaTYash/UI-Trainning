function RepeatLast3Char(str, numofCopies)
{
  if (str.length >= 3) {
    str = str.substring(str.length - 3);
    document.getElementById("demo").innerHTML =  str.repeat(numofCopies);
  }
  else
    return false;
}