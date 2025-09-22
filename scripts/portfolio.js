import * as carousel from "./carousel.js";
import * as useFunction from "./functions.js";
import * as photoOutlineScript from "./photo-outliner.js";
import * as mobile from "./mobile.js";

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
const prevOutlineButton = document.getElementById('previous-button');
const nextOutlineButton = document.getElementById('next-button')



//Default states
partiesCategory.classList.add('text-bold-purple');
useFunction.animateOnScroll(headerElement, 'header-switch');
switchTo.partiesCategory();
window.currentCategory = 'parties';



//Animate header color on scroll
document.addEventListener('scroll', () => {
 useFunction.animateOnScroll(headerElement, 'header-switch');

/* For Mobile */
//Toggle hamburger menu color for proper contrast
mobile.hamburgerMenuDivs.forEach((divs) => {
  useFunction.animateOnScroll(divs, 'hamburger-white')
})

/* End of mobile script*/
});


//loop through the navigation list
listItems.forEach((item)=>{
  item.addEventListener('click', () => {

//Toggle the bold text on click to indicate selected list item
  item.classList.add('text-bold-purple');

//Unselect other navigation list items
  useFunction.unselectOtherItems(listItems, item);

    if (item.textContent.trim() === 'PARTIES'){
      switchTo.partiesCategory();
      window.currentCategory = 'parties';
    }

     else if (item.textContent.trim() === 'LIFESTYLE'){
      switchTo.lifestyleCategory();
      window.currentCategory = 'lifestyle';
    }

    else if (item.textContent.trim() === 'PORTRAIT'){
      switchTo.personalPhotosCategory();
      window.currentCategory = 'portrait';
    }
    else if (item.textContent.trim() === 'RETRO'){
      switchTo.retroCategory();
      window.currentCategory = 'retro';
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

  //Take the image from the outlne section just changed and get its length and width properties
  const currentImageURL = photoDivElement.style.backgroundImage.slice(5, -2);
  const img = new Image ();
  img.src = currentImageURL;
  img.onload = () => {
  
  //Set the proper scaled dimensions for the photo div outlining the image
    if (img.naturalHeight > 1250) {
      photoDivElement.style.width =  `${img.naturalWidth/2.5}px`;
      photoDivElement.style.height = `${img.naturalHeight/2.5}px`;
    }
    else {
      photoDivElement.style.width =  `${img.naturalWidth/2}px`;
      photoDivElement.style.height = `${img.naturalHeight/2}px`;
    }
  }


  //Fetch photo details from public file using current category
  useFunction.fetchData(`../public/${window.currentCategory}-photos-details.json`)
   .then((data) => {
     const dataArray = Object.entries(data);
     const  cardNumberClicked = clickedLong ? clickedLong.dataset.cardNumber: clickedShort.dataset.cardNumber; 

  //Check for start and end of photo list and adjust button opacity
    if (Number(cardNumberClicked) === 1) {
      prevOutlineButton.style.opacity = '0.3';
    } 
    else if (Number(cardNumberClicked) === dataArray.length) {
      nextOutlineButton.style.opacity = '0.3';
    } else if (Number(cardNumberClicked) !== 1 && Number(cardNumberClicked) !== dataArray.length) {
      prevOutlineButton.style.opacity = '1';
      nextOutlineButton.style.opacity = '1';
    }

     dataArray
        .forEach((cardDetails) => {

  //Check which of the photos' number corresponds to the card Number of the card  clicked
        const cardNumberJSON = cardDetails[1].cardNumber;


        if (Number (cardNumberClicked) === cardNumberJSON) {
  //change the caption
          captionDiv.innerText = cardDetails[1].caption

  //update the current card being viewed/oulined
          window.currentCard = cardDetails[1].cardNumber;
          console.log(`card successfully changed to: ${window.currentCard}`)
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
 












