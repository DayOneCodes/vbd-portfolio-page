
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