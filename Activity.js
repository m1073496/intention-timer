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
    this.completed = true;
    // pastActivities.push(this);
    // console.log(pastActivities);
  }

  saveToStorage() {
    //save to pastActivities array
    // var abc = JSON.stringify(pastActivities);
    // localStorage.setItem('a', abc);
    localStorage.setItem(`${this.id}`, JSON.stringify(this));
    // localStorage.getItem('abc', JSON.parse('abc'))
  }

  getFromStorage() {
    var retrievedObject = localStorage.getItem(`${this.id}`);
    var parsedObject = JSON.parse(retrievedObject);
    var createPastActivity = new Activity(parsedObject.category, parsedObject.description, parsedObject.minutes, parsedObject.seconds)
    pastActivities.push(createPastActivity);
  }
};
