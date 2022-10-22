let hei = $('nav').height();

$('main').css('margin',hei+40 + 'px');

let cardWidth = $('.card-item>div:nth-child(2)').width();

$('.card-content-text > h2').css('font-size', cardWidth/100 * 5 + 'px');
