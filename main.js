//Add targeting variables below
var activityInputForm = document.querySelector('form');
var timerBoxWrapper = document.querySelector('.timer-box-wrapper');
var categoryBoxWrapper = document.querySelector('.category-box-wrapper');
var studyBox = document.querySelector('.study-box');
var studyImage = document.querySelector('.study-image');
var studyImageActive = document.querySelector('.study-image-active');
var meditateBox = document.querySelector('.meditate-box');
var meditateImage = document.querySelector('.meditate-image');
var meditateImageActive = document.querySelector('.meditate-image-active');
var exerciseBox = document.querySelector('.exercise-box');
var exerciseImage = document.querySelector('.exercise-image');
var exerciseImageActive = document.querySelector('.exercise-image-active');
var accomplishInput = document.querySelector('#accomplishInput');
var minutesInput = document.querySelector('#minutesInput');
var secondsInput = document.querySelector('#secondsInput');
var startActivityButton = document.querySelector('.start-button');


var currentActivity;
//currentActivity will get pushed to pastActivities array when property "completed" is marked true
var pastActivities = [];

//Add event listeners below
categoryBoxWrapper.addEventListener('click', activateCategory);
startActivityButton.addEventListener('click', submitForm);

//Add functions below
function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

function submitForm() {
  event.preventDefault();
  if (checkInputValidity()) {
    createNewActivity();
    hide(activityInputForm);
    show(timerBoxWrapper);
  }
}

function checkInputValidity() {
  //Add validation conditional here for activity boxes to make sure one is clicked
  if (!accomplishInput.value) {
     alert('Please enter description');
     return false;
  } else if (!minutesInput.value || isNaN(minutesInput.value)) {
     alert('Please enter valid minutes input');
     return false;
  } else if (!secondsInput.value || isNaN(secondsInput.value) || secondsInput.value > 59) {
     alert(`Please enter valid seconds input`);
     return false;
  } else {
      return true;
  }
}

function createNewActivity() {
  //"Exercise" is a placeholder for category box input
  currentActivity = new Activity("Exercise", accomplishInput.value, minutesInput.value, secondsInput.value);
  console.log(currentActivity);
  //save activities in localStorage or array??
}

function activateCategory(event) {
  if (event.target.classList.contains('study-box') ||
    event.target.classList.contains('study-image')) {
    selectStudyBox();
    console.log(studyBox.innerText);
    return studyBox.innerText;
  } else if (event.target.classList.contains('meditate-box')||
    event.target.classList.contains('meditate-image')) {
    selectMeditateBox();
    console.log(meditateBox.innerText);
    return meditateBox.innerText;
  } else if (event.target.classList.contains('exercise-box')||
    event.target.classList.contains('exercise-image')) {
    selectExerciseBox();
    console.log(exerciseBox.innerText);
    return exerciseBox.innerText;
  }
}

function selectStudyBox() {
  studyImage.classList.toggle('hidden');
  studyImageActive.classList.toggle('hidden');
  studyBox.classList.toggle('study-active');
  show(meditateImage);
  hide(meditateImageActive);
  meditateBox.classList.remove('meditate-active');
  show(exerciseImage);
  hide(exerciseImageActive);
  exerciseBox.classList.remove('exercise-active');
  document.querySelector('.start-circle-text').style.borderColor = "#B3FD78";
  //will need to return a value that this is clicked
}

function selectMeditateBox() {
  meditateImage.classList.toggle('hidden');
  meditateImageActive.classList.toggle('hidden');
  meditateBox.classList.toggle('meditate-active');
  show(studyImage);
  hide(studyImageActive);
  studyBox.classList.remove('study-active');
  show(exerciseImage);
  hide(exerciseImageActive);
  exerciseBox.classList.remove('exercise-active');
  document.querySelector('.start-circle-text').style.borderColor = "#C278FD";
  //will need to return a value that this is clicked
}

function selectExerciseBox() {
  exerciseImage.classList.toggle('hidden');
  exerciseImageActive.classList.toggle('hidden');
  exerciseBox.classList.toggle('exercise-active');
  show(studyImage);
  hide(studyImageActive);
  studyBox.classList.remove('study-active');
  show(meditateImage);
  hide(meditateImageActive);
  meditateBox.classList.remove('meditate-active');
  document.querySelector('.start-circle-text').style.borderColor = "#FD8078";
  //will need to return a value that this is clicked
}
