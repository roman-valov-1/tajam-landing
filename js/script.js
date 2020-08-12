$$(document).ready(function(){
    $('.comments__slider-small').slick({
        arrows: true,
        slidesToShow: 3,
        infinite: false,
        initialSlide: 1,
        draggable: true,
        swipe: true,
        centerMode: true,
        asNavFor: ".comments__slider-big",
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.comments__slider-big').slick({
        arrows: false,
        fade: true,
        asNavFor: ".comments__slider-small"
        
    });
});
