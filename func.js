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