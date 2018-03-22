class MeetingData {
  constructor() {
    this.start_time = null;
    this.currTime = null;
    this.planedTime = 0;
    this.meetingName = "default Name";
    this.end_time = null;
    //perhabs map is better
    this.agendaItems = new Map();
    this.activAgendaItem = null;
    this.iter = null;
  }

  startMeeting() {
    this.start_time = new Date();
    this.currTime = this.start_time;
  }

  addAgendaItem(item) {
    if (this.agendaItems.size === 0) {
      this.activAgendaItem = item;
    }
    this.agendaItems.set(item.getName(), item);
    // this.iter = this.agendaItems.values;
  }
  clearAgenda() {
    this.agendaItems = new Map();
    this.activAgendaItem = null;
  }
  getActiveAgendaItem() {
    return this.activAgendaItem;
  }
  nextAgendaItem() {
    return ""; // this.iter.next().value;
  }
  //Beendet das Meeting
  endMeeting() {
    this.end_time = new Date();
  }
  //ToDo Meeting Running?

  setMeetingName(name) {
    this.meetingName = name;
  }
  getMeetingName() {
    return this.meetingName;
  }

  setCurrentTime() {
    this.currTime = new Date();
  }

  getCurrenTime() {
    return this.currTime;
  }

  setPlanedTime(sec) {
    this.planedTime = sec;
  }
  getPlanedTime() {
    return this.planedTime;
  }
  totalTimeElapsed() {
    return (this.currTime - this.start_time) / 1000;
  }
}

export default MeetingData;
