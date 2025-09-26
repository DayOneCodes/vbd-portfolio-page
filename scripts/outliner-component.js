const outlinerSection =  document.getElementById('photo-outline');
const mobileNavElement = document.querySelector('.mobile-nav')



 mobileNavDisplay ();

 mobileQuery.addEventListener('change', () => {
  mobileNavDisplay ();
 })

// FUNCTIONS
function createElement (elementName) {
  return document.createElement(elementName);
}


function mobileNavDisplay () {
   if (window.mobileQuery.matches){
  mobileNavElement.style.display = 'flex';
 }
 else {
  mobileNavElement.style.display = 'none'
 }
}