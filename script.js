var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

let coord_x = {
    x: 0,
    y: 0
}
let coord_y = {
    x: canvas.offsetWidth,
    y: 0
}
let step = 10;
let round = 0;
var drawLines = () => {
    for (let i = step; i < canvas.offsetHeight - step; i = i + step) {
        round++;
        coord_x.y = i;
        coord_y.y = i
        drawLine(coord_x, coord_y)
    }

    alert(round)

}

let drawLine = (x, y) => {
   // ctx.beginPath();
    context.translate(0.5, 0.5)
    ctx.moveTo(x.x, x.y);
    ctx.lineTo(y.x, y.y);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "orange";
    ctx.stroke();

}
// drawLines();

drawLine({x:0,y:10},{x:canvas.offsetWidth,y:10})

