var categoryBoxWrapper = document.querySelector('.category-box-wrapper');
var studyImage = document.querySelector('.study-image');
var studyImageActive = document.querySelector('.study-image-active');
var meditateImage = document.querySelector('.meditate-image');
var meditateImageActive = document.querySelector('.meditate-image-active');
var exerciseImage = document.querySelector('.exercise-image');
var exerciseImageActive = document.querySelector('.exercise-image-active');


categoryBoxWrapper.addEventListener('click', activateCategory);

function activateCategory(event) {
  if (event.target.classList.contains('study-box')) {
    studyImage.classList.toggle('hidden');
    studyImageActive.classList.toggle('hidden');
  } else if (event.target.classList.contains('meditate-box')) {
    meditateImage.classList.toggle('hidden');
    meditateImageActive.classList.toggle('hidden');
  } else if (event.target.classList.contains('exercise-box')) {
    exerciseImage.classList.toggle('hidden');
    exerciseImageActive.classList.toggle('hidden');
  }
}
