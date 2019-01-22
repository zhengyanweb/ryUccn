$(function() {
    //首页nav
    $('.index-menu-item a').hover(function() {
            $('.index-tab-box li').eq($(this).index('.index-menu-item a')).addClass('active').siblings('li').removeClass('active');
            $(this).addClass('active').siblings('a').removeClass('active');
        })
        // 首页项目
    $('.project-item').hover(function() {
            $(this).addClass('active');
        }, function() {
            $(this).removeClass('active');
        })
        //
    $('.head-more').on('click', function() {
        $('.page-nav').animate({ top: 0 });
        $('.about-page').css({ overflow: 'hidden' });
    })
    $('.head-close').on('click', function() {
        $('.page-nav').animate({ top: '-100%' });
        $('.about-page').css({ overflow: 'initial' });
    })
    $('.page-nav-list li').on('click', function() {
        $('.page-nav').animate({ top: '-100%' });
        $('.about-page').css({ overflow: 'initial' });
    })


})