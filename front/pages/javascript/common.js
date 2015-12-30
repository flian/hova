// JavaScript Document

$(document).ready(function(){
	
	//prodect Type
	$(".prodectType ul:even").addClass("even");
	
	//tags 
	jQuery.jqtab = function(tabtit,tab_conbox,shijian) {
		$(tab_conbox).find(".cont").hide();
		$(tabtit).find("li:first").addClass("active").show(); 
		$(tab_conbox).find(".cont:first").show();
	
		$(tabtit).find("li").bind(shijian,function(){
		  $(this).addClass("active").siblings("li").removeClass("active"); 
			var activeindex = $(tabtit).find("li").index(this);
			$(tab_conbox).children(".cont").eq(activeindex).show().siblings().hide();
			return false;
		});
	
	};
	$.jqtab(".tags",".shown","click");
	
	//outLayer 
	$(".closed").click(function () {
		var winName=$(this).attr("data");
		$("#"+winName+",."+winName).hide();
	});	
	$(".showWin").click(function () {
		var winName=$(this).attr("data");
		$("#"+winName).fadeIn();
	});
	
	//hover Css
	$(".prodectList .item").hover(function () {
    	$(this).addClass("active");
	}, function () {
		$(this).removeClass("active");
	});
	
	$(".addressRight .fonts").click(function () {
		$(this).parent().find(".subList").show();
	});
	
	$(".addressLeft").hover(function () {
		$(this).find(".subList").show();
	}, function () {
		$(this).find(".subList").hide();
	});
	
	//
	$(".radioItem").change(
		function() {
		var $selectedvalue = $("input[name='delivery']:checked").val();
		//alert($selectedvalue);
		if ($selectedvalue == 1) {
			$(this).parent().find("#stores").show();
			$(this).parent().find("#serviceCenter").hide();
		}
		else {
			$(this).parent().find("#stores").hide();
			$(this).parent().find("#serviceCenter").show();
		}
	});
	
	$(".collectList .item").hover(function () {
		$(this).find(".delete").show();
	},function () {
		$(this).find(".delete").hide();
	});
});