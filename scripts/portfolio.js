import * as useGlobalScope from "./global-variables.js"
import * as outlinerComponent from "./outliner-component.js";
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
const nextOutlineButton = document.getElementById('next-button');
const navListItems = document.querySelectorAll('.nav-list>li>a')


//Default states
useFunction.changeView();
partiesCategory.classList.add('text-bold-purple');
useFunction.animateOnScroll(headerElement, 'header-switch');
switchTo.eventCategory();
window.currentCategory = 'event';


//Animate header color on scroll
document.addEventListener('scroll', () => {
 useFunction.animateOnScroll(headerElement, 'header-switch');


/* For Mobile */
//Toggle hamburger menu color for proper contrast
mobile.hamburgerMenuDivs.forEach((divs) => {
  useFunction.animateOnScroll(divs, 'hamburger-white')
});

/* End of mobile script*/
});


//loop through the navigation list
listItems.forEach((item)=>{
  item.addEventListener('click', () => {

//Toggle the bold text on click to indicate selected list item
  item.classList.add('text-bold-purple');

//Unselect other navigation list items
  useFunction.unselectOtherItems(listItems, item);

    if (item.textContent.trim() === 'EVENT'){
      switchTo.eventCategory();
      window.currentCategory = 'event';
    }

     else if (item.textContent.trim() === 'LIFESTYLE'){
      switchTo.lifestyleCategory();
      window.currentCategory = 'lifestyle';
    }

    else if (item.textContent.trim() === 'PORTRAIT'){
      switchTo.portraitCategory();
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

  //Change the image of the outline section accordingly
  photoDivElement.style.backgroundImage = `${clickedLong ?  window.getComputedStyle(clickedLong).backgroundImage :  window.getComputedStyle(clickedShort).backgroundImage}`

  //Take the image from the outlne section just changed and get its length and width properties
  const currentImageURL = photoDivElement.style.backgroundImage.slice(5, -2);
  const img = new Image ();
  img.src = currentImageURL;
  img.onload = () => {
  
  //Set the proper scaled dimensions for the photo div outlining the image
    if (img.naturalHeight > 1250) {
      const naturalWidth = img.naturalWidth;
      const naturalHeight = img.naturalHeight;

      //scale down to half
      let outlineWidth = naturalWidth / 2.5;
        let outlineHeight = naturalHeight / 2.5;

      if (view === 'mobile'){
         outlineHeight = naturalHeight / 3.5;
         outlineWidth = naturalWidth / 3.5;
      } 
      
      

      photoDivElement.style.width = outlineWidth + 'px';
      photoDivElement.style.height = outlineHeight + 'px';
    }
    else {
    const naturalWidth = img.naturalWidth;
      const naturalHeight = img.naturalHeight;

      //scale down to half
      let outlineWidth = naturalWidth / 2;
      let outlineHeight = naturalHeight / 2;

       if (view === 'mobile'){
         outlineHeight = naturalHeight / 3;
         outlineWidth = naturalWidth / 3;
      } 

        photoDivElement.style.width = outlineWidth + 'px';
        photoDivElement.style.height = outlineHeight + 'px';
    }
  }


  //Fetch photo details from public file using current category
  useFunction.fetchData(`../data/${window.currentCategory}-photos-details.json`)
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
        }
        })
   })
   .catch(err => console.log(`Error: ${err}`))


  //...Then display the outline section
    if  (photoOutliner.style.display === 'none') {
       photoOutliner.style.display = 'flex'
    };
  }
});


//This listens for the specified Query measurement only, it should listen for everything
mobileQuery.addEventListener('change', () => {
  useFunction.changeView()
  photoOutliner.style.display = 'none';
})




