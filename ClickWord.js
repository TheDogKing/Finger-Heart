function addEvent(func){
    var oldload=window.onload;
    if (typeof window.onload!='function') {
        window.onload=func;
    }
    else
    {
        window.onload=function(){
            ondload();
            func();
        }
    }
}
var i=0;
function showWords(){
    var body=document.getElementsByTagName('body')[0];
    body.onclick=function(e){
        var a = new Array("路见不平一声吼，吼完继续往前走。","咸鱼翻身，还是咸鱼。", "水能载舟，亦能煮粥！", "明月几时有，抬头自己瞅。", "天哪！我的衣服又瘦了。", "听君一席话，回家烤白薯。", "流氓不可怕，就怕流氓有文化。", "知识就像内裤，看不见但很重要。" ,"为了祖国下一代，再丑也得谈恋爱。", "穷玩车，富玩表，牛B加班敲电脑。", "英雄不问出路，流氓不看岁数。", "我们的目标：向钱看，向厚赚。", "帅有个屁用！到头来还不是被卒吃掉！");
        var removespan= document.getElementById('span'+(i-1));
        if (removespan) {
            body.removeChild(removespan);
        }
        var r=Math.ceil(0+Math.random()*255);
        var g=Math.ceil(0+Math.random()*255);
        var b=Math.ceil(0+Math.random()*255);
        var min=0;
        var max=a.length-1;
        var num=Math.ceil(min+Math.random()*max);
        console.log(a[num]);
        var span=document.createElement('span');
        var text=document.createTextNode(a[num]);
        span.appendChild(text);
        span.setAttribute('id','span'+i);
        span.setAttribute('readonly','readonly');
        var x=e.pageX;
        var y=e.pageY;
        span.style.left=x+'px';
        span.style.position='absolute';
        span.style.top=y-20+'px';
        span.style.color='rgb('+r+','+g+','+b+')';
        body.appendChild(span);
        i++;
    }
}
addEvent(showWords);