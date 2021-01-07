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


categoryBoxWrapper.addEventListener('click', activateCategory);

// TODO: this function is ripe for refactoring but I'm not sure how yet
function activateCategory(event) {
  if (event.target.classList.contains('study-box')) {
    studyImage.classList.toggle('hidden');
    studyImageActive.classList.toggle('hidden');
    studyBox.classList.toggle('study-border');
  } else if (event.target.classList.contains('meditate-box')) {
    meditateImage.classList.toggle('hidden');
    meditateImageActive.classList.toggle('hidden');
    meditateBox.classList.toggle('meditate-border');
  } else if (event.target.classList.contains('exercise-box')) {
    exerciseImage.classList.toggle('hidden');
    exerciseImageActive.classList.toggle('hidden');
    exerciseBox.classList.toggle('exercise-border');
  }
}
