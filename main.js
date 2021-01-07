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
var minutesInput = document.querySelector('.minutes-input');
var secondsInput = document.querySelector('.seconds-input');



categoryBoxWrapper.addEventListener('click', activateCategory);


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
