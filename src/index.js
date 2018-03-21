import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import TimeBox from "./TimeBox.js";
import Meeting from "./Meeting.js";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const formattedSeconds = sec =>
  Math.floor(sec / 60) + ":" + ("0" + sec % 60).slice(-2);

class App extends React.Component {
  render() {
    return (
      <div style={styles}>
        <h2>Protoyp eines Meeting Timers {"\u2728"}</h2>
        <Meeting />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
