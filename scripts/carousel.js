//Class to handle carousel switching
const rowOne = document.querySelectorAll('.js-column-one>div')
const rowTwo = document.querySelectorAll('.js-column-two>div');
const rowThree = document.querySelectorAll('.js-column-three>div');
const rowFour = document.querySelectorAll('.js-column-four>div');

export class SwitchCarouselTo {
  test (){
    console.log('testig confirmed')
    rowOne[0].classList.remove('jobs-card-one');
    rowOne[1].classList.remove('jobs-card-two');
    rowOne[2].classList.remove('jobs-card-three');
    rowOne[3].classList.remove('jobs-card-four');
    rowTwo[0].classList.remove('jobs-card-five');
    rowTwo[1].classList.remove('jobs-card-six');
    rowTwo[2].classList.remove('jobs-card-seven');
    rowTwo[3].classList.remove('jobs-card-eight');
  }

  jobsCategory () {
    rowOne[0].classList.add('jobs-card-one');
    rowOne[1].classList.add('jobs-card-two');
    rowOne[2].classList.add('jobs-card-three');
    rowOne[3].classList.add('jobs-card-four');
    rowTwo[0].classList.add('jobs-card-five');
    rowTwo[1].classList.add('jobs-card-six');
    rowTwo[2].classList.add('jobs-card-seven');
    rowTwo[3].classList.add('jobs-card-eight');
  }

  personalPhotosCategory () {

  }

  retroCategory () {

  }
}