/**
 * 对currentstyle和getcomputedstyle 进行兼容处理，能在所有浏览器下运行
 * @param {对象} obj 
 * @param {属性} name 
 */
function getStyle(obj, name)
{
    'use strict';
	if(obj.currentStyle)
	{
		return obj.currentStyle[name];
	}
	else
	{
		return getComputedStyle(obj, false)[name];
	}
}

function getByClass(objParent,strClass){
	var arrEle=objParent.getElementsByTagName('*');
	var arrResult=[];
	for(var i=0 ; i<arrEle.length;i++){
		if(arrEle[i].className==strClass){
			arrResult.push(arrEle[i]);
		}
	}
	return arrResult;
}




/**
 * 不能实现暂停/继续效果
 * @param {父元素} doms 
 * @param {主体} body 
 * @param {子元素} child 
 * @param {移动速度} speed 
 */
var Marquee=function(doms,body,child,speed){
	var mar_parent=doms;
	var mar_body=mar_parent.getElementsByTagName(body)[0];
	var mar_childs=mar_body.getElementsByTagName(child);
	var timer=null;
	this.speed=speed;
	mar_body.innerHTML+=mar_body.innerHTML;
	mar_body.style.width=mar_childs[0].offsetWidth*mar_childs.length+'px';

	var move=function(){
		if(mar_body.offsetLeft<-mar_body.offsetWidth/2){
			mar_body.style.left='0';
		}
		if(mar_body.offsetLeft>0){
			mar_body.style.left=-mar_body.offsetWidth/2+'px';
		}
		mar_body.style.left=mar_body.offsetLeft+speed+'px';
	};
	timer=setInterval(move,30);
	var pauseMove=function(){
		clearInterval(timer);
	}
	var cMove=function(){
		timer=setInterval(move,30);
	};
	this.pauseMove=pauseMove;
	this.cMove=cMove;

};
