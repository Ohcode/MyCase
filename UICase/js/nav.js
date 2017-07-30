var NAV = $('.nav'),
	NAVDEFAULT = $('.nav').not('.nav-stack').not('.breadcrumb'),//默认
	NAVSTACK = $('.nav-stack'),//堆叠式
	BREADCRUMB = $('.breadcrumb');//面包屑
	
var DOWNICON = '<i class="fa fa-caret-down"></i>',
	UPICON = '<i class="fa fa-caret-up"></i>';
	
	
	//事件
	NAV.find('.dropdown').append(DOWNICON);
	NAV.find('.dropdown').parent().on({
		'mouseover':function(){
			$(this).find('.nav-menu').stop(true,true).slideDown('fast');
			$(this).find('.fa').removeClass('fa-caret-down').addClass('fa-caret-up');
		},'mouseleave':function(){
			$(this).find('.nav-menu').stop(true,true).slideUp('fast');
			$(this).find('.fa').removeClass('fa-caret-up').addClass('fa-caret-down');
		},'click':function(e){
			e.preventDefault();
			clickListen($(this).find('.nav-menu'));
			$(this).find('.nav-menu').stop(true,true).slideToggle('fast');
		}
	});
	
	//解决冲突
	NAV.find('.main-item').children('a').has('.open-hover').parent().off('click');
	NAV.find('.main-item').children('a').not('.open-hover').parent().off('mouseover').off('mouseleave');
	
	//点击事件单开监听
	function clickListen(e){
		NAV.find('.nav-menu').not(e).each(function(){
			if ($(this).css('display') != 'none') {
				$(this).parent().trigger('click');
			}
		});
	}