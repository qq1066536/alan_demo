function getStyle(b,a){if(b.currentStyle){return b.currentStyle[a]}else{return getComputedStyle(b,false)[a]}}function getByClass(c,e){var d=c.getElementsByTagName("*");var a=[];for(var b=0;b<d.length;b++){if(d[b].className==e){a.push(d[b])}}return a}function Marquee(c,a,e,b){var d=this;this.mar_parent=c;this.mar_body=this.mar_parent.getElementsByTagName(a)[0];this.mar_childs=this.mar_body.getElementsByTagName(e);this.speed=b;this.mar_body.innerHTML+=this.mar_body.innerHTML;this.mar_body.style.width=this.mar_childs[0].offsetWidth*this.mar_childs.length+"px";this.move=function(){if(d.mar_body.offsetLeft<-d.mar_body.offsetWidth/2){d.mar_body.style.left="0"}if(d.mar_body.offsetLeft>0){d.mar_body.style.left=-d.mar_body.offsetWidth/2+"px"}d.mar_body.style.left=d.mar_body.offsetLeft+d.speed+"px"};this.timer=setInterval(this.move,30)}Marquee.prototype.cMove=function(){this.timer=setInterval(this.move,30)};Marquee.prototype.pauseMove=function(){clearInterval(this.timer)};