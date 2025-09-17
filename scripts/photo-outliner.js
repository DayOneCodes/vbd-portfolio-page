const photoOutliner = document.getElementById('photo-outline');
const previousBtnElement = document.getElementById('previous-button');
const nextBtnElement = document.getElementById('next-button');
const photoDiv = document.getElementById('photo-div');
const captionDiv = document.getElementById('photo-caption');

window.currentCard = 0;

photoOutliner.addEventListener('click', async (event) => {
  console.log('Click confirmed successfully: ON OUTLINE SECTION')

  console.log(event.target)

// Check that the click wasn't on the buttons. If it isn't, then close the outline section.
  if (!previousBtnElement.contains(event.target) && !nextBtnElement.contains(event.target)){
    photoOutliner.style.display = 'none';
    captionDiv.innerText = '';
  }

  if (previousBtnElement.contains(event.target)) {

      if (window.currentCard === 1) {
        window.currentCard = window.currentCard;
      } else if (window.currentCard === 2) {
        previousBtnElement.style.opacity = 0.3;
        window.currentCard -= 1;
      }
      else {
        window.currentCard -= 1;
        nextBtnElement.style.opacity = '1';
      }
      const details = await updatePhotoDetails(window.currentCard);
      photoDiv.style.backgroundImage = `url("${details.url}")`;
      captionDiv.innerText = details.caption;

  }
  else if (nextBtnElement.contains(event.target)){
    
      if (nextBtnElement.style.opacity === '0.3') {
        window.currentCard === window.currentCard;
      } else {
        window.currentCard += 1;
      }

      const details = await updatePhotoDetails(window.currentCard);
      photoDiv.style.backgroundImage = `url("${details.url}")`;
      previousBtnElement.style.opacity = 1;
      captionDiv.innerText = details.caption;

      if (details.length === currentCard){
        nextBtnElement.style.opacity = '0.3';
      }  

      
  }
});




async function updatePhotoDetails (num) {
    try {
      const response = await fetch (`../public/${window.currentCategory}-photos-details.json`)
      if (!response.ok){
            throw new Error (`${response.status}`);
          }

          const res = await response.json();

        let url = '';
        let caption = '';
    
        const dataArray =  Object.entries(res)

        dataArray
          .forEach((photoItem) => {
          if (Number(photoItem[1].cardNumber) === num){
            url = photoItem[1].url;
            caption = photoItem[1].caption;

          }
        });

        return {length: dataArray.length, url, caption};
    }

    catch (err) {
      console.error(`Fetch Error`, err);
      return {
      url: '', caption: ''};
    }
};
