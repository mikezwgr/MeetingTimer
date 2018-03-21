import React from "react";
import AgendaItem from "./AgendaItem.js";
import TimeBox from "./TimeBox.js";

import PropTypes from "prop-types";

class StatusAgendaItem extends React.Component {
  constructor(props) {
    super(props);
    //  this.state = { meeting: new MeetingData(new Date()) };
  }
  render() {
    return (
      <TimeBox
        name={this.props.item.getName()}
        sec={this.props.item.secondsElapsed(new Date())}
      />
    );
  }
}
//making sure the right props are past
//https://reactjs.org/docs/typechecking-with-proptypes.html
StatusAgendaItem.PropTypes = {
  item: PropTypes.instanceOf(AgendaItem).isRequired
};

export default AgendaItem;
