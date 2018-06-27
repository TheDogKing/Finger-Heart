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
var rec=[];
var i=0;
function create()
{
    if (circular.length < 2)
        {
           circular.push({
                x:200,
                y:200,
                radius:100*(Math.SQRT2),
                speed:5*(Math.SQRT2),
                color:'red',
            },{
                x:400,
                y:200,
                radius:100*(Math.SQRT2),
                speed:5*(Math.SQRT2),
                color:'red',
            })
        }
    if (rec.length<4) 
        {
            rec.push
            ({
                    x:300,
                    y:100,
                    speed:10,
                    color:'red'
                },{
                    x:500,
                    y:300,
                    speed:10,
                    color:'red'
                },{
                    x:300,
                    y:500,
                    speed:10,
                    color:'red'
                },{
                    x:100,
                    y:300,
                    speed:10,
                    color:'red'
            })
        };
}
    var ok=true;
function update(){
    var c0=circular[0];
    var c1=circular[1];
    var rec0=rec[0];
    var rec1=rec[1];
    var rec2=rec[2];
    var rec3=rec[3];
    if(i%10==0&&i>0)
    {
        i=parseInt(i)-parseInt(10);
        var tf=ok;
        console.log(tf);
        ok=!tf;
        console.log(ok);
    }
    if (ok) 
    {
        c0.radius-=c0.speed;
        c0.x+=c0.speed/(Math.SQRT2);
        c0.y+=c0.speed/(Math.SQRT2);

        c1.radius-=c0.speed;
        c1.x-=c0.speed/(Math.SQRT2);
        c1.y+=c0.speed/(Math.SQRT2);

        rec0.y+=rec0.speed;
        rec1.x-=rec1.speed;
        rec2.y-=rec2.speed;
        rec3.x+=rec3.speed;
    }
    else
    {
        c0.radius+=c0.speed;
        c0.x-=c0.speed/(Math.SQRT2);
        c0.y-=c0.speed/(Math.SQRT2);

        c1.radius+=c0.speed;
        c1.x+=c0.speed/(Math.SQRT2);
        c1.y-=c0.speed/(Math.SQRT2);

        rec0.y-=rec0.speed;
        rec1.x+=rec1.speed;
        rec2.y+=rec2.speed;
        rec3.x-=rec3.speed;        
    }
    i++;
}

function kill(){
    var c=document.getElementById('canvas');
    var ctx=c.getContext("2d");
    ctx.clearRect(0,0,600,600);
}

function drawing(){
    var c=document.getElementById('canvas');
    var ctx=c.getContext("2d");
    ctx.fillStyle='red';
    var rec0=rec[0];
    var rec1=rec[1];
    var rec2=rec[2];
    var rec3=rec[3];
    ctx.beginPath();
    ctx.moveTo(rec0.x,rec0.y);
    ctx.lineTo(rec1.x,rec1.y);
    ctx.lineTo(rec2.x,rec2.y);
    ctx.lineTo(rec3.x,rec3.y);
    ctx.lineTo(rec0.x,rec0.y);
    ctx.fill();
    ctx.closePath();

    for (var i in circular) {
        if (i<2) {
            var p=circular[i];
            ctx.beginPath();
            ctx.arc(p.x,p.y,p.radius,0,2*Math.PI);
            ctx.closePath();
            ctx.fillStyle = p.color;
            ctx.fill();
        }
    }
};
setInterval(loop,150);
