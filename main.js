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
var congratsMsg = document.querySelector('.congrats-msg');

var radioButtonStudy = document.querySelector('#radioStudy');
var radioButtonMeditate = document.querySelector('#radioMeditate');
var radioButtonExercise = document.querySelector('#radioExercise');
var pastActivityText = document.querySelector('.past-activity-text');
var pastActivityMinutes = document.querySelector('.past-activity-minutes');
var pastActivitySeconds = document.querySelector('.past-activity-seconds');
var pastActivityDescription = document.querySelector('.past-activity-description');
var pastActivityMessage = document.querySelector('.message-container')
var pastActivityCard = document.querySelector('.past-activity-card');
var pageHeader = document.querySelector('.subhead');
var pastActivitySection = document.querySelector('.past-activity-section');
var pastActivityCardHolder = document.querySelector('.past-activity-cardholder');

var currentActivity;
var pastActivities = [];

//Add event listeners below
categoryBoxWrapper.addEventListener('click', findCategory);
startActivityButton.addEventListener('click', submitForm);
startTimerButton.addEventListener('click', function() {
  startTimerButton.classList.add('cannot-click');
  currentActivity.startTimer();
});
logActivityButton.addEventListener('click', logActivityEvents);
createNewActivityButton.addEventListener('click', returnToActivityForm);

//Add functions below
(function populatePastActivities() {
  var keys = Object.keys(localStorage);
  for (var i = 0; i < keys.length; i++) {
        pastActivities.push(localStorage.getItem(keys[i]));
  }
  // if (pastActivities === []) {
  //   pastActivities.push(localStorage.getItem());
  // }
})();


function completeActivity() {
  document.querySelector('.congrats-msg').classList.remove('hidden');
  document.querySelector('.countdown-clock').classList.add('hidden');
  startCircleText.innerText = "COMPLETE";
  show(logActivityButton);
  currentActivity.markComplete();
}

function logActivityEvents() {
  hide(timerBoxWrapper);
  show(createNewActivityButton);
  hide(pastActivityMessage);
  show(pastActivityCardHolder);
  countdownMinutes.innerText = formatNumber(currentActivity.minutes);
  countdownSeconds.innerText = formatNumber(currentActivity.seconds);
  timerBoxHeader.innerText = currentActivity.description || "hello1";
  addPlaceholderCard();
  pageHeader.innerText = "Completed Activity";
  startCircleText.innerText = "START";
  currentActivity.saveToStorage();
  currentActivity.getFromStorage();
  // console.log(currentActivity.getFromStorage());
  // createPastActivityCard();
}

function addPlaceholderCard() {
  pastActivityCardHolder.innerHTML = ``;
  for (var i = 0; i < pastActivities.length; i++) {
    pastActivityCardHolder.innerHTML +=
      `<div class="past-activity-card">
        <div class="activity-color-indicator">
          <div class="vertical-line vertical-line-${pastActivities[i].category.toLowerCase()}"></div>
          <p class="past-activity-text">${pastActivities[i].category}</p>
          <div class="min-sec-row">
            <p class="min-sec-ptag"><span class="past-activity-minutes">${pastActivities[i].minutes}</span> MIN <span class="past-activity-seconds"> ${pastActivities[i].seconds}</span> SECONDS</p>
          </div>
        </div>
        <p class="past-activity-description">${pastActivities[i].description}</p>
      </div>`;
  }
}

function returnToActivityForm() {
  show(activityInputForm);
  hide(createNewActivityButton);
  clearActivityForm();
  document.querySelector('.congrats-msg').classList.add('hidden');
  document.querySelector('.countdown-clock').classList.remove('hidden');
  pageHeader.innerText = "New Activity";
}

function clearActivityForm() {
  radioButtonStudy.checked = false;
  radioButtonExercise.checked = false;
  radioButtonMeditate.checked = false;
  hide(studyImageActive);
  hide(meditateImageActive);
  hide(exerciseImageActive);
  show(studyImage);
  show(meditateImage);
  show(exerciseImage);
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
    pageHeader.innerText = "Current Activity";
    hide(logActivityButton);
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

function findCategory(event) {
  if (event.target.classList.contains("radio-study")) {
    hide(meditateImageActive);
    hide(exerciseImageActive);
    hide(studyImage);
    show(studyImageActive);
    show(meditateImage);
    show(exerciseImage);
    document.querySelector('.circle-outline').style.borderColor = "#B3FD78";
  } else if (event.target.classList.contains("radio-meditate")) {
    hide(studyImageActive);
    hide(exerciseImageActive);
    hide(meditateImage);
    show(meditateImageActive);
    show(studyImage);
    show(exerciseImage);
    document.querySelector('.circle-outline').style.borderColor = "#C278FD";
  } else if (event.target.classList.contains("radio-exercise")) {
    hide(meditateImageActive);
    hide(studyImageActive);
    hide(exerciseImage);
    show(exerciseImageActive);
    show(meditateImage);
    show(studyImage);
    document.querySelector('.circle-outline').style.borderColor = "#FD8078";
  }
}
