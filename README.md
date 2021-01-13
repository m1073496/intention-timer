# Title: Intention Timer

A [Front-End Project](https://frontend.turing.io/projects/module-1/intention-timer-group.html) by [Katie B](https://github.com/knees4bees), [Steve Calla](https://github.com/stevecalla) & [Jessica Justice](https://github.com/m1073496)
* Project Manager: [Hannah Hudson](https://github.com/hannahhch)

1. [Overview](#overview)
2. [Website Preview](#website-preview)
3. [Functionality](#functionality)
4. [Iterations](#iterations)
5. [Technologies](#technologies)
6. [Contributors](#contributors)
7. [Resources](#resources)

## Overview - INTENTION TIMER

The Iteration Timer application allows a user to set goals for their health and productivity, tied to an amount of time. Users will select an activity category, enter a short description of their goal, set the amount of time they want to spend on that activity, and start the timer. The app will then log that activity to help the user keep track of how they have been spending their time.

The site is accessible at [here](https://m1073496.github.io/intention-timer).

Project requirements can be found [here](https://frontend.turing.io/projects/module-1/intention-timer-group.html).

## Website Preview

<img width="1266" alt="Screen Shot 2021-01-12 at 8 26 17 PM" src="https://user-images.githubusercontent.com/73088654/104402959-b3d94680-5514-11eb-8747-49d05af37655.png">

## Functionality

* Current:
  * User can select one of three types of activities (Study, Meditate, Exercise).
  * User can set a goal and an amount of time in minutes and seconds.
  * User will see an error message if no category is selected, if no description is entered, if no minutes OR seconds are entered, if minutes and seconds are both set to 0, if minutes OR seconds are set to letters or symbols (non-integers), if minutes are set beyond 1,440 (24 hours), or if seconds are set beyond 60.
  * If there are no data input errors, the user can start the countdown clock.
  * After the countdown clock reaches 0, the activity is marked complete and the user can log the activity.
  * Logging a completed activity will generate an activity card containing the user's activity info under the "Past Activities" header.
  * User can refresh page without losing their logged activity cards.

* Future Enhancements:
  * Pausing / restarting the the countdown timer (during the countdown).
  * Animate the countdown timer (along with other animation to improve user experience).
  * Additional accessibility enhancements including additional media queries.
  * User can delete or redo a past activity.
  * Add a "favorite" icon user can select for past activities.
  * Add the ability for user to return to the new activity form without completing or logging an activity.
  * Functionality to allow the user to add notes to an activity after it has been completed.
  * Add easter egg (if user enters 525,600 minutes, app will display THE RENT gif).

* Known Issues/Bugs:
  * Not quite responsive on small screens.


## Iterations

### ITERATION 0: Build Out Comp

### ITERATION 1: Build Out the Activity Class
  * Properties should include: category, description, minutes, seconds, completed, id
  * Methods should include: countdown (or beginTimer or startTimer - whatever naming makes sense to you), markComplete, saveToStorage

### ITERATION 2: Form Functionality
  * When an activity category is clicked on (Exercise, Meditate, or Study), the associated border and icon should change colors to give a visual indication that it has been selected. Colors are provided in comp.
  * An input field should be provided for "What would you like to accomplish during this time?", minutes and seconds. The minutes and seconds fields should only accept numbers.
  * A Start Activity button is provided to submit the data entered into the form. When the button is clicked, update your data model with an instance of the Activity class.
  * When the Start Activity button is clicked, the user should no longer see the form, and instead see a timer clock. The timer clock should display the user-provided minutes and seconds, as well as the description. The category should not appear, but the outline of the circle should match the color associated with the category.
  * If the Start Activity button is clicked before the user has entered information into all four inputs, the user will receive an error message, but will not lose any information that was provided.

  ![](https://media.giphy.com/media/CLpJhQYXfTPsLAUiOE/giphy.gif)

### Iteration 3: Build an MVP
  * The user can start the time by clicking Start.
  * While timer is running, the user should see it count down by second.
  * When the timer completes, an alert should appear in the browser, letting the user know that the time is up and the activity has been completed.

### Iteration 4: Logging Past Activities
  * When the timer completes, the alert no longer appears.
  * Instead, a motivational or congratulatory message appears on the left side of the page, replacing the timer.
  * When the user acknowledges the message and completion of the activity by clicking Log Activity, a card with the category, time, and the users input for What would you like to accomplish during this time? should appear on the card. The card should also have a small color-coded visual indicator of the category. Color, size, and spacing of that visual indicator are provided in comp.

  ![](https://media.giphy.com/media/9jUSKcvEcTzztJpGyx/giphy.gif)

### ITERATION 5: Persisting past activities
  * When the user refreshes the page,
  * Their past activities are still displayed!

  ![](https://media.giphy.com/media/mhb3z1kAnB8T21fw3L/giphy.gif)

## Technologies

1. HTML
2. CSS
3. JavaScript
4. Local Storage
5. GitHub (website hosting and source code management)

## Contributors

* [Katie B](https://github.com/knees4bees)
* [Jessica Justice](https://github.com/m1073496)
* [Steve Calla](https://github.com/stevecalla)
* Project Manager: [Hannah Hudson](https://github.com/hannahhch)
* Advice/Counsel from [Rachel Buchta](https://github.com/rachelbuchta), [Cody Sehl](https://github.com/lalunamel) & [Rachel Williams](https://github.com/rwilliams659)

## Resources
* Project Description: https://frontend.turing.io/projects/module-1/intention-timer-group.html
* Project Original GitHub Repo: https://m1073496.github.io/intention-timer
* Team GitHub Repo: https://github.com/m1073496/intention-timer
* GitHub Hosted URL: https://m1073496.github.io/intention-timer
* DTR: https://gist.github.com/stevecalla/3fb252196252d1794bca51c325119d84
