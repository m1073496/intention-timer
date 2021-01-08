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

function submitForm(event) {
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
  } else if (!minutesInput.value || isNaN(minutesInput.value) || minutesInput.value > 1440 || parseInt(minutesInput.value) < 0) {
     alert('Please enter valid minutes input');
     return false;
  } else if (!secondsInput.value || isNaN(secondsInput.value) || secondsInput.value > 59 || parseInt(secondsInput.value) < 0) {
     alert(`Please enter valid seconds input`);
     return false;
  } else {
      return true;
  }
}

function createNewActivity() {
  //"Exercise" is a placeholder for category box input
  currentActivity = new Activity("Exercise", accomplishInput.value, minutesInput.value, secondsInput.value);
  //save activities in localStorage or array??
}

function activateCategory(event) {
  if (event.target.classList.contains('study-box') ||
    event.target.classList.contains('study-image')) {
    selectStudyBox();
    return studyBox.innerText;
  } else if (event.target.classList.contains('meditate-box')||
    event.target.classList.contains('meditate-image')) {
    selectMeditateBox();
    return meditateBox.innerText;
  } else if (event.target.classList.contains('exercise-box')||
    event.target.classList.contains('exercise-image')) {
    selectExerciseBox();
    return exerciseBox.innerText;
  }
}

function deactivateExercise() {
  show(exerciseImage);
  hide(exerciseImageActive);
  exerciseBox.classList.remove('exercise-active');
}

function deactivateMeditate() {
  show(meditateImage);
  hide(meditateImageActive);
  meditateBox.classList.remove('meditate-active');
}

function deactivateStudy() {
  show(studyImage);
  hide(studyImageActive);
  studyBox.classList.remove('study-active');
}

function selectStudyBox() {
  studyImage.classList.toggle('hidden');
  studyImageActive.classList.toggle('hidden');
  studyBox.classList.toggle('study-active');
  deactivateMeditate();
  deactivateExercise();
  document.querySelector('.start-circle-text').style.borderColor = "#B3FD78";
}

function selectMeditateBox() {
  meditateImage.classList.toggle('hidden');
  meditateImageActive.classList.toggle('hidden');
  meditateBox.classList.toggle('meditate-active');
  deactivateStudy();
  deactivateExercise();
  document.querySelector('.start-circle-text').style.borderColor = "#C278FD";
}

function selectExerciseBox() {
  exerciseImage.classList.toggle('hidden');
  exerciseImageActive.classList.toggle('hidden');
  exerciseBox.classList.toggle('exercise-active');
  deactivateStudy();
  deactivateMeditate();
  document.querySelector('.start-circle-text').style.borderColor = "#FD8078";
}
