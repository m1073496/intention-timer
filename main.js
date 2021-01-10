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
var minutesMissing = document.querySelector('.minutes-missing');
var minutesRange = document.querySelector('.minutes-range');
var secondsMissing = document.querySelector('.seconds-missing');
var secondsRange = document.querySelector('.seconds-range');
// var startCircle = document.querySelector('.start-circle-text');

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

function reveal(element) {
  element.classList.remove('invisible');
}

function cloak(element) {
  element.classList.add('invisible');
}

function submitForm(event) {
  event.preventDefault();
  if (validateInput()) {
    createNewActivity();
    hide(activityInputForm);
    show(timerBoxWrapper);
    countdownMinutes.innerText = formatNumber(currentActivity.minutes);
    countdownSeconds.innerText = formatNumber(currentActivity.seconds);
    helpWithTime();
  }
}

function validateInput() {
  if (validateCategory() && validateDescription() && validateMinutes() && validateSeconds()) {
    return true;
  } else {
    return false;
  }
}

function validateCategory() {
  var myChoice = document.querySelector('input[name="radioCategory"]:checked');
  if (myChoice === null) {
    reveal(warningCategory);
    return false;
  } else {
    cloak(warningCategory);
    return true;
  }
}

function validateDescription() {
  if (!accomplishInput.value) {
    reveal(warningDescription);
    return false;
  } else {
    cloak(warningDescription);
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

// var timeInMinutes = 10;
// var timeInMinutes = parseInt(minutesInput.value);

// const deadline = new Date(currentTime + timeInMinutes*60*1000);

// var nye = new Date('01/09/2021 08:00 PM');
// var nye = Date.parse(new Date());
// var deadline = new Date(currentTime + timeInMinutes*60*1000);
// var nye = new Date(currentTime + 10*60*1000);

function helpWithTime() {
  var currentTime = Date.parse(new Date());
  var nye = new Date(currentTime + parseInt(minutesInput.value)*60*1000 + parseInt(secondsInput.value)*1000);
  
  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;
  var timer;
  
  function determineRemaining() {
    var today = new Date();
    var distance = nye - today;
    // if (distance < 0) {
    //   clearInterval(timer);
    //   return;
    // }
    
    var days = Math.floor(distance / day);
    var hours = Math.floor((distance % day) / hour);
    var minutes = Math.floor((distance % hour) / minute);
    var seconds = Math.floor((distance % minute) / second);
    
    return {
      days, hours, minutes, seconds
    }
  }
  
  function showRemaining() {
    var remaining = determineRemaining();
    document.querySelector('.countdown-minutes').innerHTML = formatNumber(remaining.minutes);
    document.querySelector('.countdown-seconds').innerHTML = formatNumber(remaining.seconds);
  }
  
  // timer = setInterval(showRemaining, 1000);
  setInterval(showRemaining, 1000);
  
}
