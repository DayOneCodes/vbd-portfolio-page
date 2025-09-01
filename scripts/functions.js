
//Handle unselecting other list items
export function unselectOtherItems (fullList, currentSelectedItem) {
  fullList.forEach((listItem) => {
    if (listItem.innerHTML !== currentSelectedItem.innerHTML) {
      listItem.classList.remove('text-bold-purple')
    };
  });
};

//Handle showcasing selected photos