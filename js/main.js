$(document).ready(function() {

    $(".loader").fadeOut(1500, () => {
        if ($('.Advertising').length) {
            $(".Advertising").addClass("d-flex");
        }
    });
    $(".Advertising").click(function(e) {
        var container = $(".Advertising-box");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $(".Advertising").addClass("d-none");
            $(".Advertising").toggleClass("d-flex");

        }
    });
    $(".close-Advertising").click(function(e) {
        $(".Advertising").addClass("d-none");
        $(".Advertising").toggleClass("d-flex");

    });

    let he = $(".all-top").height();

    let wh = $(window).height();
    if ($(".header-all")[0]) {

        $(".header-all").css({
            marginTop: he
        });
    }
    if ($(".header-blog")[0]) {

        $(".header-blog").css({
            marginTop: he

        });
    }
    $(".opensection a").click(function() {
        let LinkHref = $(this).attr("href");
        $("html,body").animate({
            scrollTop: $(LinkHref).offset().top - he
        }, 1000)
    })
    if ($(".header-all")[0]) {
        // Do something if class exists
        $(".header-all , .carousel , .slide , .carousel-item").css({
            height: wh - he
        });
    }

    $("form button").click(function(e) {
        e.preventDefault();

    });


    $("#up").click(function(e) {
        $("html,body").animate({
            scrollTop: 0
        }, 1000);
    });
    AOS.init();

    $("small").click(function() {
        location.assign("register.html")

    })



    $("#fname,#lname").keyup(function() {
        var rgx = /^[A-Z][a-z]{3,25}$/;
        if (rgx.test($(this).val()) == false) {
            $(this).attr("class", "form-control is-invalid")
            $(this).next().fadeIn(100);

        } else {
            $(this).next().fadeOut(100);
            $(this).attr("class", "form-control is-valid")
        }
    })



    $("#mail").keyup(function() {
        var rgx = /^[a-zA-Z0-9]{3,}@[a-zA-Z]{3,}[.]{1}(com|in|...)$/;
        if (rgx.test($(this).val()) == false) {
            $(this).attr("class", "form-control is-invalid")
            $(this).next().fadeIn(100);

        } else {
            $(this).next().fadeOut(100);
            $(this).attr("class", "form-control is-valid")
        }
    })



    $("#phone").keyup(function() {
        var rgx2 = /^(01)[0125][0-9]{8}$/;
        if (rgx2.test($(this).val()) == false) {
            $(this).attr("class", "form-control is-invalid")
            $(this).next().fadeIn(100);

        } else {
            $(this).next().fadeOut(100);
            $(this).attr("class", "form-control is-valid")
        }
    })
    $("#pass").click(function() {
        if ($(this).attr("class") == "fa fa-eye-slash") {
            $("#password").attr("type", "text")
            $(this).attr("class", "fa fa-eye")
        } else {
            $("#password").attr("type", "password")
            $(this).attr("class", "fa fa-eye-slash")
        }

    })
    $("#password").keyup(function() {
        var rgx = /[A-Za-z0-9]{8,20}$/;
        if (rgx.test($(this).val()) == false) {
            $(this).attr("class", "form-control is-invalid")
            $(this).next().next().fadeIn(100);

        } else {
            $(this).attr("class", "form-control is-valid")
            $(this).next().next().fadeOut(100);

        }
    })





});