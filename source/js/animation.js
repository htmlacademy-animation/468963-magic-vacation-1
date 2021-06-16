export default () => {
  setTimeout(()=>{
    document.querySelector(`.intro__message`).classList.add(`active`);
  }, 1000);
  window.addEventListener(`load`, ()=>{
    const menu = document.querySelector(`#menu`);
    const footer = document.querySelector(`.screen__footer`);
    const label = document.querySelector(`.page-header__logo`);
    const social = document.querySelector(`.page-header__social`);
    menu.classList.remove(`page-header__menu_not-active`);
    footer.classList.remove(`screen__footer_not-active`);
    social.classList.remove(`page-header__social_not-active`);
    label.classList.remove(`page-header__logo_not-active`);
  });
};
