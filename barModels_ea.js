//declaration of variables
var draw;


//main action



//draw canvas for bar model
function drawCanvas(){
    draw = document.getElementById("barModelCanvas");
    var ctx = draw.getContext("2d");
    ctx.beginPath();
    ctx.rect(40,20,100,20);
    ctx.stroke();
    
}

drawBarModelButton.addEventListener('click', drawCanvas);
