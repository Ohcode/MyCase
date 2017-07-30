var FORM = $(".form");

FORM.children("input[type = file]").after("<span>").hide().next("span").addClass("file").text("上传文件");
var FILECLICK = function (){$(this).prev("input").click();}
FORM.children("span").on('click',FILECLICK);
FORM.children("input[type=file]").change(function(){
	FILEVAL = $(this).val();
	DELFILE = '<i class="fa fa-times-circle del-file"></i>';
	$(this).next().text(FILEVAL.slice(FILEVAL.lastIndexOf('\\') + 1)).after(DELFILE).off('click');
	$(".del-file").click(function(){
		FORM.children("input[type=file]").val('').next().on('click',FILECLICK).text("上传文件");
		$(this).remove();
	});
});
