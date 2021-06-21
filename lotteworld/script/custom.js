$(function(){

	//서브메뉴
	$("#nav>ul>li").hover(function(){
		var i = $(this).index();
		$("#nav>ul>li").eq(i).find(".sub").show().css("transition","0.3s")
	},function(){
		$(".sub").hide();
	})

	//슬라이드
	var current = 0;
	var banner = $("#visual li");

	function slideMove(){
		banner.eq(current).css({top:0}).stop().animate({top:"-100%"},300);

		current ++;
		if(current == 3){current=0};
		banner.eq(current).css({top:"100%"}).stop().animate({top:0},300)
	}
	setInterval(slideMove,3000);

	//탭메뉴
	$(".tab li").click(function(){
		var i = $(this).index();
		$(".tab_content>ul").hide().eq(i).show();
		$(".tab li").removeClass("active");
		$(".tab li").eq(i).addClass("active");

		return false;
	});

	//팝업창
	$("#banner").click(function(){
		$(".layer").fadeIn();
	})
	$(".layer a").click(function(){
		$(".layer").hide();
	})
});