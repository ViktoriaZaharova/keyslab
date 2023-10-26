$(document).ready(function () {
    $('.home-slider').slick({
        slidesToShow: 1,
        fade: true,
        dots: false,
        infinite: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        // dotsClass: 'dots-slick-my',
        // appendDots: '.home-slider-footer',
        // appendArrows: '.home-slider-nav',
        // prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
        // nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>'
    });


    let homeSlider = $('.home-slider');

    function setProgressHome(index) {
        const calc = ((index + 1) / (homeSlider.slick('getSlick').slideCount)) * 100;

        progressBarHome
            .css('width', calc + '%');

    }

    let progressBarHome = $('.home-progress-bg');

    homeSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        setProgressHome(nextSlide);

    });

    setProgressHome(0);


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

    let progressBar = $('.progress-bg-product');

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


// модальные окна (несколько)
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


//плавный скролл
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
//плавный скролл end

$(function () {
    $('ul.tabs__caption li').click(function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');

        let id = $(this).attr('data-tab'),
            content = $(this).parents('.tabs').find('.js-tab-content[data-tab="' + id + '"]');

        $(this).parents('.tabs').find('.js-tab-content.active').removeClass('active'); // 3
        content.addClass('active');
    });
});

$(document).ready(function () {
    $(".js-tab-trigger").click(function () {


        $(this).parents('.tabs').find('.js-tab-trigger.active').removeClass('active'); // 1
        $(this).addClass('active'); // 2

         // 4
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

// copy text click btn
$('.copy-paste__link').click(function (e) {
    e.preventDefault();
    let $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(this).parent('.copy-paste').find('.copy-paste__text').text()).select();
    document.execCommand("copy");
    $temp.remove();

    // $(this)(.text('Тест скопирован!');
});



// dropdown menu

$(function () {
    $('.dropdown-toggle').click(function (e) {
        e.preventDefault();

        let pd = $(this).parents('.dropdown');
        $('.dropdown').not(pd).find('.dropdown-toggle').removeClass('active').next('.dropdown-menu').slideUp(200);
        $(this).toggleClass('active').next('.dropdown-menu').slideToggle();
    });

    if($('.sidebar-menu .dropdown-toggle').hasClass('active')) {
        $('.sidebar-menu .dropdown-toggle.active').next('.dropdown-menu').slideDown();
    }

    $(document).click(function (e) {
        var target = e.target;
        if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) {
            $('.dropdown-menu').slideUp();
            $('.dropdown-toggle').removeClass('active');
        }
    });
});

