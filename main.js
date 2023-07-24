canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var lastPositionX, lastPositionY;
var color="black";
var largura=1;
canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(e){
    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(e){
    mouseEvent="mouseUP";
}
canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e){
    PosicaoX=e.clientX-canvas.offsetLeft;
    PosicaoY=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=largura;
        ctx.moveTo(lastPositionX, lastPositionY);
        ctx.stroke();
        console.log(lastPositionX+","+lastPositionY)
    }
    lastPositionX=PosicaoX;
     lastPositionY=PosicaoY;
}