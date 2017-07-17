console.log("script.js file loaded (appendChild exercise)");
var divIdNum = 0;
var divDim = 10;
function createNewDiv(){
    
   var newElement =  document.createElement("div");
    newElement.id = "MyNewElementId";
    newElement.id = "newDiv" + divIdNum;
    newElement.innerText = "Div<br>" + divIdNum;
    divIdNum++;
    newElement.className = "divStyle";
    newElement.style.width = divDim + "px";
    newElement.style.height = divDim + "px";
   // newElement.innerHTML = "blah";
    newElement.style.fontSize = (divDim/2) +"px"
    divDim = divDim + 20;
    //newElement.style.backgroundColor
    document.getElementById("wrapper").appendChild(newElement);
}