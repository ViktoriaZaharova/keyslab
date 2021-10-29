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
        nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>'
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

});

$('.down').on("click", function () {
    let $input = $(this).parent().find('input');
    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});
$('.up').on("click",function () {
    let $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});

