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
    var second = 1000;
    var minute = second * 60;
    var timeAtButtonPress = Date.parse(new Date());
    var timerLength = (this.minutes * minute) + (this.seconds * second);
    var calculatedTargetTime = new Date(timeAtButtonPress + timerLength);
    var timer;

    function determineRemaining() {
      var rightNow = new Date();
      var timeLeftOnClock = calculatedTargetTime - rightNow;
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

      var minutes = Math.floor(timeLeftOnClock / minute);
      var seconds = Math.floor((timeLeftOnClock % minute) / second);

      return {
        minutes, seconds
      }
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
