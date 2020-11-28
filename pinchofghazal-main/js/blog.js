$(document).ready(function() {
    let attr = $("html").attr("dir");
    let rtl = false;
    if (attr == "rtl") {
        rtl = true;

    } else {
        rtl = false;

    }
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        rtl: rtl,
        autoplaySpeed: 1000,
        responsiveClass: true,

        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    })
});