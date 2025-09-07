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

  partiesCategory (){
    this.operate('remove', 'jobs');
    this.operate('remove', 'personal');
    this.operate('remove', 'retro');
  }

  jobsCategory () {
    this.operate('add', 'jobs');
    this.operate('remove', 'personal');
    this.operate('remove', 'retro');
  }

  personalPhotosCategory () {
    this.operate('add', 'personal');
    this.operate('remove', 'retro');
    this.operate('remove', 'jobs');
  }

  retroCategory () {
    this.operate('add', 'retro');
    this.operate('remove', 'jobs');
    this.operate('remove', 'personal');
  }
}