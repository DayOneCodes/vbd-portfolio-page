const outlinerSection =  document.getElementById('photo-outline');
const mobileNavElement = document.querySelector('.mobile-nav')

window.outlinerComponent = function () {

 if (window.mobileQuery.matches){
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
      <button id="previous-button" class="js-previous-button">P</button>

      <button id="next-button" class="js-next-button">N</button>     
    </div>

  </div>
  `
 }
 else {
  window.view = 'desktop';

  outlinerSection.innerHTML = 
  `
  <div id="photo-outline-container">  
    <button id="previous-button" class="js-previous-button">P</button>

            <div id="photo-details-container flex-column">
                <div id="photo-div">
                  
                </div>

                <div id="photo-caption">
                  Caption
                </div>
            </div>


    <button id="next-button" class="js-next-button">N</button>     

  </div>
`
 }

};

window.outlinerComponent();


// FUNCTIONS
function createElement (elementName) {
  return document.createElement(elementName);
}