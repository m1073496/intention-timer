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
function submitForm() {
  event.preventDefault();
  if (checkInputValidity()) {
    createNewActivity();
    activityInputForm.classList.add('hidden');
    timerBoxWrapper.classList.remove('hidden');
  };
};

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
  };
};

function createNewActivity() {
  //"Exercise" is a placeholder for category box input
  currentActivity = new Activity("Exercise", accomplishInput.value, minutesInput.value, secondsInput.value);
  console.log(currentActivity);
  //save activities in localStorage or array??
};

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
  };
};

function selectStudyBox() {
  studyImage.classList.toggle('hidden');
  studyImageActive.classList.toggle('hidden');
  studyBox.classList.toggle('study-border');
  meditateImage.classList.remove('hidden');
  meditateImageActive.classList.add('hidden');
  meditateBox.classList.remove('meditate-border');
  exerciseImage.classList.remove('hidden');
  exerciseImageActive.classList.add('hidden');
  exerciseBox.classList.remove('exercise-border');
  document.querySelector('.start-circle-text').style.borderColor = "#B3FD78";
  //will need to return a value that this is clicked
};

function selectMeditateBox() {
  meditateImage.classList.toggle('hidden');
  meditateImageActive.classList.toggle('hidden');
  meditateBox.classList.toggle('meditate-border');
  studyImage.classList.remove('hidden');
  studyImageActive.classList.add('hidden');
  studyBox.classList.remove('study-border');
  exerciseImage.classList.remove('hidden');
  exerciseImageActive.classList.add('hidden');
  exerciseBox.classList.remove('exercise-border');
  document.querySelector('.start-circle-text').style.borderColor = "#C278FD";
  //will need to return a value that this is clicked
};

function selectExerciseBox() {
  exerciseImage.classList.toggle('hidden');
  exerciseImageActive.classList.toggle('hidden');
  exerciseBox.classList.toggle('exercise-border');
  studyImage.classList.remove('hidden');
  studyImageActive.classList.add('hidden');
  studyBox.classList.remove('study-border');
  meditateImage.classList.remove('hidden');
  meditateImageActive.classList.add('hidden');
  meditateBox.classList.remove('meditate-border');
  document.querySelector('.start-circle-text').style.borderColor = "#FD8078";
  //will need to return a value that this is clicked
};


// Revisions to Code:
//1) refactor to create select functions                DONE
//2) add active color to the word in the box            DONE
//3) address lack of click me on the image              DONE
//3a) address lack of click me on the text              TBD
//4) should only be able to select one box at a time    DONE

// Bullet #2:
// An input field should be provided for What would you like to
// accomplish during this time?, minutes and seconds. The minutes
// and seconds fields should only accept numbers. (Hint: more than
// one layer should probably be put into place to ensure this. Make
// sure that e cannot be accepted.)

//Input for accomplish box
//1) target accomplish input                            DONE
//2) Create dataModel to target, dataModel object       DONE
//3) Start activity button = target                     DONE
//3a) Start activity button = listen                    DONE
//3b) Create a function to grab input                    DONE
//4) Validation === "" code validation                  DONE

//Input for minutes / seconds box
//1) target input                                       DONE
//3) Create dataModel to target, dataModel it           DONE
//4) Validation === "" code validation                  DONE
//5) Validation === numbers only placeholder text       NO
//6) Validation === numbers only code validation        DONE
//7) validation for e

//OTHER OUT OF SCOPE
//Capture Input for activity box in activity object
//Push object to Activity class vs individual strings


// When the Start Activity button is clicked, the user should no
// longer see the form, and instead see a timer clock. The timer
// clock should display the user-provided minutes and seconds, as
// well as the description. The category should not appear, but
// the outline of the circle should match the color associated
// with the category.
