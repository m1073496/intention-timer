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

  }

  markComplete() {

  }

  saveToStorage() {

  }

};
