window.addEventListener("load", eventWindowLoaded, false);

var Debugger = function () {};
Debugger.log = function(message){
    try {
        console.log(message);
    } catch (exception) {
        return;
    }
}

CanvasRenderingContext2D.prototype.roundRect = 

function(x, y, width, height, radius, fill, stroke) {
    if (typeof stroke == "undefined" ) {
        stroke = true;
    }
    if (typeof radius === "undefined") {
        radius = 5;
    }
    this.beginPath();
    this.moveTo(x + radius, y);
    this.lineTo(x + width - radius, y);
    this.quadraticCurveTo(x + width, y, x + width, y + radius);
    this.lineTo(x + width, y + height - radius);
    this.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    this.lineTo(x + radius, y + height);
    this.quadraticCurveTo(x, y + height, x, y + height - radius);
    this.lineTo(x, y + radius);
    this.quadraticCurveTo(x, y, x + radius, y);
    this.closePath();
    if (stroke) {
        this.stroke();
    }
    if (fill) {
        this.fill();
    }        
}

var theCanvas;
var master; 
const width = 500;
const hight = 500;

function eventWindowLoaded() { 
    theCanvas = document.getElementById("canvasTwo");
    master = document.getElementById("master"); 
    canvasTwoApp();
}

function canvasSupport(theCanvas){
    if (!theCanvas || !theCanvas.getContext) {
        return true;
    } 
    return false;
}

var pointsX = [];
var pointsY = [];

function myClick(e) {
    mouseX = window.event.clientX;
    mouseY = window.event.clientY;
    
    //  esta parte se modifica con el fin de que no se
    // pase el mouse de la zona de dibujo
    if (mouseY <= hight && mouseX <= width) {
        pointsX.push(mouseX);
        pointsY.push(mouseY);
    }
    canvasTwoApp();
};


function canvasTwoApp() {
    
    if (canvasSupport(theCanvas)) {
        return;
    }
    var context = theCanvas.getContext("2d");

    function drawScreen() {
        context.lineWidth = 2.6;
 
        context.fillStyle = '#ffe6e6';
        context.fillRect(0,0,500,500);

        // dibujando los puntos
        context.fillStyle = 'red';
        for (let i = 0; i < pointsX.length; ++i) { 
            context.roundRect(pointsX[i], pointsY[i], 10, 10, 5, true, false);
        } 
        
        // dibujando el cuadrado maestro
        context.beginPath(); 
        context.fillStyle = '#3333cc';
        context.strokeRect(15, 15, width - 30, hight - 30);
        context.closePath();

        // dibujano las líneas de corte x
        context.strokeStyle = '#adad85';
        context.beginPath();
        var xline = 15
        for (let i = 0; i < 13; ++i) {
            context.moveTo(xline + (i * 42.72), 15);
            context.lineTo(xline + (i * 42.72), hight - 15);
            context.stroke();
        }

        var yline = 15
        for (let i = 0; i < 15; ++i) {
            context.moveTo(15 , yline + (i * 36.15));
            context.lineTo(width - 15, yline + (i * 36.15));
            context.stroke();
        }
        context.closePath();

        // dibujar lineas que unan los puntos 
        context.strokeStyle = '#ff6666';
        context.beginPath();
        context.lineCap = 'round';
        for (let i = 0; i < pointsY.length; ++i) {
            if (i == 0) {
                context.moveTo(pointsX[i], pointsY[i]);
            } else {
                context.lineTo(pointsX[i], pointsY[i]);
            }
            context.stroke();
        }  
        context.closePath(); 
    }
    drawScreen();
    if (pointsY.length == 5) {
        for(let i = 0; i < pointsX.length; ++i) {
            console.log(`${pointsX[i]},${pointsY[i]}`)
        }
    }
    
}