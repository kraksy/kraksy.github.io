window.addEventListener('load', () =>{

    let paint = false;
    let testBool = false;
    let end = false;

    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d')
    const mb = document.getElementById('mb')

    mb.addEventListener("click", bn)


    function bn(e) {
        testBool = !testBool;

        if (testBool = true) {
            events()
        }
        if (testBool = false) {
            end = true;
        }

        console.log(testBool)
        
    }

    function start(e) {
        paint = true;
    }

    function stop(e) {
        paint = false;
        ctx.beginPath(); 
    }

    function draw(e) {
        if(end = true) {
            paint = false;
        }

        if(!paint) return;

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

