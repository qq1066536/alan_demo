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
 * 图片轮播
 * 因为move是在不同的函数中调用的会导致this指向问题，用_this代替this
 * @param {父元素} doms 
 * @param {主体} body 
 * @param {子元素} child 
 * @param {移动速度} speed 
 */
function Marquee(doms,body,child,speed){
	var _this=this;
	this.mar_parent=doms;
	this.mar_body=this.mar_parent.getElementsByTagName(body)[0];
	this.mar_childs=this.mar_body.getElementsByTagName(child);
	this.speed=speed;
	//设置父元素宽度
	this.mar_parent.style.width=this.mar_childs[0].offsetWidth*this.mar_childs.length+'px';
	//主体添加子元素
	this.mar_body.innerHTML+=this.mar_body.innerHTML;
	//设置主体宽度
	this.mar_body.style.width=this.mar_childs[0].offsetWidth*this.mar_childs.length+'px';
	this.move=function(){
		if(_this.mar_body.offsetLeft<-_this.mar_body.offsetWidth/2){
			_this.mar_body.style.left='0';
		}
		if(_this.mar_body.offsetLeft>0){
			_this.mar_body.style.left=-_this.mar_body.offsetWidth/2+'px';
		}
		_this.mar_body.style.left=_this.mar_body.offsetLeft+_this.speed+'px';
	};
	this.timer=setInterval(this.move,30);
}
Marquee.prototype.cMove=function(){
	this.timer=setInterval(this.move,30);
};
Marquee.prototype.pauseMove=function(){
	clearInterval(this.timer);
};
