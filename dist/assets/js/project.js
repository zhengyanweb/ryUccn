$(function() {

    //控制高宽
    var iHeight = ($(window).height() - 100 - $('.project-box').outerHeight()) / 2
    if (iHeight) {
        $('.project-box').css({ top: iHeight });
        $('.step').css({ top: iHeight + 50 });
    }

    //app
    $('.head-more').on('click', function() {
        $('.page-nav').animate({ top: 0 });
        $('.about-page').css({ overflow: 'hidden' });
    })
    $('.head-close').on('click', function() {
        $('.page-nav').animate({ top: '-100%' });
        $('.about-page').css({ overflow: 'initial' });
    })


    // 
    var speed = 0;
    var strHref = window.location.href;
    if (strHref.indexOf('?') != -1) {
        strHref = strHref.split('?')[1];
        speed = -strHref.split('=')[1];
    }
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) { // app
        $('.project-ul li').eq(Math.abs(speed)).show().siblings().hide();
    } else { //pc
        $('.project-ul').css({ top: 450 * speed + 'px' });
        $('.step .round').eq(Math.abs(speed)).addClass('active').siblings('li.round').removeClass('active');
        mousewheelFn();
    }




    function mousewheelFn() {
        var onoff = false;
        $('body').on('mousewheel DOMMouseScroll', '.project-page', onMouseScroll);

        function onMouseScroll(e) {
            if (onoff) { return }
            e.preventDefault();
            var wheel = e.originalEvent.wheelDelta || -e.originalEvent.detail;
            var delta = Math.max(-1, Math.min(1, wheel));
            onoff = true;
            if (delta < 0) { //向下滚动
                speed--;
                if (speed < -4) {
                    speed = -4;
                    onoff = false;
                    return
                }
                $('.project-ul').animate({ top: 450 * speed + 'px' }, 1000, function() {
                    onoff = false;
                })
            } else { //向上滚动
                speed++;
                if (speed >= 1) {
                    speed = 0;
                    onoff = false;
                    return
                }
                $('.project-ul').animate({ top: 450 * speed + 'px' }, 1000, function() {
                    onoff = false;
                })
            }
            $('.step .round').eq(Math.abs(speed)).addClass('active').siblings('li.round').removeClass('active')
        }
    }

})