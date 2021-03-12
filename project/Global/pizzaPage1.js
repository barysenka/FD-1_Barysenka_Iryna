new Swiper ('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
       
    },
    speed:1000,
    effect: 'fade',
    fadeEffect: {
    crossFade: true
  },
});

// var scroll_distance = 150;
// var transparent = true;
// document.addEventListener("scroll", function(){
//    if($(document).scrollTop() > scroll_distance ) {
//        if(transparent) {
//            transparent = false;
//            $('header').removeClass('changeColor');
//        }
//     } else {
//        if( !transparent ) {
//            transparent = true;
//            $('header').addClass('changeColor');
//        }
//      }
//  });

//  window.addEventListener("scroll", function(){
//    if($(document).scrollTop() > scroll_distance ) {
//        if(transparent) {
//            transparent = false;
//            $('header').removeClass('changeColor');
//        }
//     } else {
//        if( !transparent ) {
//            transparent = true;
//            $('header').addClass('changeColor');
//        }
//      }
//  });