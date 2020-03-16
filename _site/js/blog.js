/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */
$(document).ready(function () {
    $(window).scroll(function () {
        const windowScroll = $(this).scrollTop();
        const home = $('#home').children();
        $(home.first()).css({
            transform: 'translate(0px, ' + windowScroll/3.90 + '%)'
        });

        $(home.next().first()).css({
            transform: 'translate(0px, ' + windowScroll/1.35  + '%)'
        });

        $(home.next().last()).css({
            transform: 'translate(0px, ' + windowScroll/1.10 + '%)'
        });
    });

    const jumbotronChild = $('.jumbotron').children();
    jumbotronChild.each(function (element) {
        setTimeout(function () {
            jumbotronChild.eq(element).addClass('show-element');
            setTimeout(function () {
                jumbotronChild.eq(element).css({
                    transition: '0s'
                });
            }, 250);
        }, 750 * element);
    });


    $('.navbar-toggler').click(function () {
        $('.collapse').collapse('toggle');
    });
});
