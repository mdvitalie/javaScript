console.log("read external script file");

function calculateNums(){
    
   var a = parseFloat(document.getElementById("num1").value);
   var b = parseFloat(document.getElementById("num2").value);
   var c = document.getElementById("mathOperation").value;
   //var result = document.getElementById("result").value;
  
  if(c == "add"){
    result = a+b;
    document.getElementById("result").value = result;
  }
   else if (c=="sub") {
       result = a-b;
    document.getElementById("result").value = result;   
   }
    
   else if (c=="mul") {
       result = a*b;
    document.getElementById("result").value = result;   
   } 
    else{
      result = a/b;
    document.getElementById("result").value = result;     
    }
}