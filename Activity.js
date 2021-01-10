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
    var timeAtButtonPress = Date.parse(new Date()); // example: 12:30

    // calculate # of milliseconds our user wants
    var timerLength = (this.minutes * minute) + (this.seconds * second); // example: 5:00

    // could use Date.parse() here to force targetTime to be in milliseconds, but not required
    //  (see rightNow below, which will be expressed the same way as our targetTime here,
    //    so when we do the calculation to calculate timeLeftOnClock, we'll be subtracting oranges from oranges)
    var calculatedTargetTime = new Date(timeAtButtonPress + timerLength); // example: 12:35

    var timer;

    function determineRemaining() {
      var rightNow = new Date(); //example: 12:32
      var timeLeftOnClock = calculatedTargetTime - rightNow; // if function is run at 12:32, then 12:32 minus 12:30 equals 3:00 remaining
      if (timeLeftOnClock < 0) {
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

      var minutes = Math.floor(timeLeftOnClock / minute); // example: timeLeftOnClock is 3:45 (shitload of milliseconds); minutes left will be 3.75; 'minutes' variable will be 3
      var seconds = Math.floor((timeLeftOnClock % minute) / second); // example: timeLeftOnClock is 3:45; seconds will be 45
      // console.log(minutes);
      // console.log(seconds);

      return {
        minutes, seconds
      }

      //   var days = Math.floor(distance / day);
      //   var hours = Math.floor((distance % day) / hour);
      //   var minutes = Math.floor((distance % hour) / minute);
      //   var seconds = Math.floor((distance % minute) / second);
      //
      //   return {
      //     days, hours, minutes, seconds
      //   }
    }

    // TODO: move this DOM manipulation to the main.js file
    function showRemaining() {
      var remaining = determineRemaining();
      countdownMinutes.innerHTML = formatNumber(remaining.minutes);
      countdownSeconds.innerHTML = formatNumber(remaining.seconds);
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
