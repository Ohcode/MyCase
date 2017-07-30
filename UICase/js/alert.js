var ALERT = $('.alert'), //默认
	ALERTBODY = ALERT.children('.alert-body'),
	WINHEIGHT = $(window).height(),
	ALERTCLOSE = ALERTBODY.children('.alert-close'),
	BUTTONCLOSE = ALERTBODY.children('.alert-button').children('.button-close');

var ALERTTIP = $('.alert-tip'), //默认
	ALERTTIPBODY = ALERTTIP.children('.alert-body'),
	ALERTTIPCLOSE = ALERTTIPBODY.children('.alert-close'),
	TIPBUTTONCLOSE = ALERTTIPBODY.children('.alert-button').children('.button-close');

$(".trigger-alert").click(function() { //打开弹窗
	ALERT.height(WINHEIGHT);
	ALERT.fadeIn('fast');
	ALERTBODY.css('margin-top', (WINHEIGHT - ALERTBODY.height() - 200) / 2); //居中往上一点增加舒适感
});
$(".trigger-alert-tip").click(function() { //打开tip
	ALERTTIP.height(WINHEIGHT);
	ALERTTIP.fadeIn('fast');
	ALERTTIPBODY.css('margin-top', (WINHEIGHT - ALERTTIPBODY.height() - 200) / 2); //居中往上一点增加舒适感
});

ALERT.on('click', ALERTCLOSE, function() { //关闭弹窗
	
});

ALERTTIP.on('click', function() { //关闭弹窗
	
	$(this).children().removeClass()
	.addClass(OutArray.join(' '))
	.delay(1500).parent().fadeOut('slow', function() {
		$(this).children().removeClass().addClass(InArray.join(' '));
	});
});

ALERTBODY.add(ALERTTIPBODY).click(function(event) { //阻止冒泡
	event.stopPropagation();
});