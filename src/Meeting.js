import React from "react";
import TimeBox from "./TimeBox.js";
import MeetingData from "./MeetingData.js";
import StatusAgendaItem from "./StatusAgendaItem.js";
import AgendaItem from "./AgendaItem.js";
import fire from "./MyFirebase.js";

class Meeting extends React.Component {
  constructor(props) {
    super(props);
    let myMeeting = new MeetingData();
    myMeeting.startMeeting();
    let firstItem = new AgendaItem("First111", 180);
    firstItem.startAgendaItem();
    myMeeting.addAgendaItem(firstItem);
    console.log("test" + firstItem);
    this.state = { meeting: myMeeting };

    //binds https://reactjs.org/docs/handling-events.html
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    //ToDo fetch Data here
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState(function(prevState, props) {
      prevState.meeting.setCurrentTime();
      return {
        meeting: prevState.meeting
      };
    });
  }
  handleClick() {
    console.log("klick im Meeting");
    //test Firebase stuff
    let testref = fire.database().ref("Meetings");
    testref.on("value", function(snap) {
      console.log(snap.val());
    });
    //thats it -> this writes the Data to firebase -> fucking easy
    // but it took me a while to understand this and to get there but now i am happy ;-)
    //ToDo implement unique key for a Meeting
    // ToDo remove this hier
    testref.push(this.state.meeting);
  }

  render() {
    return (
      <div>
        <TimeBox
          name="Aktuelle Zeit"
          sec={this.state.meeting.getCurrenTime().toLocaleTimeString()}
        />
        <TimeBox
          name="Zeit vergangen"
          sec={this.state.meeting.totalTimeElapsed()}
        />
        <StatusAgendaItem
          item={this.state.meeting.getActiveAgendaItem()}
          klick={this.handleClick}
        />
      </div>
    );
  }
}

export default Meeting;
