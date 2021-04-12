$(function(){
    $('.slider__inner').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 2
              }
            },
            {
                breakpoint: 577,
                settings: {
                  slidesToShow: 1
                }
              }
          ]
        });
});