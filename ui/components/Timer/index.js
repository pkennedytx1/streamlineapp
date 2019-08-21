/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      start: 0,
      isOn: false,
    };
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  startTimer() {
    this.setState({
      time: this.state.time,
      start: Date.now() - this.state.time,
      isOn: true,
    });
    this.timer = setInterval(
      () =>
        this.setState({
          time: Date.now() - this.state.start,
        }),
      1,
    );
  }

  stopTimer() {
    this.setState({ isOn: false });
    clearInterval(this.timer);
  }

  resetTimer() {
    this.setState({ time: 0 });
  }

  render() {
    const start = this.state.time == 0 ? <button className="btn btn-primary" onClick={this.startTimer}>start</button> : null;
    const stop = this.state.isOn ? <button className="btn btn-danger" onClick={this.stopTimer}>stop</button> : null;
    const reset =
      this.state.time != 0 && !this.state.isOn ? (
        <button className="btn btn-warning" onClick={this.resetTimer}>reset</button>
      ) : null;
    const resume =
      this.state.time != 0 && !this.state.isOn ? (
        <button className="btn btn-success" onClick={this.startTimer}>resume</button>
      ) : null;
    return (
      <div>
        <h3>{this.state.time}</h3>
        {start}
        {resume}
        {stop}
        {reset}
      </div>
    );
  }
}
module.exports = Timer;

export default Timer;
