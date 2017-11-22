function urlTo(){
  window.open('http://kf.gaodun.com/LR/Chatpre.aspx?id=KEV39534957&skid=23')
}

$(function(){
  $("form button").click(function() {
		var Ereg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/,
			Preg = /^17[0-9]{1}[0-9]{8}$|13[0-9]{1}[0-9]{8}$|15[012356789]{1}[0-9]{8}$|18[0123456789]{1}[0-9]{8}$|14[012356789]{1}[0-9]{8}$/,
			Treg = /^0\d{2,3}-?\d{7,8}$/;

		if($(this).parents("form").find("#name").val() == "") {
			alert("请输入您的姓名");
			$(this).parents("form").find("#name").focus();
			return false;
		} else if($(this).parents("form").find("#name").val().length < 2) {
			alert("请输入你的真实姓名");
			$(this).parents("form").find("#name").focus();
			return false;
		};
		

		if($(this).parents("form").find($("#tel")).val() == "") {
			alert("电话号码不能为空");
			$(this).parents("form").find($("#tel")).focus();
			return false;
		} else if(!(Preg.test($(this).parents("form").find($("#tel")).val()) || Treg.test($(this).parents("form").find($("#tel")).val()))) {
			alert("请输入你的真实电话");
			$(this).parents("form").find($("#tel")).focus();
			return false;
		};
	});
})();
