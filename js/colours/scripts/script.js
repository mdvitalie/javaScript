console.log("read external script file");
var red= 10;
var color;;

function myColorX(){    
    if(red<255){
        color= "rgb("+ red +", 0, 0)";    
        document.getElementById("colourDiv").style.backgroundColor = color;
        }
    red=red+10;
}