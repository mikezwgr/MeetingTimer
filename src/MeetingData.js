class MeetingData {
  constructor(start) {
    this.start_time = start;
    this.currTime = start;
    this.planedTime = 0;
    this.meetingName = "default Name";
    this.end_time = null;
    //perhabs map is better
    this.agendaItems = [];
    this.activAgendaItem = null;
  }

  addAgendaItem(item) {
    if (this.agentItems == null) {
      this.activAgendaItem = 0;
    }
    this.agendaItems.push(item);
  }
  clearAgenda() {
    this.agendaItems = [];
    this.activAgendaItem = null;
  }
  getActiveAgendaItem() {
    return this.agendaItems[this.activAgendaItem];
  }
  nextAgendaItem() {
    this.activAgendaItem += 1;
    return this.getActiveAgendaItem();
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
