import React from 'react';

export class CalendarDay extends React.Component {
  constructor() {
    super();
    this.state = {
      taskInput: ''
    };
  }


  handleTaskInput (event) {
    this.setState({
      taskInput: event.target.value
    });
  }

  addTask() {
    this.props.addTaskToState(this.state.taskInput);
  }

  editTask() {
    this.props.removeTaskFromState(this.props.data);
  }

  removeTask() {
    this.props.removeTaskFromState(this.props.data);
    this.setState({
      taskInput: undefined
    });
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
                  <button onClick={this.editTask.bind(this)}>Edit</button>
                  <button onClick={this.removeTask.bind(this)}>Delete</button>
                </div>
              </div>
            ) : (
              <div className="calendar__day__task--input">
                <input type="text" value={this.state.taskInput} onChange={this.handleTaskInput.bind(this)}/> 
                <button onClick={this.addTask.bind(this)}>Save</button>
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}