//declaration of variables
var c;

//main action
/* init(); */

//init function to initialize the game
/* function init(){
    drawCanvas();
} */


//draw canvas for bar model
function drawCanvas(){
    c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.rect(40,20,300,20);
    ctx.stroke();
    ctx.fillStyle = "#FF2022";
    ctx.fillRect(40,20,80,20);
    console.log('drawCanvas function');

}

/* drawRect.addEventListener('click', drawCanvas); */