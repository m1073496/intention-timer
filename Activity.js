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
        completeActivity();
        clearInterval(timer);
        return;
      }

      var minutes = formatNumber(Math.floor(timeLeftOnClock / minute));
      var seconds = formatNumber(Math.floor((timeLeftOnClock % minute) / second));

      return {
        minutes, seconds
      }
    }

    function showRemaining() {
      var remaining = determineRemaining();
      countdownMinutes.innerHTML = remaining.minutes;
      countdownSeconds.innerHTML = remaining.seconds;
    }

    showRemaining();
    timer = setInterval(showRemaining, 1000);
  }

  markComplete() {
    this.completed = true;
  }

  saveToStorage() {
    localStorage.setItem(this.id.toString(), JSON.stringify(this));
  }
};
