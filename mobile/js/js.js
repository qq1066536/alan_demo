// JavaScript Document

$(function(){
	var top_wx="<div class='top_tips' onclick='openZoosUrl(\'chatwin\');'><span></span><ul><li>你好：</li><li>税务师老师正在线，请问有什么问题可以帮你？...</li></ul></div>"
		var bottom="<section id=\'s-actionBar-container\'>"
			+"      <div id=\'s-actionbar\' class=\'action-bar mui-flex align-center\'>"
			+"               <button class=\'buy cell\' style=\'\' onclick=\'javascript:void(0)\' onclick=\"openZoosUrl();LR_HideInvite();;return false;\">在线咨询</button>"
			
			+"               <button class=\'cart cell\'><a href=\'tel:4006008011\' style=\'  display: block;color: #fff;line-height: 49px;\'>电话咨询</a></button>"
			
			+"                <div class=\'activity-box cell\'></div>"
			+"      </div>"
			+"      <a href=\'javascript:;\' onclick=\'openZoosUrl(\'chatwin\');\' rel=\'nofollow\' class=\'cart-link\' title=\'在线咨询\'></a>"
			+"</section>"
		var float_chat="<div class=\'swtCenter relative\' id=\'best3g_swt_YQ\' style=\'display: block;\'> <span class=\'closeBtn_swt absolute\' onclick=\'hideswt()\'></span>"
			+"  <h3>税务师在线咨询</h3>"
			+"  <div class=\'mfhd clearfix\'>"
			+"<input type=\'tel\' name=\'telInput\' id=\'tctelInput\' value=\'\'  placeholder=\"请输入您的电话号码\" class=\'callbF_text\'>"
			+"    <a href=\'javascript:void(0)\' class=\'callbF_sub\' id=\'tccallBtn\' target=\'_self\'>免费回电</a></div>"
			+"  <p>我们将立即回电。该通话免费，请放心接听！ </p>"
			+"  <div class=\'swt_lists absolute\'>  <a href=\'\' class=\'swt_list1\'> <i class=\'swtLinkCounter\' id=\'swtLinkCounter\'>7</i> <i class=\'swtLinkIcon\'></i><em style=\'line-height:49px\'>在线提问</em></a><a href=\'tel:4006008011\' class=\'swt_list2\'><i class=\'swtCallIcon\'></i><em style=\'line-height:49px\'>拨打电话</em></a> </div>"
			+"</div>"
		$("body").append(top_wx+float_chat);
		setInterval(function(){
			$(".top_tips").slideToggle(300)
		},5000)
		var swtCenter=setInterval(function(){
			clearInterval(swtCenter)
			$(".swtCenter").css({display:"block"}).animate({opacity:1},300)
		},10000)
		$("body").on("click",".closeBtn_swt",function(){
			swtCenter=setInterval(function(){
				clearInterval(swtCenter)
				$(".swtCenter").css({display:"block"}).animate({opacity:1},300)
			},10000)
			$(".swtCenter").animate({opacity:0},300,function(){
				$(this).hide(0)
			})
		})
		$("body").on("click",".top_tips,.buy,.swt_list1,.support",function(){
			openZoosUrl('chatwin');
			return false;
		})

		document.getElementById("tccallBtn").onclick = function () { 
			lxb.call(document.getElementById("tctelInput"));
		};
});
document.writeln('<script type="text/javascript"  data-lxb-uid="10201162" data-lxb-gid="166693" src="http://lxbjs.baidu.com/api/asset/api.js?t=' + new Date().getTime() + '" charset="utf-8"></scr' + 'ipt>' );