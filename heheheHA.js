import 'cirrus-ui';

const mb = document.getElementById("mb");
const mb2 = document.getElementById("mb2");

mb.addEventListener("click", () =>{

    let paint = false;

    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d')

 
    function start() {
        paint = true;
    }

    function stop() {
        paint = false;
        ctx.beginPath(); 
    }

    function draw(e) {
        if(!paint) return;

        ctx.lineWidth = 10;
        ctx.lineCap ="round";
        ctx.strokeStyle = "red"

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
        
    }

    canvas.addEventListener("mousedown", start)
    canvas.addEventListener("mouseup", stop)
    canvas.addEventListener("mousemove", draw)
    
});

mb2.addEventListener("click", () =>{

    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d')

    function getMousePosition(canvas, event) {
        let rect = canvas.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;
        console.log("Coordinate x: " + x, 
                    "Coordinate y: " + y);


                    ctx.strokeRect(x, y, 60, 60);
    }
  
    let canvasElem = document.querySelector("canvas"); 
      
    canvasElem.addEventListener("mousedown", function(e)
    {
        getMousePosition(canvasElem, e);
    });
    
});