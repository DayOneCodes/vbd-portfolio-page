
//Handle unselecting other list items
export function unselectOtherItems (fullList, currentSelectedItem) {
  fullList.forEach((listItem) => {
    if (listItem.innerHTML !== currentSelectedItem.innerHTML) {
      listItem.classList.remove('text-bold-purple')
    };
  });
};

//Handle scroll animations. 
export function animateOnScroll (elementToAnimate, animationClass) {
   if (window.scrollY >= 40){
    elementToAnimate.classList.add(`${animationClass}`)
  }
  else {
    elementToAnimate.classList.remove(`${animationClass}`)
  }
}


//Handle fetching data from public folder

export async function fetchData (url) {
  try {
      const response = await fetch (url);

      //Check if the request was successful
      if (!response.ok){
        throw new Error(`${response.status}`)
      }

      const data = await response.json();
      return data;
  }
  catch (error) {
      throw error;
  }
}

//Monitor viewing device/screen size
export function changeView () {
  if (mobileQuery.matches) {
    window.view = 'mobile'
  }
  else {
    window.view = 'desktop'
  }
} 
