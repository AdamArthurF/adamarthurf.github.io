/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */



$('.smooth-scroll').on('click', function (event) {
    const tujuan = this.hash;
    const navHeight = $('nav').height();
    $('html, body').animate({
        scrollTop: $(tujuan).offset().top - navHeight
    }, 1000);
    event.preventDefault();
});

