console.log("read external script file");
 var inc=100;
function counter(){
    alert(inc);   
    if(inc % 2 == 0)
{
  document.getElementById("evenNums").innerHTML += inc +" ";
}
else
{
   document.getElementById("oddNums").innerHTML += inc +" ";
}
inc=inc+1;
}
