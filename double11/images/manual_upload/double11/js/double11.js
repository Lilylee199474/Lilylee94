
$(document).ready(function() {

  var swiper = new Swiper('.double11-a .l-swiper', {
    slidesPerView: "auto",
    // freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    observer: true,
    observeParents: true,
    autoHeight: false,
    // centeredSlides: true,
    loop: false,
    slideToClickedSlide: false,
    // effect: "fade",
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: true,
    // },
    navigation: {
        nextEl: '.double11-a .swiper-button-next',
        prevEl: '.double11-a .swiper-button-prev',
    },
    pagination: {
      el: ".double11-a .swiper-pagination",
      clickable: true,
    },
    // breakpoints: {
    //   1141: {
    //     centeredSlides: false,
    //   },
    //   751: {
    //     centeredSlides: true,
    //   },
    //   750: {
    //     centeredSlides: true,
    //   },
    // },
    on: {
      resize: function(){
        this.update();
      },
    },

  });

  // swiper.autoplay.stop();

  // $('.double11-a').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
  //   swiper.autoplay.start();
  // });


  $('.anchor-link').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
  });



  ;
  (function($, win) {
    $.fn.inViewport = function(cb) {
      return this.each(function(i, el) {
        function visPx() {
            var elH = $(el).outerHeight(),
                H = $(win).height(),
                r = el.getBoundingClientRect(),
                t = r.top,
                b = r.bottom;
            return cb.call(el, Math.max(0, t > 0 ? Math.min(elH, H - t) : Math.min(b, H)));
        }
        visPx();
        $(win).on("resize scroll", visPx);
      });
    };

  }(jQuery, window));

  $('#ft').inViewport(function(px) {
      if (px > 0) {
          $('.double11-sticky').addClass('change-bottom');
      } else {
          $('.double11-sticky').removeClass('change-bottom');
      }
  });

  // setInterval(function() {
  //   const $img = $(".double11 .double11-kv .layer-slogan img");
  //   $img.addClass('animated pulse infinite');
    
  //   setTimeout(function() {
  //     $img.removeClass('animated pulse infinite');
  //   }, 2000);
  // }, 4000);


  $(function () {
  const $img = $(".double11 .double11-kv .layer-slogan img");
  const startBreathing = () => $img.addClass("breathing-6s");

  // 等進場動畫結束（含 webkit 前綴）
  $img.closest(".layer-slogan").on("animationend webkitAnimationEnd", function (e) {
    // 只在進場動畫（例如 bounceInUp）結束時啟動一次
    if (/bounceInUp|fadeInRight|fadeInUp|zoomIn/.test(e.originalEvent?.animationName || "")) {
      startBreathing();
    }
  });

  // 若一開始就沒有進場動畫，保險：載入後直接啟動
  setTimeout(() => {
    if (!$img.hasClass("breathing-6s")) startBreathing();
  }, 800);
});

});
