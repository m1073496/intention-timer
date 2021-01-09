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
var warningCategory = document.querySelector('.warning-category');
var warningDescription = document.querySelector('.warning-description');
var warningMinutes = document.querySelector('.warning-minutes');
var warningSeconds = document.querySelector('.warning-seconds');
var countdownMinutes = document.querySelector('.countdown-minutes');
var countdownSeconds = document.querySelector('.countdown-seconds');

var categoryIsClicked = {
  studySelected: false,
  meditateSelected: false,
  exerciseSelected: false
};
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
    countdownMinutes.innerText = currentActivity.minutes;
    countdownSeconds.innerText = currentActivity.seconds;
  }
}

function checkInputValidity() {
  if (categoryIsClicked.studySelected === false && categoryIsClicked.meditateSelected === false && categoryIsClicked.exerciseSelected === false) {
    show(warningCategory);
    return false;
  } if (!accomplishInput.value) {
     show(warningDescription);
     return false;
  } else if (!minutesInput.value || isNaN(minutesInput.value) || minutesInput.value > 1440 || parseInt(minutesInput.value) < 0) {
     show(warningMinutes);
     return false;
  } else if (!secondsInput.value || isNaN(secondsInput.value) || secondsInput.value > 59 || parseInt(secondsInput.value) < 0) {
     show(warningSeconds);
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
  categoryIsClicked.studySelected = true;
}

function selectMeditateBox() {
  meditateImage.classList.toggle('hidden');
  meditateImageActive.classList.toggle('hidden');
  meditateBox.classList.toggle('meditate-active');
  deactivateStudy();
  deactivateExercise();
  document.querySelector('.start-circle-text').style.borderColor = "#C278FD";
  categoryIsClicked.meditateSelected = true;
}

function selectExerciseBox() {
  exerciseImage.classList.toggle('hidden');
  exerciseImageActive.classList.toggle('hidden');
  exerciseBox.classList.toggle('exercise-active');
  deactivateStudy();
  deactivateMeditate();
  document.querySelector('.start-circle-text').style.borderColor = "#FD8078";
  categoryIsClicked.exerciseSelected = true;
}
