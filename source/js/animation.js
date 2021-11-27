export default () => {
  setTimeout(()=>{
    document.querySelector(`.intro__message`).classList.add(`active`);
  }, 1000);

  window.addEventListener(`load`, ()=>{
    const menu = document.querySelector(`#menu`);
    const footer = document.querySelector(`.screen__footer`);
    const label = document.querySelector(`.page-header__logo`);
    const social = document.querySelector(`.social-block__toggler`);
    menu.classList.add(`page-header__menu_active`);
    footer.classList.add(`screen__footer_active`);
    social.classList.add(`active-social`);
    label.classList.add(`page-header__logo_active`);
  });
};
