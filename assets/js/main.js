$(document).ready(function ($) {
  // бегущая строка
  $(function () {
    $('.marquee').each(function () {
      $(this).marquee({
        duration: 20000,
        startVisible: true,
        duplicated: true
      });
    })
  });

  function galleryScroll(scroll) {
    let pageT = scroll - $('.gallery-block--big').offset().top;
    let scrollNum = pageT / 2;
    if (pageT > 0) {
      $('.gallery-block--small').scrollTop(scrollNum + scrollNum / 6);
    }
  }

  function activateCardOnScroll(scroll) {
    let projectCard = $('.project__item');
    projectCard.each(function () {
      let cardPos = scroll - $(this).offset().top + $(window).height();
      if (cardPos >= $(window).height() * 0.1 &&
        cardPos <= $(window).height() * 0.99) {
        $(this).addClass('project__item--active');
      } else {
        $(this).removeClass('project__item--active');
      }
    })


  }

  // Форма калькулятор
  $(function () {
    var formTab = $('.form-tab');
    var currentTab = 0;

    function calcForm(n) {
      for (var i = 0; i < formTab.length; i++) {
        if (i === n) {
          $(formTab[i]).removeClass('form-tab--hidden');
        } else {
          $(formTab[i]).addClass('form-tab--hidden');
        }
      }
      if (n > 0) {
        $('.form-tab__back').removeClass('form-tab__back--hidden');
      } else {
        $('.form-tab__back').addClass('form-tab__back--hidden');
      }
      if (n == 4) {
        $('.form-tab-btns').addClass('form-tab-btns--hidden');
      }
    }

    function progressBar(i) {
      var fullWidth = $('.progress-bar').css('width').replace(/[px]/g, '');
      var progress = +fullWidth * (i + 1) / formTab.length;
      $('.progress-bar__status').css('width', `${progress}px`);
    }
    $('.form-tab__btn').on('click', function (e) {
      e.preventDefault();

      currentTab++;
      calcForm(currentTab);
      progressBar(currentTab);
    });
    $('.form-tab__back').on('click', function (e) {
      e.preventDefault();
      currentTab--;
      calcForm(currentTab);
      progressBar(currentTab);
    });
    calcForm(currentTab);
    progressBar(currentTab)
  });

  // Закрыть кнопку обратного звонка
  $(function () {
    $('.order-call__close').on('click', function () {
      $('.order-call').css({
        'opacity': 0,
        'visibility': 'hidden'
      })
    });
  });

  $('.before-after-block').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    draggable: false,
    asNavFor: '.before-after__thumb-slider',
  });
  $('.before-after__thumb-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.before-after-block',
    dots: false,
    draggable: true,
    adaptiveHeight: true,
    arrows: false,
    focusOnSelect: true
  });

  // слайдер сотрудников
  $('.team-slider-single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.team-slider-nav',
    prevArrow: '<button class="team-slider-single__btn team-slider-single__btn--prev"></button>',
    nextArrow: '<button class="team-slider-single__btn team-slider-single__btn--next"></button>'
  });
  $('.team-slider-nav').slick({
    slidesToShow: 14,
    slidesToScroll: 1,
    asNavFor: '.team-slider-single',
    dots: false,
    arrows: false,
    focusOnSelect: true,
    responsive: [{
        breakpoint: 1400,
        settings: {
          slidesToShow: 12,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 10,

        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 7,
          centerMode: true,

        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 5,
          centerMode: true,

        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 3,
          centerMode: true,

        },
      },
    ],
  });

  function resizeSlide() {
    $('.team-slider-nav__item').css('height', `${$('.team-slider-nav__item').width()}px`);
    $('.before-after__thumb-image').css('height', `${$('.before-after__thumb-image').width()}px`);
  }
  resizeSlide();
  $(window).on('resize', resizeSlide)
  // авто слайдер 
  $('.slider-block').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 4000,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    infinite: true,
    swipeToSlide: true,
    pauseOnHover: true,
    focusOnSelect: true,
    centerMode: true,
    variableWidth: true,
    responsive: [{
      breakpoint: 800,
      settings: "unslick",
    }, ],

  })

  //  слайдер с сертификатами
  $('.rewards-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: 'linear',
    arrows: true,
    prevArrow: '<button class="rewards-slider__btn rewards-slider__btn--prev"></button>',
    nextArrow: '<button class="rewards-slider__btn rewards-slider__btn--next"></button>',
    infinite: true,
    swipeToSlide: true,
    responsive: [{
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          variableWidth: true,

        },
      },
    ],
  })


  //  слайдер с партнерами
  $('.partners-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    cssEase: 'linear',
    arrows: true,
    prevArrow: '<button class="partners-slider__btn partners-slider__btn--prev"></button>',
    nextArrow: '<button class="partners-slider__btn partners-slider__btn--next"></button>',
    infinite: true,
    swipeToSlide: true,
    responsive: [{
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          speed: 800,
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: true,
          centerMode: true,
          autoplay: false

        },
      },
    ],
  })

  // lightbox
  $('.rewards-slider__item a').magnificPopup({
    type: 'image'
  });
  $('.parent-sliderm').magnificPopup({
    delegate: '.rewards-slider__item a',
    type: 'image'
  });

  // ДО  ПОСЛЕ
  $('.before-after-block__item').each(function () {
    $(this).beforeAfter();
  });

  // Событие клика 
  $(document).on('click', function (event) {
    var target = event.target;
    if (target.closest('.menu-btn')) {
      $('.menu').addClass('menu--active');
      $('.menu-wrapper').addClass('menu-wrapper--active');
    }
    if (target.closest('.menu-close') || target.closest('.menu__btn')) {
      $('.menu').removeClass('menu--active');
      $('.menu-wrapper').removeClass('menu-wrapper--active');
    }
    if (target.closest('.callback')) {
      event.preventDefault();
      $('#popupCallback1').addClass('popup--active');
      $('#popupCallback1 .popup-callback__wrapper').addClass('popup-callback__wrapper--active');
      $('#popupCallback1 .popup-callback__image').addClass('popup-callback__image--active');
    }
    if (target.closest('.gallery-block__btn')) {
      $('#popupCallback2').addClass('popup--active');
      $('#popupCallback2 .popup-callback__wrapper').addClass('popup-callback__wrapper--active');
    }
    if (target.closest('.callback-btn-2')) {
      $('#popupCallback3').addClass('popup--active');
      $('#popupCallback3 .popup-callback__wrapper').addClass('popup-callback__wrapper--active');
    }
    if (target.closest('.pricelist-item__btn--first')) {
      $('#popupCallback3').addClass('popup--active');
      $('#popupCallback3 .popup-callback__wrapper').addClass('popup-callback__wrapper--active');
    }
    if (target.closest('.popup-close')) {
      $('.popup-callback__wrapper').removeClass('popup-callback__wrapper--active')
      $('.popup').removeClass('popup--active');
      $('.popup-callback__image').removeClass('popup-callback__image--active');
    }
    if (target.closest('.slider-block__card-btn')) {
      $('.popup-calculator').addClass('popup--active');
    }

  });

  // попап табы
  var tabsItem = $(".popup-tab__block-item");
  var contentItem = $(".popup-tab__content");
  var btns = $('.pricelist-item__card-btn');

  tabsItem.on("click", function (event) {
    var activeContent = $(this).attr("data-target");
    tabsItem.removeClass("popup-tab__block-item--active");
    contentItem.removeClass("popup-tab__content--active");
    $(activeContent).addClass("popup-tab__content--active");
    $(this).addClass("popup-tab__block-item--active");
  });
  btns.each(function (i, item) {
    $(item).on('click', function () {
      $('.popup-tab').addClass('popup--active');
      tabsItem.removeClass("popup-tab__block-item--active");
      contentItem.removeClass("popup-tab__content--active");
      $(tabsItem[i]).addClass("popup-tab__block-item--active");
      $(contentItem[i]).addClass("popup-tab__content--active");
    })
  })

  $(window).on('scroll', function () {
    galleryScroll(this.scrollY);
    activateCardOnScroll(this.scrollY);
    return false;
  });
  jQuery.event.special.touchstart = {
    setup: function (_, ns, handle) {
      this.addEventListener("touchstart", handle, {
        passive: !ns.includes("noPreventDefault")
      });
    }
  };
  jQuery.event.special.touchmove = {
    setup: function (_, ns, handle) {
      this.addEventListener("touchmove", handle, {
        passive: !ns.includes("noPreventDefault")
      });
    }
  };
  jQuery.event.special.wheel = {
    setup: function (_, ns, handle) {
      this.addEventListener("wheel", handle, {
        passive: true
      });
    }
  };
  jQuery.event.special.mousewheel = {
    setup: function (_, ns, handle) {
      this.addEventListener("mousewheel", handle, {
        passive: true
      });
    }
  };
});

