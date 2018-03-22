import React from "react";
import AgendaItem from "./AgendaItem.js";
import TimeBox from "./TimeBox.js";

import PropTypes from "prop-types";

class StatusAgendaItem extends React.Component {
  constructor(props) {
    super(props);
    //ToDo delete construtor
  }

  render() {
    return (
      <div>
        <TimeBox
          name={this.props.item.getName()}
          sec={this.props.item.secondsElapsed(new Date())}
        />
        <button onClick={this.props.klick}>Click me</button>
      </div>
    );
  }
}
//making sure the right props are past
//https://reactjs.org/docs/typechecking-with-proptypes.html
StatusAgendaItem.PropTypes = {
  item: PropTypes.instanceOf(AgendaItem).isRequired
};

export default StatusAgendaItem;
