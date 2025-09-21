export const hamburgerMenuElement = document.querySelector('.hamburger-menu');
export const hamburgerMenuDivs = document.querySelectorAll('.hamburger-menu>div');
window.onMobileView = false;

console.log(hamburgerMenuDivs, hamburgerMenuElement)

// Confirm that pag ei scurrently rendereed in mobile view

if (window.getComputedStyle(hamburgerMenuElement).display  === 'flex') {
  window.onMobileView = true;
}

console.log(window.onMobileView)