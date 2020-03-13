/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */
$(document).ready(function () {
    $('.smooth-scroll').click(function (event) {
        const tujuan = this.hash;
        const navHeight = $('nav').outerHeight(true);
        $('html, body').animate({
            scrollTop: $(tujuan).offset().top - navHeight
        }, 1000);
        event.preventDefault();
    });

    $('.navbar-toggler').click(function () {
        $('.collapse').collapse('toggle');
    });

    $('.my-gambar').click(function (event) {
        const targetModal = '#' + this.nextElementSibling.id;
        $(targetModal).modal();
        event.preventDefault()
    });

    $('#contact').mouseenter(function () {
        $('.my-medsos').tooltip();
    })
});

