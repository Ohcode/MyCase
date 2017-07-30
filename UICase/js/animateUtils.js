$.fn.extend({
	animateMatch: function(){
		var getArray = $(this).attr('class').split(' '),
			setArray = new Array(getArray.length);
			console.log(this.attr('class'))
		$.each(getArray, function(index,event) {//关闭动画匹配
			if( event.match('In') != null){
				var ret = event.replace('In','Out'),
					flag = true;
				if ( ret.match('Down') != null) {
					ret = ret.replace('Down','Up');
					flag = false;
				}
				if (ret.match('Up') != null && flag) {
					ret = ret.replace('Up','Down');
				}
					setArray[index] = ret;
			}else setArray[index] = event;
		});
		return setArray.join(' ');
	}
	
});
	$(this).children().removeClass()
	.addClass(ALERTBODY.animateMatch())
	.delay(1500).parent().fadeOut('slow', function() {
		$(this).children().removeClass()
		.addClass(ALERTBODY.attr('class').split(' ').join(' '));
	});