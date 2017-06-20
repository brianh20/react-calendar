import React from 'react';

export class CalendarDay extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="calendar__day">
        <div className="calendar__day__date">
          Date: 
          {this.props.data.date}
        </div>
        <div className="calendar__day__task">
          Task: 
          {this.props.data.blocked ? (
            <div className="calendar__day__task--blocked">SHOW BLOCKED</div>
          ) : (
            this.props.data.task ? (
              <div className="calendar__day__task--description">SHOW TASK</div>
            ) : (
              <div className="calendar__day__task--input">SHOW INPUT</div>
            )
          )}
        </div>
      </div>
    );
  }
}



// <div className="calendar__day__status">Blocked: {(this.props.data.blocked ? 'blocked' : 'available')}
// </div>
