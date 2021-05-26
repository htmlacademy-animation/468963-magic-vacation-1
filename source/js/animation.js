export default () => {
  setTimeout(()=>{
    document.querySelector(`.intro__message`).classList.add(`active`);
  }, 500);
};
