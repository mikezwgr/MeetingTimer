import React from "react";

import fire from "./MyFirebase.js";
import MeetingData from "./MeetingData.js";
import AgendaItem from "./AgendaItem.js";

class Admin extends React.Component {
  constructor(props) {
    super(props);

    //binds
    this.handleInsertTestData = this.handleInsertTestData.bind(this);
  }

  handleInsertTestData() {
    //new Meeting
    let aMeeting = new MeetingData();
    //new AgendaItems
    aMeeting.addAgendaItem(new AgendaItem("First", 15 * 60));
    aMeeting.addAgendaItem(new AgendaItem("second", 15 * 60));
    aMeeting.addAgendaItem(new AgendaItem("third", 15 * 60));
    aMeeting.addAgendaItem(new AgendaItem("fourth", 15 * 60));
    //ToDO asing good keys
    let testref = fire.database().ref("Meetings");
    testref.push(aMeeting);
  }

  render() {
    return (
      <div>
        <h2>admin</h2>
        <button onClick={this.handleInsertTestData}>
          Insert Some Test Data{" "}
        </button>
      </div>
    );
  }
}

export default Admin;
