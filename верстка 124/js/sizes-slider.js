export const sizesSlider = () => {
  new Swiper(".sizes__slider", {
    slidesPerView: "auto",
    centerredSlides: true,
    loop: true,
    mousewheel: {
      forceToAxis: true,
    },
    navigation: {
      prevEL: "sizes__slider-button--prev",
      nextEL: "sizes__slider-button--next",
    },
  });
};
