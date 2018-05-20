$(document).on('ready', function() {
    $(".regular").slick({
        // dots: true,
        // infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
          autoplaySpeed: 2000,
          responsive: [
            {
            breakpoint: 992,
            settings: {
            slidesToShow: 3,
            slidesToScroll:1
            }
            },
            {
            breakpoint: 768,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1
            }
            },
            {
            breakpoint: 600,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
            }
          
            ]
    });
});
