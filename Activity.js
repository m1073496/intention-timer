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
      var currentTime = Date.parse(new Date());
      var nye = new Date(currentTime + parseInt(minutesInput.value)*60*1000 + parseInt(secondsInput.value)*1000);
      
      var second = 1000;
      var minute = second * 60;
      var hour = minute * 60;
      var day = hour * 24;
      var timer;
      
      function determineRemaining() {
        var today = new Date();
        var distance = nye - today;
        if (distance < 0) {
          document.querySelector('.start-circle-text').innerText = "COMPLETE";
          show(logButton);
          clearInterval(timer);
          return;
        }
        
        var days = Math.floor(distance / day);
        var hours = Math.floor((distance % day) / hour);
        var minutes = Math.floor((distance % hour) / minute);
        var seconds = Math.floor((distance % minute) / second);
        
        return {
          days, hours, minutes, seconds
        }
      }
      
      function showRemaining() {
        var remaining = determineRemaining();
        document.querySelector('.countdown-minutes').innerHTML = formatNumber(remaining.minutes);
        document.querySelector('.countdown-seconds').innerHTML = formatNumber(remaining.seconds);
      }
      
      showRemaining();
      timer = setInterval(showRemaining, 1000);
      // timer = setInterval(showRemaining, 100);
  }

  markComplete() {
    //
    //mark activity as completed

  }

  saveToStorage() {

  }

};
