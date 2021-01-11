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
var countdownClock = document.querySelector('.countdown-clock');
var countdownMinutes = document.querySelector('.countdown-minutes');
var countdownSeconds = document.querySelector('.countdown-seconds');
var minutesMissing = document.querySelector('.minutes-missing');
var minutesRange = document.querySelector('.minutes-range');
var secondsMissing = document.querySelector('.seconds-missing');
var secondsRange = document.querySelector('.seconds-range');
var timeMissing = document.querySelector('.time-missing');
var startTimerButton = document.querySelector('.circle-outline');
var startCircleText = document.querySelector('.start-circle-text');
var logActivityButton = document.querySelector('.log-button');
var timerBoxHeader = document.querySelector('.timer-box-header');
var createNewActivityButton = document.querySelector('.create-new-activity-button');

var currentActivity;
var pastActivities = [];

//Add event listeners below
categoryBoxWrapper.addEventListener('click', activateCategory);
startActivityButton.addEventListener('click', submitForm);
startTimerButton.addEventListener('click', function() {
  startTimerButton.classList.add('cannot-click');
  currentActivity.startTimer();
});
logActivityButton.addEventListener('click', logActivityEvents);
createNewActivityButton.addEventListener('click', returnToActivityForm);

//Add functions below
function completeActivity() {
  countdownClock.innerText = "Congrats! Keep it up!!";
  countdownClock.style.fontSize = "3em";
  startCircleText.innerText = "COMPLETE";
  show(logActivityButton);
  currentActivity.markComplete();
}

function logActivityEvents() {
  hide(timerBoxWrapper);
  show(createNewActivityButton);
}

function returnToActivityForm() {
  show(activityInputForm);
  hide(createNewActivityButton);
  clearActivityForm();
}

function clearActivityForm() {
  studyBox.checked = false;
  meditateBox.checked = false;
  exerciseBox.checked = false;
  deactivateStudy();
  deactivateMeditate();
  deactivateExercise();
  accomplishInput.value = "";
  minutesInput.value = "";
  secondsInput.value = "";
}

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

function submitForm(event) {
  event.preventDefault();
  if (validateInput()) {
    createNewActivity();
    hide(activityInputForm);
    show(timerBoxWrapper);
    countdownMinutes.innerText = formatNumber(currentActivity.minutes);
    countdownSeconds.innerText = formatNumber(currentActivity.seconds);
    timerBoxHeader.innerText = currentActivity.description;
    startTimerButton.classList.remove('cannot-click');
  }
}

function validateInput() {
  validateCategory();
  validateDescription();
  validateMinutes();
  validateSeconds();
  validateTime();
  if (validateCategory() && validateDescription() && validateMinutes() && validateSeconds() && validateTime()) {
    return true;
  } else {
    return false;
  }
}

function validateCategory() {
  var myChoice = document.querySelector('input[name="radioCategory"]:checked');
  if (!myChoice) {
    show(warningCategory);
    return false;
  } else {
    hide(warningCategory);
    return true;
  }
}

function validateDescription() {
  if (!accomplishInput.value) {
    show(warningDescription);
    return false;
  } else {
    hide(warningDescription);
    return true;
  }
}

function validateMinutes() {
  if (!minutesInput.value || isNaN(minutesInput.value)) {
    show(warningMinutes);
    show(minutesMissing);
    hide(minutesRange);
    return false;
  } else if (parseInt(minutesInput.value) > 1440 || parseInt(minutesInput.value) < 0) {
    show(warningMinutes);
    show(minutesRange);
    hide(minutesMissing);
    return false;
  } else {
    hide(warningMinutes);
    hide(minutesMissing);
    hide(minutesRange);
    return true;
  }
}

function validateSeconds() {
  if (!secondsInput.value || isNaN(secondsInput.value)) {
    show(warningSeconds);
    show(secondsMissing);
    hide(secondsRange);
    return false;
  } else if (parseInt(secondsInput.value) > 59 || parseInt(secondsInput.value) < 0) {
    show(warningSeconds);
    show(secondsRange);
    hide(secondsMissing);
    return false;
  } else {
    hide(warningSeconds);
    hide(secondsMissing);
    hide(secondsRange);
    return true;
  }
}

function validateTime() {
  if (parseInt(minutesInput.value) == 0 && parseInt(secondsInput.value) == 0) {
    show(warningMinutes);
    show(timeMissing);
    return false;
  } else {
    return true;
  }
}

function formatNumber(number) {
  var parsedNumber = parseInt(number);
  if (parsedNumber < 10) {
    var stringNumber = `0` + parsedNumber;
    return stringNumber;
  } else {
    return number;
  }
}

function createNewActivity() {
  currentActivity = new Activity(findCategoryChoice(), accomplishInput.value, parseInt(minutesInput.value), parseInt(secondsInput.value));
  //save activities in localStorage or array??
}

function findCategoryChoice() {
  var myChoice = document.querySelector('input[name="radioCategory"]:checked').value;
  return myChoice;
}

function activateCategory(event) {
  if (event.target.classList.contains('study-box') ||
    event.target.classList.contains('study-image')) {
    selectStudyBox();
  } else if (event.target.classList.contains('meditate-box')||
    event.target.classList.contains('meditate-image')) {
    selectMeditateBox();
  } else if (event.target.classList.contains('exercise-box')||
    event.target.classList.contains('exercise-image')) {
    selectExerciseBox();
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
  // startCircle.classList.add('study-circle');
  document.querySelector('.start-circle-text').style.borderColor = "#B3FD78";
}

function selectMeditateBox() {
  meditateImage.classList.toggle('hidden');
  meditateImageActive.classList.toggle('hidden');
  meditateBox.classList.toggle('meditate-active');
  deactivateStudy();
  deactivateExercise();
  // startCircle.classList.add('meditate-circle');
  document.querySelector('.start-circle-text').style.borderColor = "#C278FD";
}

function selectExerciseBox() {
  exerciseImage.classList.toggle('hidden');
  exerciseImageActive.classList.toggle('hidden');
  exerciseBox.classList.toggle('exercise-active');
  deactivateStudy();
  deactivateMeditate();
  // startCircle.classList.add('exercise-circle');
  document.querySelector('.start-circle-text').style.borderColor = "#FD8078";
}
