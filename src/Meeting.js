import React from "react";
import TimeBox from "./TimeBox.js";
import MeetingData from "./MeetingData.js";
import StatusAgendaItem from "./StatusAgendaItem.js";
import fire from "./MyFirebase.js";

class Meeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = { meeting: new MeetingData(new Date()) };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    //let rootref = fire.database();
    let testref = fire.database().ref("test");
    testref.on("value", function(snap) {
      console.log(snap.val());
    });

    console.log("ein test i hate this so was");
  }

  tick() {
    this.setState(function(prevState, props) {
      let newMeeting = prevState.meeting;
      newMeeting.setCurrentTime();
      return {
        meeting: newMeeting
      };
    });
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
        {/*  <StatusAgendaItem item={this.state.meeting.get} /> */}
      </div>
    );
  }
}

export default Meeting;
