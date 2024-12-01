(function ($) {
    "use strict";
    /*=== vwCarouselCenter start ===*/
    $('.vwCarouselCenter').slick({
        dots: true,           // Add navigation dots
        arrows: true,         // Add previous/next arrows
        infinite: true,       // Loop through slides
        speed: 500,           // Transition speed
        cssEase: 'ease-in-out', // Use ease-in-out for a smoother animation
        slidesToShow: 1,      // Number of slides visible at once
        slidesToScroll: 1,    // Number of slides scrolled at a time
        autoplay: true,       // Enable autoplay
        autoplaySpeed: 3000,  // Autoplay delay
        centerMode:true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    /*=== vwCarouselCenter end ===*/

})(jQuery);