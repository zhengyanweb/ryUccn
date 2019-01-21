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
	//project-body
	mousewheelFn();
	function mousewheelFn () {
		console.log(window.location.href);
		var speed = 0;
		var strHref = window.location.href;
		if (strHref.indexOf('?') != -1) {
			strHref = strHref.split('?')[1];
			speed = strHref.indexOf('=')[1]
		}
		console.log('speed', speed)

		var onoff = false;
		$('.project-page').on('mousewheel DOMMouseScroll', onMouseScroll);

		function onMouseScroll (e) {
			if (onoff) { return }
			e.preventDefault();
			var wheel = e.originalEvent.wheelDelta || -e.originalEvent.detail;
			var delta = Math.max(-1, Math.min(1, wheel));
			onoff = true;
			if (delta < 0) {//向下滚动
				speed--;
				if (speed < -4) {
					speed = -4;
					onoff = false;
					return
				}
				$('.project-ul').animate({ top: 450 * speed + 'px' }, 1000, function () {
					onoff = false;
				})
			} else {//向上滚动
				speed++;
				if (speed >= 1) {
					speed = 0;
					onoff = false;
					return
				}
				$('.project-ul').animate({ top: 450 * speed + 'px' }, 1000, function () {
					onoff = false;
				})
			}
			$('.step .round').eq(Math.abs(speed)).addClass('active').siblings('li.round').removeClass('active')
		}
	}

})