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
 * 放大镜以及图片切换
 */
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var slider = document.getElementById('slider');
var bimg = document.getElementById('bimg');
var body1 = document.getElementById('body1');
var sma1 = document.getElementById('small1');
var sma2 = document.getElementById('small2');
var big = document.getElementById('big');
img1.onmouseover = function(){
    slider.style.display = 'block';
    img2.style.display = 'block';
}
img1.onmouseout = function(){
    slider.style.display = 'none';
    img2.style.display = 'none';
}
img1.onmousemove = function(e){
    var ev = e || event;
    var l = ev.clientX-body1.offsetLeft-slider.offsetWidth/2;
    var t = ev.clientY-body1.offsetTop-slider.offsetHeight/2;
    var maxw = img1.offsetWidth-slider.offsetWidth;
    var maxh = img1.offsetHeight-slider.offsetHeight;
    l = l>maxw?maxw:l<0?0:l;
    t = t>maxh?maxh:t<0?0:t;
    slider.style.left = l + 'px';
    slider.style.top = t + 'px';
    var bmaxw = img2.offsetWidth-bimg.offsetWidth;
    var bmaxh = img2.offsetHeight-bimg.offsetHeight;
    bimg.style.left = (l/maxw)*bmaxw + 'px';
    bimg.style.top = (t/maxh)*bmaxh + 'px';
}
sma1.onmouseover = function(){
    sma1.style.border = '2px solid #ff4d04';
    big.removeAttribute('src');
    big.setAttribute('src','img/pp0.jpeg');
    bimg.removeAttribute('src');
    bimg.setAttribute('src','img/pp0.jpeg');
}
sma1.onmouseout = function(){
    sma1.style.border = '2px solid white';
}
sma2.onmouseover = function(){
    sma2.style.border = '2px solid #ff4d04';
    big.removeAttribute('src');
    big.setAttribute('src','img/pp1.jpeg');
    bimg.removeAttribute('src');
    bimg.setAttribute('src','img/pp1.jpeg');
}
sma2.onmouseout = function(){
    sma2.style.border = '2px solid white';
}
/**
 * 化妆品净含量选择以及数量选择
 */
var mlp = document.getElementById('ml');
var ml;
var te1 = document.createTextNode('"150ml"');
var te2 = document.createTextNode('"200ml"');
var but1 = document.getElementById('but1');
var but2 = document.getElementById('but2');
but1.onclick = function(){
    but1.style.border = '2px solid #ff0754';
    but1.style.background = 'url(img/duigou.png) no-repeat 44px 13px';
    but2.style.border = 'none';
    but2.style.background = 'none';
    ml = mlp.firstChild;
    ml.parentNode.removeChild(ml);
    mlp.appendChild(te1);
}
but2.onclick = function(){
    but2.style.border = "2px solid #ff0754";
    but2.style.background = 'url(img/duigou.png) no-repeat 44px 13px';
    but1.style.background = 'none';
    but1.style.border = 'none';
    ml = mlp.firstChild;
    ml.parentNode.removeChild(ml);
    mlp.appendChild(te2);
}
var dec = document.getElementById('dec');
var dec1 = document.getElementById('dec1');
var add = document.getElementById('add');
var add1 = document.getElementById('add1');
var shul = document.getElementById('shuliang');
var shu;
dec.onclick = function(){
    shu = parseInt(shul.value);
    if(shu!=1){
        shul.removeAttribute('value');
        shu--;
        shul.setAttribute('value',shu);
        if(shu!=1){
            dec1.style.cursor = 'pointer';
            dec2.style.cursor = 'pointer';
        }
        else{
            dec1.style.cursor = 'not-allowed';
            dec2.style.cursor = 'pointer';
        }
    }
}
add.onclick = function(){
    shu = parseInt(shul.value);
    if(shu!=5){
        shul.removeAttribute('value');
        shu++;
        shul.setAttribute('value',shu);
        if(shu!=5){
            dec2.style.cursor = 'pointer';
            dec1.style.cursor = 'pointer';
        }
        else{
            dec2.style.cursor = 'not-allowed';
            dec1.style.cursor = 'pointer';
        }
    }
}
/**
 * 加入购物车后的蒙罩效果
 */
var sl = document.getElementById('sl');
var ad = document.getElementById('ad');
var bb1 = document.getElementById('bb1');
var bb2 = document.getElementById('bb2');
ad.onclick = function(){
    sl.style.display = 'block';
}
bb1.onclick = function(){
    sl.style.display = 'none';
}
bb2.onclick = function(){
    sl.style.display = 'none';
}
