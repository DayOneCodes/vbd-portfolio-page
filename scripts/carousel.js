//Class to handle carousel switching
const rowOne = document.querySelectorAll('.js-column-one>div')
const rowTwo = document.querySelectorAll('.js-column-two>div');
const rowThree = document.querySelectorAll('.js-column-three>div');
const rowFour = document.querySelectorAll('.js-column-four>div');

export class SwitchCarouselTo {
  operate (operation, category) {
    rowOne[0].classList[`${operation}`](`${category}-card-one`);
    rowOne[1].classList[`${operation}`](`${category}-card-two`);
    rowOne[2].classList[`${operation}`](`${category}-card-three`);
    rowOne[3].classList[`${operation}`](`${category}-card-four`);
    rowTwo[0].classList[`${operation}`](`${category}-card-five`);
    rowTwo[1].classList[`${operation}`](`${category}-card-six`);
    rowTwo[2].classList[`${operation}`](`${category}-card-seven`);
    rowTwo[3].classList[`${operation}`](`${category}-card-eight`);
    rowThree[0].classList[`${operation}`](`${category}-card-nine`);
    rowThree[1].classList[`${operation}`](`${category}-card-ten`);
    rowThree[2].classList[`${operation}`](`${category}-card-eleven`);
    rowThree[3].classList[`${operation}`](`${category}-card-twelve`);
    rowFour[0].classList[`${operation}`](`${category}-card-thirteen`);
    rowFour[1].classList[`${operation}`](`${category}-card-fourteen`);
    rowFour[2].classList[`${operation}`](`${category}-card-fifteen`);
  }

  eventCategory (){
    rowOne[0].dataset.cardNumber = 1;
     rowOne[1].dataset.cardNumber = 2;
    rowOne[2].dataset.cardNumber = 3;
    rowOne[3].dataset.cardNumber = 4;
    rowTwo[0].dataset.cardNumber = 5;
    rowTwo[1].dataset.cardNumber = 6;
    rowTwo[2].dataset.cardNumber = 7;
    rowTwo[3].dataset.cardNumber = 8;
    rowThree[0].dataset.cardNumber = 9;
    rowThree[1].dataset.cardNumber = 10;
    rowThree[2].dataset.cardNumber = 11;
    rowThree[3].dataset.cardNumber = 12;
    rowFour[0].dataset.cardNumber = 13;
    rowFour[1].dataset.cardNumber = 14;
    rowFour[2].dataset.cardNumber = 15;
    this.operate('add', 'event');
    this.operate('remove', 'lifestyle');
    this.operate('remove', 'portrait');
    this.operate('remove', 'retro');
  }

  lifestyleCategory () {
    rowOne[1].dataset.cardNumber = 1;
    rowOne[2].dataset.cardNumber = 2;
    rowTwo[2].dataset.cardNumber = 3;
    rowOne[0].dataset.cardNumber = 4;
    rowFour[0].dataset.cardNumber = 7;
    rowThree[0].dataset.cardNumber = 8;
    rowThree[3].dataset.cardNumber = 9;
    rowFour[1].dataset.cardNumber = 10;
    this.operate('add', 'lifestyle');
    this.operate('remove', 'portrait');
    this.operate('remove', 'retro');
    this.operate('remove', 'event');
  }

  portraitCategory () {
    rowOne[1].dataset.cardNumber = 1;
    rowOne[0].dataset.cardNumber = 2;
    rowTwo[1].dataset.cardNumber = 3;
    rowOne[2].dataset.cardNumber = 4;
    rowTwo[2].dataset.cardNumber = 6;
    rowThree[1].dataset.cardNumber = 7;
    rowThree[3].dataset.cardNumber = 8;
    rowThree[2].dataset.cardNumber = 9;
    rowFour[1].dataset.cardNumber = 10;
    rowFour[0].dataset.cardNumber = 11;
    this.operate('add', 'portrait');
    this.operate('remove', 'retro');
    this.operate('remove', 'lifestyle');
    this.operate('remove', 'event');
  }

  retroCategory () {
    rowOne[3].dataset.cardNumber = 1;
    rowOne[2].dataset.cardNumber = 2
    rowTwo[3].dataset.cardNumber = 3
    rowOne[1].dataset.cardNumber = 4;
    rowFour[0].dataset.cardNumber = 7;
    rowFour[1].dataset.cardNumber = 8;
    rowThree[1].dataset.cardNumber = 9
    rowThree[3].dataset.cardNumber = 10
    this.operate('add', 'retro');
    this.operate('remove', 'lifestyle');
    this.operate('remove', 'portrait');
    this.operate('remove', 'event');
  }
}