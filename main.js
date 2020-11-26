var mouseEvent="empty";

var color="black";
var linewidth=2;
var last_x,last_y;

var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");

canvas.addEventListener("mousedown", mymousedown);
function mymousedown(){
    mouseEvent="mousedown";
}

canvas.addEventListener("mouseup", mymouseup);
function mymouseup(){
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e){
var currentx=e.clientX-canvas.offsetLeft;
var currenty=e.clientY-canvas.offsetTop;

if(mouseEvent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=linewidth;
    
    console.log("Last position of X and Y coordinates=");
    console.log("x="+last_x+"y="+last_y);
    ctx.moveTo(last_x,last_y);

    console.log("Current position of X and Y coordinates=");
    console.log("x="+currentx+"y="+currenty);
    ctx.lineTo(currentx,currenty);
    ctx.stroke();
}
last_x=currentx;
last_y=currenty;
}
var width=screen.width;
newwidth=screen.width-300;
newheight=screen.height-300;
if (width<992){
document.getElementById("myCanvas").width=newwidth;
document.getElementById("myCanvas").height=newheight;
document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",mytouchstart);
function mytouchstart(e){
last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",mytouchmove);
function mytouchmove(e){
console.log("mytouchMove");
currentx=e.touches[0].clientX-canvas.offsetLeft;
currenty=e.touches[0].clientY-canvas.offsetTop;
ctx.beginPath();
ctx.strokeStyle=color;

console.log("Last position of X and Y coordinates");
console.log("x="+last_position_of_x+"y="+last_position_of_y);
ctx.moveTo(last_position_of_x,last_position_of_y);
console.log("Current position of X and Y coordinates");
console.log("x="+currentx+"y="+currenty);
ctx.lineTo(currentx,currenty);
ctx.stroke();
last_position_of_x=currentx;
last_position_of_y=currenty;
}
