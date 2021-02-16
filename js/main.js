$(document).ready((function () {
    $(".header-slider").slick({
        fade: !0,
        infinite: !0,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg">',
        asNavFor: ".slider-dotshead"
    }),
        $(".slider-dotshead").slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            asNavFor: ".header-slider",
            responsive: [{
                breakpoint: 961,
                settings: "unslick"


            }


            ]
        }), $(".surf-slider").slick({
        slidesToShow: 4,
        infinite: !0,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg">',
        asNavFor: ".slider-map",
        responsive: [
            {

                breakpoint: 1210,
                settings:
                    {
                        slidesToShow:
                            3
                    }

            },
            {

                breakpoint: 901,
                settings:
                    {
                        slidesToShow: 2
                    }

            },
            {

                breakpoint:720,
                settings:
                    {
                        centerMode:true,
                        slidesToShow: 1
                    }

            },
            {

                breakpoint:426,
                settings:
                    {
                        centerMode:false,
                        slidesToShow: 1
                    }

            }

        ]
    }),
        $(".slider-map").slick({
            slidesToShow: 8,
            infinite: !0,
            slidesToScroll: 1,
            arrows: !1,
            asNavFor: ".surf-slider",
            focusOnSelect: !0,
            responsive: [        {

                breakpoint: 1103,
                settings:
                    {
                        slidesToShow:
                            3
                    }

            },
                {

                    breakpoint: 901,
                    settings:
                        {
                            centerMode:true,
                            slidesToShow: 2
                        }

                },
                {

                    breakpoint:720,
                    settings:
                        {
                            centerMode:true,
                            slidesToShow: 1
                        }

                }
            ]
        }), $(".holder__slider,.shop__slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: !0,
        infinite: !0,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg">'
    }), $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="images/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="images/minus.svg" alt=""></div></div>').insertAfter(".quantity input"), $(".quantity").each((function () {
        var s = $(this), i = s.find('input[type="number"]'), r = s.find(".quantity-up"), a = s.find(".quantity-down"),
            e = i.attr("min"), t = i.attr("max");
        r.click((function () {
            var r = parseFloat(i.val());
            if (r >= t) var a = r; else a = r + 1;
            s.find("input").val(a), s.find("input").trigger("change")
        })),
            a.click((function () {
                var r = parseFloat(i.val());
                if (r <= e) var a = r; else a = r - 1;
                s.find("input").val(a), s.find("input").trigger("change")
            }))
    })), $(".quantity-button").on("click", (function () {
        let s = $(".nights").val() * $(".summ").data("nights") + ($(".guests").val() - 1) * $(".summ").data("guests");
        $(".summ").html("$" + s)
    }));
    let s = $(".nights").val() * $(".summ").data("nights") + ($(".guests").val() - 1) * $(".summ").data("guests");
    $(".summ").html("$" + s), $(".surfboard-box__circle").on("click", (function () {
        $(this).toggleClass("active")
    })),
        $(".menu-btn").on("click", (function () {
            $(".menu").toggleClass("active")
        }))

}));