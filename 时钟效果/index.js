
window.onload=function(){
    /**
     * 时钟主程序
     */
Oclick=function(){
    /**
     * 
     * @param {传入需要修改的DOM元素组} doms 
     */
    var init=function(doms){
        (typeof doms.line_min=='undefined')?'':drawLines(doms.line_min,60,90);
        (typeof doms.line_hour=='undefined')?'':drawLines(doms.line_hour,12,85);
        (typeof doms.numbers=='undefined')?'':drawNumbers(doms.numbers,60,90);
        move(doms);
    };
    /**
     * 
     * @param {dom元素} container 
     * @param {绘制的总数} total 
     * @param {X轴偏移量} translateX 
     */
    var drawLines=function(dom,total,translateX){
        var gap=360/total;
        var strHtml="";
        for(var i =0 ; i<total;i++){
            var newNode = document.createElement('li');
            newNode.style.transform='rotate('+(i*gap)+'deg) translate('+translateX+'px,-50%)';
            dom.appendChild(newNode);
        }
    };
    /**
     * 
     * @param {dom元素} wrap 
     */
    var drawNumbers=function(dom){
            var radius=window.getComputedStyle(dom).width.replace('px','')/2;
            var strHtml="";
            for(var i = 1 ;i<=12 ;i++){
                var myAngle=(i-3)/6*Math.PI;
                var myX=radius+Math.cos(myAngle)*radius;
                    myY=radius*(1+Math.sin(myAngle));
                var newNode = document.createElement('li');
                newNode.style.left=myX+'px';
                newNode.style.top=myY+'px';
                newNode.innerHTML=i;       
                dom.appendChild(newNode);

            }
    };
    /**
     * 
     * @param {指针的dom元素} doms 
     */
    var move=function(doms){
        var domHour=doms.hour,
            domMin=doms.minutes,
            domSec=doms.secondes;
        function showtime(){
                var now=new Date(),
                    hour=now.getHours(),
                    min=now.getMinutes(),
                    sec=now.getSeconds();
                var secAngle=sec*6-90,
                    minAngle=min*6+sec*0.1-90,
                    hourAngle=hour*30+min*0.5-90;
                rotate(domSec,secAngle);
                rotate(domMin,minAngle);
                rotate(domHour,hourAngle);
                
            }
        setInterval(showtime,1000);
        showtime();
    };
    var rotate=function(dom, degrees) {
        css(dom,{
    '-webkit-transform' : 'rotate('+degrees+'deg)',
        '-moz-transform' : 'rotate('+degrees+'deg)',  
        '-ms-transform' : 'rotate('+degrees+'deg)',  
        '-o-transform' : 'rotate('+degrees+'deg)',  
            'transform' : 'rotate('+degrees+'deg)',  
                'zoom' : 1

        });
    };
    var css=function(dom,jsondata){
        for(var i in jsondata){
            dom.style[i]=jsondata[i];
        }
    };

    this.init=init;
};
/**
 * 获取dom元素
 */
var doms={
    line_min:document.getElementsByClassName("line-min")[0],
    line_hour:document.getElementsByClassName("line-hour")[0],
    numbers:document.getElementsByClassName("numbers")[0],
    hour:document.getElementsByClassName("hour")[0],
    minutes:document.getElementsByClassName("min")[0],
    secondes:document.getElementsByClassName("sec")[0],
};
var oclick=new Oclick();
oclick.init(doms);
};