// Воспроизведение видео
const youtube = () => {
  function findVideos() {
    let videos = document.querySelectorAll('.video-item');

    for (let i = 0; i < videos.length; i++) {
      setupVideo(videos[i]);
    }
  }

  function setupVideo(video) {
    const link = video.querySelector('.video-item__link'),
      media = video.querySelector('.video-item__media'),
      button = video.querySelector('.video-item__btn'),
      title = video.querySelector('.video-item__title'),
      id = parseMediaURL(media);
    // console.log(media);
    video.addEventListener('click', () => {
      let iframe = createIframe(id);
      link.remove();
      button.remove();
      video.appendChild(iframe);
      video.classList.add('video-item--enabled');
      title.classList.add('video-item__title--hidden')
    });

    link.removeAttribute('href');

  }

  function parseMediaURL(media) {
    let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
    let url = media.src;
    let match = url.match(regexp);
    return match[1];
  }

  function createIframe(id) {
    let iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', generateURL(id));
    iframe.classList.add('video-item__media');

    return iframe;
  }

  function generateURL(id) {
    let query = '?rel=0&showinfo=0&autoplay=1';
    return 'https://www.youtube.com/embed/' + id + query;
  }

  findVideos();
}
youtube();

// range input custom
function Slider(slider) {
  this.slider = slider;
  slider.addEventListener('input', function () {
    this.updateSliderOutput();
    this.updateSliderLevel();
    if (slider.id === 'range') this.getValue('#square');
    if (slider.id === 'range2') this.getValue('#square2');

  }.bind(this), false);

  this.level = function () {
    let level = this.slider.querySelector('.range-input');
    return level.value;
  }

  this.levelString = function () {
    return parseInt(this.level());
  }

  this.updateSliderOutput = function () {
    let thumb = this.slider.querySelector('.range-thumb');
    thumb.style.left = this.levelString() + '%';
  }

  this.updateSliderLevel = function () {
    let level = this.slider.querySelector('.range-level');
    level.style.width = this.levelString() + '%';
  }

  this.getValue = function (id) {
    const squareInput = document.querySelector(id);
    squareInput.value = this.level();
  }
}
let volumeSlider = document.getElementById('range');
let volumeSlider2 = document.getElementById('range2');

const startRange = new Slider(volumeSlider);
const startRange2 = new Slider(volumeSlider2);
startRange.getValue('#square');
startRange.getValue('#square2');