(function ($) {
    "use strict";
    
    // Form step handling
    let currentStep = 1;
    const totalSteps = 2;

    // Next button click handler
    $(document).on('click', '.btn-next', function(e) {
        e.preventDefault();
        if (currentStep < totalSteps) {
            $('#form-step-' + currentStep).hide();
            currentStep++;
            $('#form-step-' + currentStep).show();
            updateStepIndicator();
        }
    });

    // Back button click handler
    $(document).on('click', '.btn-back', function(e) {
        e.preventDefault();
        if (currentStep > 1) {
            $('#form-step-' + currentStep).hide();
            currentStep--;
            $('#form-step-' + currentStep).show();
            updateStepIndicator();
        }
    });

    function updateStepIndicator() {
        $('.step-indicator').text(currentStep);
    }


    $(".recipe-slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      dots: false,
      centerMode: true,
      centerPadding: "60px",
      infinite: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            centerPadding: "40px",
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            centerPadding: "20px",
          },
        },
      ],
    });

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