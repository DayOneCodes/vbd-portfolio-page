export const hamburgerMenuElement = document.querySelector('.hamburger-menu');
export const hamburgerMenuDivs = document.querySelectorAll('.hamburger-menu>div');
export const mobileNavElement = document.querySelector('.mobile-nav')
window.onMobileView = false;

console.log(hamburgerMenuDivs, hamburgerMenuElement)

// Confirm that pag ei scurrently rendereed in mobile view

if (window.getComputedStyle(hamburgerMenuElement).display  === 'flex') {
  window.onMobileView = true;
}

 //On click of the hamburger menu...
hamburgerMenuElement.addEventListener('click', () => {


//... animate the hamburger menu divs
  hamburgerMenuDivs[0].classList.toggle('hamburger-1');
  hamburgerMenuDivs[1].classList.toggle('hamburger-2');
  hamburgerMenuDivs[2].classList.toggle('hamburger-3');

//...Display the navbar
  mobileNavElement.classList.toggle('mobile-nav-display')

})

