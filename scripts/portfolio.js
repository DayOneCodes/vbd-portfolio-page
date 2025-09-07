import * as carousel from "./carousel.js";
import * as useFunction from "./functions.js"

const listItems = document.querySelectorAll('.js-unordered-list li');
  const partiesCategory = listItems[0];
  const jobsCategory = listItems[1];
  const personalPhotosCategory = listItems[2];
  const retroCategory = listItems[3];
const headerElement = document.querySelector('header');
const switchTo = new carousel.SwitchCarouselTo;


//Default states
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
  item.classList.toggle('text-bold-purple');

//Unselect other navigation list items
  useFunction.unselectOtherItems(listItems, item);

  
    if (item.textContent.trim() === 'JOBS'){
      switchTo.jobsCategory();
    }

    else if (item.textContent.trim() === 'PARTIES'){
      switchTo.partiesCategory();
    }

    else if (item.textContent.trim() === 'PERSONAL PHOTOS'){
      switchTo.personalPhotosCategory();
    }
    else if (item.textContent.trim() === 'RETRO'){
      switchTo.retroCategory();
    }
  

  });
});












