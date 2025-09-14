import * as carousel from "./carousel.js";
import * as useFunction from "./functions.js";
import * as photoOutlineScript from "./photo-outliner.js";

const listItems = document.querySelectorAll('.js-unordered-list li');
  const partiesCategory = listItems[0];
  const jobsCategory = listItems[1];
  const personalPhotosCategory = listItems[2];
  const retroCategory = listItems[3];
const headerElement = document.querySelector('header');
const switchTo = new carousel.SwitchCarouselTo;
const shortCards = document.querySelectorAll('.card-short');
const longCards = document.querySelectorAll('.card-long');
const photoOutliner = document.getElementById('photo-outline');
const photoDivElement = document.getElementById('photo-div');
const captionDiv = document.getElementById('photo-caption');



//Default states
partiesCategory.classList.add('text-bold-purple');
useFunction.animateHeader(headerElement);
switchTo.partiesCategory();
let currentCategory = 'parties';



//Animate header color on scroll
document.addEventListener('scroll', () => {
 useFunction.animateHeader(headerElement);
});


//loop through the navigation list
listItems.forEach((item)=>{
  item.addEventListener('click', () => {

//Toggle the bold text on click to indicate selected list item
  item.classList.add('text-bold-purple');

//Unselect other navigation list items
  useFunction.unselectOtherItems(listItems, item);

  
    if (item.textContent.trim() === 'JOBS'){
      switchTo.jobsCategory();
      currentCategory = 'jobs';
    }

    else if (item.textContent.trim() === 'PARTIES'){
      switchTo.partiesCategory();
      currentCategory = 'parties';
    }

    else if (item.textContent.trim() === 'PERSONAL PHOTOS'){
      switchTo.personalPhotosCategory();
      currentCategory = 'personal photos';
    }
    else if (item.textContent.trim() === 'RETRO'){
      switchTo.retroCategory();
      currentCategory = 'retro';
    }
  

  });
});



//DISPLAY OUTLINE OF AN IMAGE ON CLICK

//Listen for click on the body
document.body.addEventListener('click', (event) => {

//Assign the clicked card a variable, if any.
  const clickedShort = Array.from(shortCards).find(card => card.contains(event.target));
  const clickedLong = Array.from(longCards).find(card => card.contains(event.target));

  //If the click was on a card..; 
  if (clickedLong || clickedShort) {
    console.log('Clicked confirmation successful: ON CARD')

  //Change the image of the outline section accordingly
  photoDivElement.style.backgroundImage = `${clickedLong ?  window.getComputedStyle(clickedLong).backgroundImage :  window.getComputedStyle(clickedShort).backgroundImage}`
  console.log('Image changed accordingly')

  //Fetch photo details from public file using current category
  useFunction.fetchData(`../public/${currentCategory}-photos-details.json`)
   .then((data) => {
      Object.entries(data)
        .forEach((cardDetails) => {

  //Check which of the photos' number corresponds to the card Number of the card  clicked

        const  cardNumberClicked = clickedLong ? clickedLong.dataset.cardNumber: clickedShort.dataset.cardNumber;
        const cardNumberJSON = cardDetails[1].cardNumber;

        if (Number (cardNumberClicked) === cardNumberJSON) {
          //change the caption
          captionDiv.innerText = cardDetails[1].caption
        }
        })
   })
   .catch(err => console.log(`Error: ${err}`))


  //...Then display the outline section
    if  (photoOutliner.style.display === 'none') {
       photoOutliner.style.display = 'flex'
    };
    console.log('Outline Section displayed successfully')
  }
});
 












