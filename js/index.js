const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const centreX = canvas.width / 2;
const centreY = canvas.height / 2;

function changeColor(){
canvas.style.backgroundColor = colorPicker.value;
}

const colorPicker = document.getElementById('color');
colorPicker.addEventListener('change', changeColor);

function rect (){
    ctx.fillRect(centreX-200/2, centreY-200/2, 200, 200);
}

function circle(){
    ctx.beginPath();
    ctx.arc(centreX, centreY, (canvas.width/2)-150, 0, Math.PI * 2, false);
    ctx.stroke();
}

function kite(){
    ctx.beginPath();
    ctx.moveTo(centreX, centreY-150);
    ctx.lineTo(centreX+70, centreY);
    ctx.lineTo(centreX, centreY+150);
    ctx.lineTo(centreX-70, centreY);
    ctx.closePath();
    ctx.stroke();
}

function trampezium(){
    ctx.beginPath();
    ctx.moveTo(centreX-150, centreY-150);
    ctx.lineTo(centreX+150, centreY-150);
    ctx.lineTo(centreX+250, centreY+150);
    ctx.lineTo(centreX-250, centreY+150);
    ctx.closePath();
    ctx.stroke();
}

function parallelogram(){
    ctx.beginPath();
    ctx.moveTo(centreX-100, centreY-150);
    ctx.lineTo(centreX+200, centreY-150);
    ctx.lineTo(centreX+100, centreY+150);
    ctx.lineTo(centreX-200, centreY+150);
    ctx.closePath();
    ctx.stroke();
}

function triangle(){
    ctx.beginPath();
    ctx.moveTo(centreX, centreY-150);
    ctx.lineTo(centreX+200, centreY+150);
    ctx.lineTo(centreX-200, centreY+150);
    ctx.closePath();
    ctx.stroke();
}

function pentagon(){
    ctx.beginPath();
    ctx.moveTo(centreX, centreY-150);
    ctx.lineTo(centreX+100, centreY-50);
    ctx.lineTo(centreX+100, centreY+150);
    ctx.lineTo(centreX-100, centreY+150);
    ctx.lineTo(centreX-100, centreY-50);
    ctx.closePath();
    ctx.stroke();
}

function hexagon(){
    ctx.beginPath();
    ctx.moveTo(centreX-100, centreY-150);
    ctx.lineTo(centreX+100, centreY-150);
    ctx.lineTo(centreX+200, centreY);
    ctx.lineTo(centreX+100, centreY+150);
    ctx.lineTo(centreX-100, centreY+150);
    ctx.lineTo(centreX-200, centreY);
    ctx.closePath();
    ctx.stroke();
}

function heptagon(){
    ctx.beginPath();
    ctx.moveTo(centreX, centreY-150);
    ctx.lineTo(centreX+100, centreY-50);
    ctx.lineTo(centreX+100, centreY+100);
    ctx.lineTo(centreX+50, centreY+150);
    ctx.lineTo(centreX-50, centreY+150);
    ctx.lineTo(centreX-100, centreY+100);
    ctx.lineTo(centreX-100, centreY-50);
    ctx.closePath();
    ctx.stroke();
}

function octagon(){
    ctx.beginPath();
    ctx.moveTo(centreX-100, centreY-150);
    ctx.lineTo(centreX+100, centreY-150);
    ctx.lineTo(centreX+200, centreY-50);
    ctx.lineTo(centreX+200, centreY+50);
    ctx.lineTo(centreX+100, centreY+150);
    ctx.lineTo(centreX-100, centreY+150);
    ctx.lineTo(centreX-200, centreY+50);
    ctx.lineTo(centreX-200, centreY-50);
    ctx.closePath();
    ctx.stroke();
}

const shape = document.getElementById('shape');
shape.addEventListener('change', update);
function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let shapes = shape.value;
    if(shapes === ''){
        alert('Pls Select A Shape To Draw')
    }else if(shapes === 'rect'){
        rect();
    }
    else if(shapes === 'circle'){
        circle();
    }
    else if(shapes === 'kite'){
        kite();
    }
    else if(shapes === 'trampezium'){
        trampezium();
    }
    else if(shapes === 'parallelogram'){
        parallelogram();
    }
    else if(shapes === 'triangle'){
        triangle();
    }
    else if (shapes === 'pentagon'){
        pentagon();
    }
    else if(shapes === 'hexagon'){
        hexagon();
    }
    else if(shapes === 'heptagon'){
        heptagon();
    }
    else if(shapes === 'octagon'){
        octagon();
    }
}

    // ctx.beginPath();
    // ctx.moveTo(centreX, centreY-150);
    // ctx.lineTo(centreX+100, centreY-50);
    // ctx.lineTo(centreX+100, centreY+100);
    // ctx.lineTo(centreX+50, centreY+150);
    // ctx.lineTo(centreX-50, centreY+150);
    // ctx.lineTo(centreX-100, centreY+100);
    // ctx.lineTo(centreX-100, centreY-50);
    // ctx.closePath();
    // ctx.stroke();