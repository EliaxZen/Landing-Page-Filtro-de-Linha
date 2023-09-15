let menu = document.querySelector('.menu-mobile--img');
let menuContent = document.querySelector('.menu-mobile')

menu.addEventListener('click', () => {
  if(menuContent.style.display == 'flex') {
    menuContent.style.display = 'none';
  } else {
    menuContent.style.display = 'flex';
  }
});