
window.addEventListener('load', () =>{

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