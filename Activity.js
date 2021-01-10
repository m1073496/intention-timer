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
    //start time... based on button click
    //use start circle
    //add an eventlistner listener
    helpWithTime();
  }

  markComplete() {

  }

  saveToStorage() {

  }

};
