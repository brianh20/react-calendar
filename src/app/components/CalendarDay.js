import React from 'react';

export class CalendarDay extends React.Component {
  constructor(props) {
    super();
  }

  removeTask() {
    this.props.removeTaskFromState(this.props.data);
  }

  render() {
    return (
      <div className="calendar__day">
        <div className="calendar__day__date">
          {this.props.data.date}
        </div>
        <div className="calendar__day__task">
          {this.props.data.blocked ? (
            <div className="calendar__day__task--blocked"></div>
          ) : (
            this.props.data.task ? (
              <div className="calendar__day__task__description">
                <div className="calendar__day__task__description--text">
                  {this.props.data.task}
                </div>
                <div className="calendar__day__task__description--delete">
                  <button onClick={this.removeTask.bind(this)}>X</button>
                </div>
              </div>
            ) : (
              <div className="calendar__day__task--input">
                <input type="text"/> <button onClick={this.addTask.bind(this)}>Save</button>
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}