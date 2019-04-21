$('#login-button').click(function (event) {
    var pwd=document.getElementById("pwd").value;
		//修改密码请改此处
    if(pwd=="0932329263"){
			event.preventDefault();
			$('form').fadeOut(500);
			$('.wrapper').addClass('form-success');
			requestFullScreen();
			location.href="Memories.html";
		}
	else{
		alert("手機號碼!!");
	}
});

function requestFullScreen(element) {
	var element=document.documentElement;
	var requestMethod = element.requestFullScreen || //W3C
	element.webkitRequestFullScreen || //Chrome等
	element.mozRequestFullScreen || //FireFox
	element.msRequestFullScreen; //IE11
	if (requestMethod) {
		requestMethod.call(element);
	}
	else if (typeof window.ActiveXObject !== "undefined") {//for Internet Explorer
		var wscript = new ActiveXObject("WScript.Shell");
		if (wscript !== null) {
		 wscript.SendKeys("{F11}");
		}
	}
}
