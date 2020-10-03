// contiene el contexto que se utiliza para dibujar en pantall
let context;
// el contexto es valido en el navegador
let canvasIsSupported = false;

const NUMBERS_OF_FIGURES = 6;
const BORDER = 5;
const SCREEN_WIDTH = document.getElementById('fluent_bar').clientWidth - BORDER;
const SCREEN_HEIGHT = document.getElementById('fluent_bar').clientHeight - BORDER;

function draw() {
    // figura 1
    context.beginPath();
    context.fillStyle = '#beebe9'; 
    context.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    context.fillStyle = '#f8b195'; 
    context.strokeStyle = '#f8b195'; 
    context.moveTo(BORDER, BORDER);
    context.lineTo(BORDER, SCREEN_HEIGHT - 2 * BORDER);
    context.lineTo(SCREEN_WIDTH / NUMBERS_OF_FIGURES - 2 * BORDER, SCREEN_HEIGHT - 2 * BORDER);
    context.fill();
    context.closePath();
    context.stroke(); 
    context.beginPath();
    context.fillStyle = '#f67280'; 
    context.strokeStyle = '#f67280'; 
    context.arc(SCREEN_WIDTH / NUMBERS_OF_FIGURES - 2 * BORDER, BORDER, SCREEN_WIDTH / (NUMBERS_OF_FIGURES * 2), 0, Math.PI, false);
    context.fill();
    context.closePath();
    context.stroke(); 
    context.beginPath();
    context.fillStyle = '#c06c84'; 
    context.strokeStyle = '#c06c84'; 
    context.moveTo(SCREEN_WIDTH / NUMBERS_OF_FIGURES * 1.15, SCREEN_HEIGHT - 2 * BORDER);
    context.lineTo(SCREEN_WIDTH / NUMBERS_OF_FIGURES * 1.15 + SCREEN_HEIGHT, SCREEN_HEIGHT - 2 * BORDER);
    context.lineTo(SCREEN_WIDTH / NUMBERS_OF_FIGURES * 1.15 + SCREEN_HEIGHT / 2, BORDER);
    context.fill();
    context.closePath();
    context.stroke(); 
    context.beginPath();
    context.fillStyle = '#6c567b'; 
    context.strokeStyle = '#6c567b'; 
    context.moveTo(SCREEN_WIDTH / NUMBERS_OF_FIGURES * 1.2 + SCREEN_HEIGHT, BORDER);
    context.lineTo(SCREEN_WIDTH / NUMBERS_OF_FIGURES * 1.2 + SCREEN_HEIGHT, SCREEN_HEIGHT - 2 * BORDER); 
    context.arc(SCREEN_WIDTH / NUMBERS_OF_FIGURES * 1.2 + SCREEN_HEIGHT, (SCREEN_HEIGHT - 2 * BORDER) / 2,  (SCREEN_HEIGHT - 2 * BORDER) / 2, 1.5 * Math.PI, 0.5 * Math.PI, false);
    context.fill();
    context.closePath();
    context.stroke();  
    context.beginPath(); 
    context.fillStyle = '#d45079';  
    context.fillRect(SCREEN_WIDTH / NUMBERS_OF_FIGURES * 1.2 + SCREEN_HEIGHT * 1.5, BORDER, SCREEN_HEIGHT - 2 * BORDER, SCREEN_HEIGHT - 2 * BORDER);
    context.closePath();
    context.stroke();
    context.beginPath();
    context.fillStyle = '#745c97'; 
    context.strokeStyle = '#745c97'; 
    context.moveTo(SCREEN_WIDTH / NUMBERS_OF_FIGURES * 1.2 + SCREEN_HEIGHT * 2.45, (SCREEN_HEIGHT - 2 * BORDER) / 2);
    context.lineTo(SCREEN_WIDTH / NUMBERS_OF_FIGURES * 1.2 + SCREEN_HEIGHT * 3.5, BORDER);
    context.lineTo(SCREEN_WIDTH / NUMBERS_OF_FIGURES * 1.2 + SCREEN_HEIGHT * 3.5, SCREEN_HEIGHT - BORDER);
    context.fill();
    context.closePath();
    context.stroke();
    context.beginPath();
    context.fillStyle = '#f6ecbf'; 
    context.strokeStyle = '#f6ecbf'; 
    context.arc(SCREEN_WIDTH / NUMBERS_OF_FIGURES * 1.2 + SCREEN_HEIGHT * 4.0, SCREEN_HEIGHT / 2, (SCREEN_HEIGHT - 2 * BORDER) / 2, 0, 2 * Math.PI, false);
    context.fill();
    context.closePath();
    context.stroke();
    context.beginPath();
    context.fillStyle = '#ffbbcc'; 
    context.strokeStyle = '#ffbbcc'; 
    context.moveTo(SCREEN_WIDTH / NUMBERS_OF_FIGURES * 1.2 + SCREEN_HEIGHT * 4.5, BORDER);
    context.lineTo(SCREEN_WIDTH / NUMBERS_OF_FIGURES * 1.2 + SCREEN_HEIGHT * 4.5, SCREEN_HEIGHT - BORDER);
    context.lineTo(SCREEN_WIDTH / NUMBERS_OF_FIGURES * 1.2 + SCREEN_HEIGHT * 5.3, SCREEN_HEIGHT - BORDER);
    context.fill();
    context.closePath();
    context.stroke(); 
    context.beginPath();
    context.fillStyle = '#fcf9ea'; 
    context.fillRect(SCREEN_WIDTH / NUMBERS_OF_FIGURES * 1.2 + SCREEN_HEIGHT * 5.35, BORDER, SCREEN_HEIGHT / 1.5, SCREEN_HEIGHT - 2 *BORDER);
    context.closePath();
    context.stroke();
}

window.addEventListener("load", function(event) {
    context = document.getElementById('fluent_bar').getContext("2d");
    if (context) {
        canvasSupport = true; 
        draw();
        return;
    }
    document.getElementById('fluent_bar').style.background('white');
}, false);

