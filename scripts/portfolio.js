import * as carousel from "./carousel.js";

const listItems = document.querySelectorAll('.js-unordered-list li');
const headerElement = document.querySelector('header');

//Default states
const partiesCategory = listItems[0];
partiesCategory.classList.add('text-bold-purple')


//Animate header colors
document.addEventListener('scroll', () => {
  if (window.scrollY >= 60){
    headerElement.classList.add('header-switch')
  }
  else {
    headerElement.classList.remove('header-switch')
  }
});


//loop through the navigation list
listItems.forEach((item)=>{
  item.addEventListener('click', () => {

//Toggle the bold text on click to indicate selected list item
  item.classList.toggle('text-bold-purple')

//Unselect other navigation list items
  unselectOtherItems (listItems, item)

  });
});





//FUNCTIONS AREA

//Handle unselecting other list items
function unselectOtherItems (fullList, currentSelectedItem) {
  fullList.forEach((listItem) => {
    if (listItem.innerHTML !== currentSelectedItem.innerHTML) {
      listItem.classList.remove('text-bold-purple')
    };
  });
};

//Handle showcasing selected photos



