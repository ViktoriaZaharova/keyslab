// плавающее боковое меню
$(window).on('load scroll resize', function() {
    var aside = $('.menu-sidebar');
    if (aside.length) {
        if (window.innerWidth < 768) {
            aside.removeAttr('style');
        }
        else {
            var width     = aside.parent().width(),
                height    = aside.outerHeight(true),
                page      = $('.politics .wrapper'),
                indent    = parseFloat(page.css('margin-bottom')),
                top       = page.offset().top,
                bottom    = top + page.outerHeight(true),
                scrollTop = $(window).scrollTop(),
                wHeight   = window.innerHeight;
            if (page.outerHeight() > height) {
                if (top - scrollTop > 0) {
                    aside.removeAttr('style');
                }
                else {
                    var offset    = bottom - scrollTop - height - indent,
                        fixUntil  = aside.data('fix-until'),
                        maxHeight = wHeight - indent * 2,
                        sbWidth   = window.innerWidth - $(window).width();
                    if (fixUntil && $(fixUntil).length)
                        offset = $(fixUntil).eq(0).offset().top - scrollTop - height - indent;
                    aside.css({
                        'position': 'fixed',
                        'top': offset < 0 ? offset : 0,
                        'width': width + (aside.get(0).scrollHeight + 2 > maxHeight ? sbWidth : 0),
                        'max-height': maxHeight,
                        // 'overflow': 'auto'
                    });
                }
            }
        }
    }
});