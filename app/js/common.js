$(document).ready(function () {
    $('.home-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dotsClass: 'dots-slick-my',
        appendDots: '.home-slider-footer',
        appendArrows: '.home-slider-nav',
        prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>'
    });

    let homeSlider = $('.home-slider');

    $('.home-slider-footer .counter-slide__default').text("/" + homeSlider.slick("getSlick").slideCount);

    homeSlider.on('afterChange', function (event, slick, currentSlide) {
        $(".home-slider-footer .counter-slide__cp").text(currentSlide < 10 ? `${currentSlide + 1}` : currentSlide + 1);
    });


    $('.products-day-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        appendArrows: '.products-day-slider-nav',
        prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
        responsive: [
            {
                breakpoint: 860,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true
                }
            }
        ]
    });

    let productSlider = $('.products-day-slider');

    $('.products-day .counter-slide__default').text("/" + productSlider.slick("getSlick").slideCount);

    productSlider.on('afterChange', function (event, slick, currentSlide) {
        $(".products-day .counter-slide__cp").text(currentSlide < 10 ? `${currentSlide + 1}` : currentSlide + 1);
    });


    function setProgress(index) {
        const calc = ((index + 1) / (productSlider.slick('getSlick').slideCount)) * 100;

        progressBar
            .css('width', calc + '%');

    }

    let progressBar = $('.progress-bg');

    productSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        setProgress(nextSlide);

    });

    setProgress(0);


    $('.clients-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        variableWidth: true,
        // autoplay: true,
        // autoplaySpeed: 3000,
        appendArrows: '.clients-slider-nav',
        prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
        responsive: [
            {
                breakpoint: 860,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true
                }
            }
        ]
    });

    let productSlider2 = $('.clients-slider');

    $('.clients-slider-nav .counter-slide__default').text("/" + productSlider2.slick("getSlick").slideCount);

    productSlider2.on('afterChange', function (event, slick, currentSlide) {
        $(".clients-slider-nav .counter-slide__cp").text(currentSlide < 10 ? `${currentSlide + 1}` : currentSlide + 1);
    });


    function setProgress2(index) {
        const calc = ((index + 1) / (productSlider2.slick('getSlick').slideCount)) * 100;

        progressBar2
            .css('width', calc + '%');

    }

    let progressBar2 = $('.progress-clients-bg');

    productSlider2.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        setProgress2(nextSlide);

    });

    setProgress2(0);

});

// amount
$('.down').on("click", function () {
    let $input = $(this).parent().find('input');
    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});
$('.up').on("click", function () {
    let $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});


// ?????????????????? ???????? (??????????????????)
$(function () {
    let overlay = $('.overlay'),
        open_modal = $('.open_modal'),
        close = $('.modal__close, .overlay'),
        modal = $('.modal__div');

    open_modal.on('click', function (event) {
        event.preventDefault();

        modal.css('display', 'none').animate({
            opacity: 0,
            // top: '45%'
        }, 200);

        let div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        // top: '50%'
                    }, 200);
            });

        $('html').addClass('no-scroll');
    });

    close.on('click', function () {
        modal
            .animate({
                    opacity: 0,
                    // top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );

        $('html').removeClass('no-scroll');
    });

});
//end

// phone mask
$('[name="phone"]').mask('+7(999) 999-99-99');

// input search
$(function () {
    $('.form-search input').on('keyup change', function () {
        if (this.value.length > 0) {
            $('.result-search-modal').fadeIn();
        } else {
            $('.result-search-modal').fadeOut();
        }
    });
});


//?????????????? ????????????
$(document).ready(function () {
    $('.go_to').click(function (e) {
        e.preventDefault();
        $('.go_to').removeClass('active');
        $(this).addClass('active');
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length !== 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500);
        }
        return false;
    });
});
//?????????????? ???????????? end

$(function () {
    $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
});

// tabs mobile
$('.btn-category-tab').on('click', function (e) {
    e.preventDefault();
    $(this).siblings('.tabs__caption').slideToggle();
});

$('.btn-drop-toggle').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('click').parents('.form-checkout__total').find('.form-checkout__total-body').slideToggle();
});

// accordeon
function accordeon() {
    var panel = $('.panel_heading');

    if (panel.hasClass('in')) {
        $('.in').find('.block_hover').slideDown();
    }

    $('.panel_heading .block_title').on('click', function () {
        $(this).parent().toggleClass('in').find('.block_hover').slideToggle();
    });
}

accordeon();

// fixed card-list
$(window).scroll(function () {
    var heightHome = $('.product-page').height();
    if ($(this).scrollTop() > heightHome) {
        $('.card-list-fixed').fadeIn();
    } else {
        $('.card-list-fixed').fadeOut();
    }
});

