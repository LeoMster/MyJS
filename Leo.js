/**
 * 顶部悬浮
 */
window.onload = function(){
    var head = document.getElementsByClassName('inhead')[0];
    window.onscroll = function(){
        var st = document.documentElement.scrollTop || document.body.scrollTop;
        if(st > 180){
            head.style.position = 'fixed';
        }
        else{
            head.style.position = 'relative';
        }
    }
}
/**
 * 话费充值额数选择
 */
var select = document.getElementById('select');
select.onclick = function(){
    var value = select.value;
    var text = document.createTextNode(value);
    var shuzi = document.getElementById('shuzi').firstChild;
    shuzi.parentNode.replaceChild(text,shuzi);
}
/**
 * 轮播图
 */
var body21 = document.getElementById('body21');
var le = document.getElementById('le');
var ri = document.getElementById('ri');
var list = document.getElementById('nav').children;
var box = document.getElementById('box');
var index = 1;
var timer;
var moving = false;
ri.onclick = next;
le.onclick = prev;
body21.onmouseover = function(){
    animate(le,{opacity:50});
    animate(ri,{opacity:50});
    clearInterval(timer);
}
body21.onmouseout = function(){
    animate(le,{opacity:0});
    animate(ri,{opacity:0});
    timer = setInterval(next,3000);
}
for(var i = 0;i<list.length;i++){
    list[i].index = i;
    list[i].onclick = function(){
        index = this.index+1;
        navmove();
        animate(box,{left:-800*index});
    }
}
function next(){
    if(moving){
        return;
    }
    moving = true;
    index++;
    navmove();
    animate(box,{left:-800*index},function(){
        if(index == 7){
            box.style.left = '-800px';
            index = 1;
        }
        moving = false;
    });
}
function prev(){
    if(moving){
        return;
    }
    moving = true;
    index--;
    navmove();
    animate(box,{left:-800*index},function(){
        if(index == 0){
            box.style.left = '-4800px';
            index = 6;
        }
        moving = false;
    });
}
function navmove(){
    for(var i = 0;i<list.length;i++){
        list[i].className = '';
        if(index > 6){
            list[0].className = 'active';
        }
        else if(index <= 0){
            list[4].className = 'active';
        }else{
            list[index-1].className = 'active';
        }
    }
}
timer = setInterval(next,3000);
/**
 * 右侧滚动条
 */
var inbody32 = document.getElementById('inbody32');
var lu = document.getElementById('lu');
var lu2 = document.getElementById('lu2');
var timer2;
lu2.innerHTML = lu.innerHTML;
function shang(){
    if(lu2.offsetTop - inbody32.scrollTop <= 0){
        inbody32.scrollTop -= lu.offsetHeight;
    }
    else{
        inbody32.scrollTop++;
    }
}
inbody32.onmouseover = function(){
    clearInterval(timer2);
}
inbody32.onmouseout = function(){
    timer2 = setInterval(shang,30);
}
timer2 = setInterval(shang,30);
/**
 * 右侧弹窗
 */
var i5 = document.getElementById('i5');
var i4 = document.getElementById('i4');
var i3 = document.getElementById('i3');
var i2 = document.getElementById('i2');
var i1 = document.getElementById('i1');
var timer1;
var timer5;
function move5(){
    if(parseInt(i5.style.marginLeft)>=4){
        i5.style.marginLeft = parseInt(i5.style.marginLeft)-4+'px';
    }
    else{
        clearInterval(timer5);
    }
}
function move1(){
    if(parseInt(i2.style.marginLeft)>=4){
        i1.style.marginLeft = parseInt(i1.style.marginLeft)-4+'px';
        i2.style.marginLeft = parseInt(i2.style.marginLeft)-4+'px';
    }
    else{
        clearInterval(timer1);
    }
}
i5.onmouseover = function(){
    timer5 = setInterval(move5,7);
}
i5.onmouseout = function(){
    i5.style.marginLeft = '84px';
    clearInterval(timer5);
}
i4.onmouseover = function(){
    i4.style.marginLeft = '0px';
}
i4.onmouseout = function(){
    i4.style.marginLeft = '84px';
}
i3.onmouseover = function(){
    i3.style.marginLeft = '0px';
}
i3.onmouseout = function(){
    i3.style.marginLeft = '84px';
}
i2.onmouseover = function(){
    timer1 = setInterval(move1,7);
}
i2.onmouseout = function(){
    i2.style.marginLeft = '84px';
    i1.style.marginLeft = '84px';
    clearInterval(timer1);
}
i1.onmouseover = function(){
    timer1 = setInterval(move1,7);
}
i1.onmouseout = function(){
    i2.style.marginLeft = '84px';
    i1.style.marginLeft = '84px';
    clearInterval(timer1);
}

