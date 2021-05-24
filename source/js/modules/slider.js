import Swiper from "swiper";

export default () => {
  let storySlider;
  const storyOne = document.querySelectorAll(`.story_one`);
  const storyTwo = document.querySelectorAll(`.story_two`);
  const storyThird = document.querySelectorAll(`.story_third`);
  const storyFour = document.querySelectorAll(`.story_four`);
  const allStories = document.querySelectorAll(`.slider__item-text`);
  let sliderContainer = document.getElementById(`story`);
  sliderContainer.style.backgroundImage = `url("img/slide1.jpg"), linear-gradient(180deg, rgba(83, 65, 118, 0) 0%, #523E75 16.85%)`;
  allStories.forEach((item) => {
    item.classList.remove(`active_story`);
  });
  storyOne.forEach((item) => {
    setTimeout(()=>{
      item.classList.add(`active_story`);
    }, 500);
  });

  const setSlider = function () {
    if (((window.innerWidth / window.innerHeight) < 1) || window.innerWidth < 769) {
      storySlider = new Swiper(`.js-slider`, {
        pagination: {
          el: `.swiper-pagination`,
          type: `bullets`
        },
        keyboard: {
          enabled: true
        },
        on: {
          slideChange: () => {

            if (storySlider.activeIndex === 0 || storySlider.activeIndex === 1) {
              sliderContainer.style.backgroundImage = `url("img/slide1.jpg"), linear-gradient(180deg, rgba(83, 65, 118, 0) 0%, #523E75 16.85%)`;
              allStories.forEach((item) => {
                item.classList.remove(`active_story`);
              });
              storyOne.forEach((item) => {
                setTimeout(()=>{
                  item.classList.add(`active_story`);
                }, 500);
              });
            } else if (storySlider.activeIndex === 2 || storySlider.activeIndex === 3) {
              sliderContainer.style.backgroundImage = `url("img/slide2.jpg"), linear-gradient(180deg, rgba(45, 54, 179, 0) 0%, #2A34B0 16.85%)`;
              allStories.forEach((item) => {
                item.classList.remove(`active_story`);
              });
              storyTwo.forEach((item) => {
                item.classList.add(`active_story`);
              });
            } else if (storySlider.activeIndex === 4 || storySlider.activeIndex === 5) {
              sliderContainer.style.backgroundImage = `url("img/slide3.jpg"), linear-gradient(180deg, rgba(92, 138, 198, 0) 0%, #5183C4 16.85%)`;
              allStories.forEach((item) => {
                item.classList.remove(`active_story`);
              });
              storyThird.forEach((item) => {
                item.classList.add(`active_story`);
              });
            } else if (storySlider.activeIndex === 6 || storySlider.activeIndex === 7) {
              sliderContainer.style.backgroundImage = `url("img/slide4.jpg"), linear-gradient(180deg, rgba(45, 39, 63, 0) 0%, #2F2A42 16.85%)`;
              allStories.forEach((item) => {
                item.classList.remove(`active_story`);
              });
              storyFour.forEach((item) => {
                item.classList.add(`active_story`);
              });
            }
          },
          resize: () => {
            storySlider.update();
          }
        },
        observer: true,
        observeParents: true
      });
    } else {
      storySlider = new Swiper(`.js-slider`, {
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          el: `.swiper-pagination`,
          type: `fraction`
        },
        navigation: {
          nextEl: `.js-control-next`,
          prevEl: `.js-control-prev`,
        },
        keyboard: {
          enabled: true
        },
        on: {
          slideChange: () => {
            if (storySlider.activeIndex === 0) {
              sliderContainer.style.backgroundImage = `url("img/slide1.jpg")`;
              allStories.forEach((item) => {
                item.classList.remove(`active_story`);
              });
              storyOne.forEach((item) => {
                setTimeout(()=>{
                  item.classList.add(`active_story`);
                }, 500);
              });
            } else if (storySlider.activeIndex === 2) {
              allStories.forEach((item) => {
                item.classList.remove(`active_story`);
              });
              storyTwo.forEach((item) => {
                setTimeout(()=>{
                  item.classList.add(`active_story`);
                }, 500);
              });
              sliderContainer.style.backgroundImage = `url("img/slide2.jpg")`;
            } else if (storySlider.activeIndex === 4) {
              sliderContainer.style.backgroundImage = `url("img/slide3.jpg")`;
              allStories.forEach((item) => {
                item.classList.remove(`active_story`);
              });
              storyThird.forEach((item) => {
                setTimeout(()=>{
                  item.classList.add(`active_story`);
                }, 500);
              });
            } else if (storySlider.activeIndex === 6) {
              sliderContainer.style.backgroundImage = `url("img/slide4.jpg")`;
              allStories.forEach((item) => {
                item.classList.remove(`active_story`);
              });
              storyFour.forEach((item) => {
                setTimeout(()=>{
                  item.classList.add(`active_story`);
                }, 500);
              });
            }
          },
          resize: () => {
            storySlider.update();
          }
        },
        observer: true,
        observeParents: true
      });
    }
  };

  window.addEventListener(`resize`, function () {
    if (storySlider) {
      storySlider.destroy();
    }
    setSlider();
  });

  setSlider();
};
