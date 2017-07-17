console.log("script.js file loaded (sp, this is the mcr something pretty, rev 0.1 file)");
var mcr_sp = {};
mcr_sp.myName = "Stefan";
//console.log(myName);

mcr_sp.welcome = function(){
    console.log("Welcome " + mcr_sp.myName);
  
}
mcr_sp.zoomText = function(id, txtContent, speed, delay, minSize, maxSize, currentSize, direction){
    
    htmlElement = document.getElementById(id);
    console.log(htmlElement);
    var direction = "fadeOut";
    if(direction == "fadeOut"){
        if (currentSize>1){
        currentSize--;
        setTimeout("mcr_sp.zoomText('fadeOut')", speed);
        
        }else {
        setTimeout("mcr_sp.zoomText('fadeIn')", speed)
        }
    }
};