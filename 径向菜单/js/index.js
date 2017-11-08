/**
 * 
 * 
 * @param {any} className  html类名
 * @param {any} element html元素
 * @returns bool值
 */
function hasClass(className,element){
	'use strict';
	var classNames=element.classList;
	for(var i in classNames){
		if(i ===className){
			return true;
		}
	}
	return false;
} 


/**
 * 
 * 
 * @param {any} elelement html元素
 * @param {any} classname 类名
 */
function addClass(elelement,classname){
	'use strict';
	elelement.classList.add(classname);
}


/**
 * 
 * @param {*} elelement html元素
 * @param {*} classname 类名
 */
function removeClass(elelement,classname){
	'use strict';
	elelement.classList.remove(classname);
}


function IsShowMenu(className){
	'use strict';
	var htmlContext=document.getElementsByTagName('nav')[0];
	// alert(htmlContext.parentNode.className)
	
	if (!hasClass(className,htmlContext.parentNode)) {
		addClass(htmlContext.parentNode,className);
		var isLocated=false;
		if(!isLocated){
			var width = window.getComputedStyle(htmlContext.parentNode).width.replace('px',''),
				radius=width / 2,
				startAngle=0,
				endAngle=360,
				total=htmlContext.childElementCount,
				gap=(endAngle - startAngle)/total;

			for(var childnode =0;childnode<total;childnode++){
				var myAngle=(startAngle + gap*childnode)*(Math.PI/180);
				var myX=(1+Math.cos(myAngle))*radius,
					myY=(1+Math.sin(myAngle))*radius;
				htmlContext.children[childnode].style.cssText='left:'+myX+'px; top :'+myY+'px';
			}
			isLocated=true;
		}
	}else {
		removeClass(htmlContext.parentNode,className);
	}    	
}

document.getElementsByClassName('main-nav')[0].onclick=function(){
	'use strict';
	IsShowMenu('active');
};