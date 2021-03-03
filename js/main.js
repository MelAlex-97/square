//Slider
const swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  effect: "coverflow",
  speed: 1000,
});
//Gsap portfolio section
const portfolioItems = gsap.utils.toArray('.portfolio__item');
portfolioItems.forEach(item => {
  gsap.to(item, {
    scrollTrigger: {
      trigger: item,
      start: "50px 100%",
      end: "300px 100%",
      scrub: true
    },
    opacity: 1,
    transform: "scale(1)",
    duration: 1
  })
});

//Preloader
$(window).on("load", function () {
  setTimeout(loaded, 1000);
  function loaded() {
    $(".preloader").addClass("loaded");
    //Add animation about-img
    $(".about__img").addClass("img-animation");
  }
  //lightbox 
  if ($("body").hasClass("home")) {
    $(".lb-next").addClass("none");
  }
});
//Main
$(function () {
  const $btnMenu = $(".header__menu-btn"),
    $menuList = $(".header__menu-items"),
    $btnPopupOpen = $(".slider__btn"),
    $btnPopupClose = $(".slider__img-close"),
    $popupInfo = $(".slider__info-popup"),
    $btnPrevPage = $(".blog__control-prev"),
    $btnNextPage = $(".blog__control-next"),
    $pageNumberBlog = $(".blog__control-number"),
    $page = $("html, body"),
    $btnTop = $(".top"),
    $btnMenuItem = $(".header__menu-line"),
    $timeline = $(".timeline__wrap-title"),
    $clients = $(".clients__wrap");

  //Animation
  if ($("body").hasClass("body-animation")) {
    $(window).on("scroll", function () {
      let $scroll = $(window).scrollTop() + $(window).height(),
        $timelineOffset = $timeline.offset().top,
        $clientsOffset = $clients.offset().top;

      if ($scroll > $clientsOffset + 150) {
        $clients.addClass("about__animation");
      }
      if ($scroll > $timelineOffset + 150) {
        $timeline.addClass("about__animation");
      }
    });
  }

  function init() {
    $btnMenu.on("click", menuToggle);
    $btnPopupOpen.on("click", openPopup);
    $btnPopupClose.on("click", closePopup);
    $btnPrevPage.on("click", generationNewPage);
    $btnNextPage.on("click", generationNewPage);
    $pageNumberBlog.on("click", generationNewPage);
    $btnTop.on("click", scrollUp);
  }

  function menuToggle() {
    $menuList.toggleClass("menu--active");
    $btnMenuItem.toggleClass("header__item--active");
  }

  function openPopup() {
    $popupInfo.toggle(500);
  }

  function closePopup() {
    $popupInfo.toggle(500);
  }

  function generationNewPage() {
    $(".news:even").detach().insertAfter(".news:odd");
  }

  function scrollUp() {
    $page.animate({
      scrollTop: 0
    }, 600);
    return false;
  }

  init();
})
