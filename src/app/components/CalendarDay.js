import React from 'react';

export class CalendarDay extends React.Component {
  constructor() {
    super();
    this.state = {
      taskInput: ''
    };
  }

  // Handle text input
  handleTaskInput (event) {
    this.setState({
      taskInput: event.target.value
    });
  }

  // Actions to parent making this a stateless component
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

  // Day render
  render() {
    return (
      <div className="calendar__day">
        <div className="calendar__day__date">
          {this.props.data.day}
        </div>
        <div className="calendar__day__task">
          {this.props.data.blocked ? (
            <div className="calendar__day__task--blocked"></div>
          ) : (
            this.props.data.task ? (
              <div className="calendar__day__task__description">
                <div className="calendar__day__task__description__text">
                  {this.props.data.task}
                </div>
                <div className="calendar__day__task__description__controls">
                  <button 
                    className="calendar__day__task__description__controls--edit" 
                    onClick={this.editTask.bind(this)}>Edit</button>
                  <button 
                    className="calendar__day__task__description__controls--delete" 
                    onClick={this.removeTask.bind(this)}>Delete</button>
                </div>
              </div>
            ) : (
              <div className="calendar__day__task__input">
                <input 
                  type="text" 
                  maxLength="60"
                  value={this.state.taskInput} 
                  onChange={this.handleTaskInput.bind(this)}/> 
                <button onClick={this.addTask.bind(this)}>Save</button>
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}