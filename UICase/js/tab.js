var TAB = $(".tab"),
	TABCONTENT = $(".tab-content"),
	TABSHOW = 'tab-show';
TABCONTENT.children().first().show();
TAB.children("ul").children().click(function(){
	if ($(this).hasClass(TABSHOW)) {
		return
	} else{
		TAB.children("ul").children("." + TABSHOW).removeClass();
		TABCONTENT.children().hide().eq($(this).index()).show();
		TAB.children("ul").children().eq($(this).index()).addClass(TABSHOW);
	}
});
