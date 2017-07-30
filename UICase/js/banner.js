var BANNER = $(".banner-nav"),
	BANNERSHOW = $(".banner-show"),
	BANNERWIDTH = $(".banner").width(),
	SHOWTHIS = 'show-this';
	
	BANNER.children().click(function(){
		if (!$(this).is(SHOWTHIS)) {
			
			BANNER.children('.' + SHOWTHIS).removeClass();
			$(this).addClass(SHOWTHIS);
			//bannerMove($(this));
			bannerFade($(this));
		}
	});
	
	function bannerMove (index) {
		SHOWBANNER = BANNERSHOW.children().eq(index.index());
		BANNERSHOW.animate({left:- BANNERWIDTH * index.index() + "px"},"slow");
	}
	
	function bannerFade (index) {
		SHOWBANNER = BANNERSHOW.children().eq(index.index());
		SHOWBANNER.fadeIn(500,function(){
			BANNERSHOW.children().not(SHOWBANNER).hide();
				
		});
		
	}
	
	//定时器(模拟点击)
	var bannerSetInt = setInterval(function (){
		if (BANNER.children('.' + SHOWTHIS).is(BANNER.children().last())) {
			BANNER.children().first().trigger("click");
		} else{
			BANNER.children('.' + SHOWTHIS).next().trigger("click");
		}
	},5000);