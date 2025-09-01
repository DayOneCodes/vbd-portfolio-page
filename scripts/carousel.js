//Class to handle carousel switching
const rowOne = document.querySelectorAll('.js-column-one>div')
const rowTwo = document.querySelectorAll('.js-column-two>div');
const rowThree = document.querySelectorAll('.js-column-three>div');
const rowFour = document.querySelectorAll('.js-column-four>div');

export class SwitchCarouselTo {
  test (){
    console.log('testig confirmed')
  }

  jobsCategory () {
    rowOne[0].classList.add('jobs-card-one')
    rowOne[1].classList.add('jobs-card-two')
    rowOne[2].classList.add('jobs-card-three')
    rowOne[3].classList.add('jobs-card-four')
  }

  personalPhotosCategory () {

  }

  retroCategory () {

  }
}