export default () => {
  let socialBlock = document.querySelector(`.js-social-block`);
  socialBlock.addEventListener(`mouseover`, function () {
    socialBlock.classList.add(`social-block--active`);
    document.querySelector(`.social-block__list`).classList.remove(`display-none`);
    document.querySelectorAll(`.social-block__link`).forEach((item) => {
      item.classList.add(`active-link`);
      item.classList.remove(`transition-delay`);
    });
  });
  socialBlock.addEventListener(`mouseout`, function () {
    socialBlock.classList.remove(`social-block--active`);
    document.querySelectorAll(`.social-block__link`).forEach((item) => {
      item.classList.remove(`active-link`);
      item.classList.add(`transition-delay`);
    });
    document.querySelector(`.social-block__list`).classList.add(`display-none`);
  });
  socialBlock.addEventListener(`click`, ()=>{
    socialBlock.classList.add(`social-block--active`);
    document.querySelectorAll(`.social-block__link`).forEach((item) => {
      item.classList.add(`active-link`);
      item.classList.remove(`transition-delay`);
    });
    document.querySelector(`.social-block__list`).classList.remove(`display-none`);
  });
};
