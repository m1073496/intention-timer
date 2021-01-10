class Activity {
  constructor(activityChoice, activityDescrip, activityMinutes, activitySeconds) {
    this.category = activityChoice;
    this.description = activityDescrip;
    this.minutes = activityMinutes;
    this.seconds = activitySeconds;
    this.completed = false;
    this.id = Date.now();
  }

  startTimer() {
    // useful constants to express normal time units as milliseconds
    var second = 1000;
    var minute = second * 60;

    // new Date() returns current time as a date string
    // Date.parse(foo) forces foo to be expressed as a number of milliseconds
    // we *need* timeAtButtonPress to be in milliseconds
    //   because timerLength below will be in milliseconds and we want to add them together (add apples to apples)
    var timeAtButtonPress = Date.parse(new Date());

    // calculate # of milliseconds our user wants
    var timerLength = parseInt(minutesInput.value)*minute + parseInt(secondsInput.value)*second;

    // could use Date.parse() here to force targetTime to be in milliseconds, but not required
    //  (see rightNow below, which will be expressed the same way as our targetTime here,
    //    so when we do the calculation to calculate distance, we'll be subtracting oranges from oranges)
    var targetTime = new Date(timeAtButtonPress + timerLength);

    var timer;

    function determineRemaining() {
      var rightNow = new Date();
      var distance = targetTime - rightNow;
      if (distance < 0) {
        //KATIE PLEASE MOVE TO MAIN.JS FUNCTION FROM HERE TO....
        startTimerButton.innerText = "COMPLETE";
        show(logActivityButton);
        countdownClock.innerText = "Congrats! Keep it up!!";
        //NEED TO CHANGE FONT SIZE; COULDN'T GET BELOW TO WORK
        // document.querySelector('.countdown-clock').style.fontSize = "3em";
        // countdownClock.styles.fontSize = "3em";
        // document.querySelector('.countdown-clock').style.borderColor = "#C278FD";
        //...... HERE
        clearInterval(timer);
        return;
      }

      var minutes = Math.floor(distance / minute);
      var seconds = Math.floor((distance % minute) / second);

      return {
        minutes, seconds
      }
    }

    function showRemaining() {
      var remaining = determineRemaining();
      document.querySelector('.countdown-minutes').innerHTML = formatNumber(remaining.minutes);
      document.querySelector('.countdown-seconds').innerHTML = formatNumber(remaining.seconds);
    }

    showRemaining();
    timer = setInterval(showRemaining, 1000);
  }

  markComplete() {
    //mark activity as completed
  }

  saveToStorage() {
    //save to pastActivities array
  }

};
