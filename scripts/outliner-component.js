const outlinerSection =  document.getElementById('photo-outline');
const mobileNavElement = document.querySelector('.mobile-nav')


window.view = undefined;

 if (window.matchMedia("(max-width: 600px)").matches){
  window.view = 'mobile';
  mobileNavElement.style.display = 'flex';

  outlinerSection.innerHTML = 

  `
<div id="photo-outline-container">  

    <div id="photo-details-container flex-column">
        <div id="photo-div">
          
        </div>

        <div id="photo-caption">
          Caption
        </div>
    </div>

    <div class="outline-buttons">
      <button id="previous-button" class="js-previous-button">Previous</button>

      <button id="next-button" class="js-next-button">Next</button>     
    </div>

  </div>
  `
 }
 else {
  window.view = 'desktop';

  outlinerSection.innerHTML = 
  `
  <div id="photo-outline-container">  
    <button id="previous-button" class="js-previous-button">Previous</button>

            <div id="photo-details-container flex-column">
                <div id="photo-div">
                  
                </div>

                <div id="photo-caption">
                  Caption
                </div>
            </div>


    <button id="next-button" class="js-next-button">Next</button>     

  </div>
`
 }
