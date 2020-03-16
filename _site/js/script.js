/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */
$(document).ready(function () {
    $(window).scroll(function () {
        const windowScroll = $(this).scrollTop();
        const home = $('#home').children();
        const about = $('#about #about-content').children();
        const aboutHeight = $('#about').outerHeight(true);
        const aboutOffset = $('#about').offset().top;
        const portofolioOffset = $('#portofolio').offset().top;
        const contact = $('#contact .d-sm-flex').children();
        $(home.first()).css({
            transform: 'translate(0px, ' + windowScroll/3.90 + '%)'
        });

        $(home.next().first()).css({
            transform: 'translate(0px, ' + windowScroll/1.35  + '%)'
        });

        $(home.next().last()).css({
            transform: 'translate(0px, ' + windowScroll/1.10 + '%)'
        });

        if (windowScroll >= aboutOffset - aboutHeight / 2) {
            $(about).first().addClass('show-element');
            $(about).last().children().addClass('show-element');
        }

        if (windowScroll >= portofolioOffset - aboutHeight/2) {
            $('.img-thumbnail').each(function (element) {
                setTimeout(function () {
                    $('.img-thumbnail').eq(element).addClass('show-element');
                }, 250 * (element));
            });
        }

        if (windowScroll >= portofolioOffset + aboutHeight/2) {
            $(contact).first().addClass('show-element');
            $(contact).last().addClass('show-element');
        }
    });

    $('.smooth-scroll').click(function (event) {
        const tujuan = this.hash;
        const navHeight = $('nav').outerHeight(true);
        $('html, body').animate({
            scrollTop: $(tujuan).offset().top - navHeight
        }, 2000);
        event.preventDefault();
    });

    $('.navbar-toggler').click(function () {
        $('.collapse').collapse('toggle');
    });

    $('.my-gambar').click(function (event) {
        const targetModal = '#' + this.nextElementSibling.id;
        $(targetModal).modal();
        event.preventDefault();
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

    $('#contact').mouseenter(function () {
        $('.my-medsos').tooltip();
    });
});

