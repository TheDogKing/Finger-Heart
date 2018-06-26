var height=window.innerHeight;
var box= document.getElementById('box');
box.style.height=height+'px';
function loop(){
    create();
    update();
    kill();
    drawing();
};
var circular=[];
function create(){
if (circular.length < 2)
    {
       circular.push({
            x:200,
            y:200,
            radius:100*(Math.SQRT2),
            speed:10,
            color:'red',
        },{
            x:400,
            y:200,
            radius:100*(Math.SQRT2),
            speed:10,
            color:'red',
        })
    }
};

function update(){
    var c0=circular[0];
    var c1=circular[1];
    if (c0.x!='400' && c1.x=='400') {
        c0.x=c0.x+10;
        c0.y=c0.y+10;
    }
    if (c0.x=='400' && c1.x!='200') {
        c1.x=c1.x-10;
        c1.y=c1.y+10;
    }
    if (c0.x!='200' && c1.x=='200') {
        c0.x=c0.x-10;
        c0.y=c0.y-10;
    }
    if (c0.x=='200' && c1.x!='400') {
        c1.x=c1.x+10;
        c1.y=c1.y-10;
    }
}

function kill(){
    var c=document.getElementById('canvas');
    var ctx=c.getContext("2d");
    ctx.clearRect(0,0,800,800);
}

function drawing(){
    var c=document.getElementById('canvas');
    var ctx=c.getContext("2d");
    ctx.fillStyle='red'; 
    ctx.moveTo(300,100);
    ctx.lineTo(500,300);
    ctx.lineTo(300,500);
    ctx.lineTo(100,300);
    ctx.lineTo(300,100);
    ctx.fill();

    for (var i in circular) {
    var p=circular[i];
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.radius,0,2*Math.PI);
    ctx.closePath();
    ctx.fillStyle = p.color;
    ctx.fill();
    }
};
setInterval(loop,40);