export default () => {
  let header = document.querySelector(`.js-header`);
  let menuToggler = document.querySelector(`.js-menu-toggler`);
  let menuLinks = document.querySelectorAll(`.js-menu-link`);
  const linkGame = document.querySelector(`#linkGame`);
  const messageField = document.getElementById(`message-field`);
  const linkPizes = document.getElementById(`prizes-link`);
  const blockAnimationFill = document.querySelector(`.animation-fill-screen`);
  const blockPrize = document.getElementById(`prizes`);
  const blockStory = document.getElementById(`story`);
  const classActive = `active`;

  if (menuToggler) {
    menuToggler.addEventListener(`click`, function () {
      if (header.classList.contains(`page-header--menu-opened`)) {
        header.classList.remove(`page-header--menu-opened`);
        document.body.classList.remove(`menu-opened`);
      } else {
        header.classList.add(`page-header--menu-opened`);
        document.body.classList.add(`menu-opened`);
      }
    });
  }

  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener(`click`, function () {
      if (menuLinks[i] === linkGame) {
        setTimeout(()=>{
          messageField.classList.add(classActive);
        }, 100);
      } else {
        messageField.classList.remove(classActive);
      }
      if (window.innerWidth < 1025) {
        header.classList.remove(`page-header--menu-opened`);
        document.body.classList.remove(`menu-opened`);
      }
      if (menuLinks[i] === linkPizes) {
        if (blockStory.classList.contains(classActive)) {
          blockAnimationFill.classList.add(classActive);
          setTimeout(() => {
            blockAnimationFill.classList.remove(classActive);
            blockStory.classList.remove(classActive);
            blockStory.classList.add(`screen--hidden`);
            blockPrize.classList.remove(`screen--hidden`);
            blockPrize.classList.add(classActive);
          }, 700);
        } else {
          blockPrize.classList.remove(`screen--hidden`);
          blockPrize.classList.add(classActive);
        }
        menuLinks[i].classList.add(classActive);
        menuLinks.forEach((link) => {
          if (link !== linkPizes) {
            link.classList.remove(classActive);
          }
        });
      }
    });
  }
};
