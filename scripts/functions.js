
//Handle unselecting other list items
export function unselectOtherItems (fullList, currentSelectedItem) {
  fullList.forEach((listItem) => {
    if (listItem.innerHTML !== currentSelectedItem.innerHTML) {
      listItem.classList.remove('text-bold-purple')
    };
  });
};

//Handle animating the header background color
export function animateHeader (headerElement) {
   if (window.scrollY >= 60){
    headerElement.classList.add('header-switch')
  }
  else {
    headerElement.classList.remove('header-switch')
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

