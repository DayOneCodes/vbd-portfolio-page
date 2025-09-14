const photoOutliner = document.getElementById('photo-outline');
const previousBtnElement = document.getElementById('previous-button');
const nextBtnElement = document.getElementById('next-button');

const captionDiv = document.getElementById('photo-caption');

photoOutliner.addEventListener('click', (event) => {
  console.log('Click confirmed successfully: ON OUTLINE SECTION')

  console.log(event.target)

// Check that the click wasn't on the buttons. If it isn't, then close the outline section.
  if (!previousBtnElement.contains(event.target) && !nextBtnElement.contains(event.target)){
    photoOutliner.style.display = 'none';
    captionDiv.innerText = '';
  }

  if (previousBtnElement.contains(event.target)){
    console.log('Click confirmed on previous button')
  }
  else if (nextBtnElement.contains(event.target)){
    
  }
})
