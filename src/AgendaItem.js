class AgendaItem {
  constructor(name, planedTime) {
    this.name = name;
    this.planedTime = planedTime;
    this.completed = false;
    this.start_time = null;
    this.end_time = null;
  }

  startAgendaItem() {
    this.start_time = new Date();
  }
  endAgendaItem() {
    this.end_time = new Date();
  }
  secondsElapsed(currTime) {
    return (currTime - start_time) / 1000;
  }
  getName() {
    return this.name;
  }
}
