const outlinerSection =  document.getElementById('photo-outline');
const mobileNavElement = document.querySelector('.mobile-nav')



 mobileNavDisplay ();

 mobileQuery.addEventListener('change', () => {
  mobileNavDisplay ();
 });

function mobileNavDisplay () {
   if (window.mobileQuery.matches){
  mobileNavElement.style.display = 'flex';
 }
 else {
  mobileNavElement.style.display = 'none'
 }
};