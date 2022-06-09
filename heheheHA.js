
window.addEventListener('load', () =>{

    let paint = false;
    let butn = false;
    

    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d')
    const mb = document.getElementById('mb')

    mb.addEventListener("click")
    

    function bn(e) {
        butn = true

        if (butn = true) { 
            events()
        }
    }

    function start(e) {
        paint = true;
    }

    function stop(e) {
        paint = false;
        ctx.beginPath(); 
    }

    function draw(e) {

        ctx.lineWidth = 10;
        ctx.lineCap ="round";
        ctx.strokeStyle = "red"

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
        
    }

    function events(e) {

        canvas.addEventListener("mousedown",start)
        canvas.addEventListener("mouseup", stop)
        canvas.addEventListener("mousemove", draw)

    }

});