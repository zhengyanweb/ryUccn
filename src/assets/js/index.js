$(function () {
	//首页nav
	$('.index-menu-item a').hover(function () {
		$('.index-tab-box li').eq($(this).index('.index-menu-item a')).addClass('active').siblings('li').removeClass('active');
		$(this).addClass('active').siblings('a').removeClass('active');
	})
	// 首页项目
	$('.project-item').hover(function () {
		$(this).addClass('active');
	}, function () {
		$(this).removeClass('active');
	})
})