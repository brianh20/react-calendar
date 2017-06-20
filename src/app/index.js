//import React library
import React from "react";
import { render } from "react-dom";

//import additional libraries
import moment from 'moment';

//import app styles from less
import less from './style.less';

//import components
import { CalendarDay } from './components/CalendarDay';

class Calendar extends React.Component {
  constructor() {
    super();

    //Create app state
    this.state = {
      calendar: this.createCalendarArray()
    };
  }

  addTaskToState(index, data) {
    this.setState({
      calendar: this.updateCalendar(index, data)
    });
  }

  removeTaskFromState(index) {
    this.setState({
      calendar: this.updateCalendar(index, null)
    });
  }

  updateCalendar(index, data) {
    let newCalendar = this.state.calendar.slice();
    newCalendar[index].task = data;
    return newCalendar;
  }

  createCalendarArray () {
    let calendar = [];
    let year = moment().year();
    let month = moment().month();
    let today = moment().date();
    let lastDay = moment().endOf('month').get('date');

    //Add object to calendar array for each day of the month
    for (let day = 1; day <= lastDay; day++) {
      calendar.push({
        date: moment().year(year).month(month).date(day).format('DD-MM-YYYY'),  //Date for description
        day: day,
        task: undefined,                                                        //Task as null
        blocked: ((day < today) ? true : false)                                 //Block when prior to current day
      });
    }

    return calendar;
  }

  render() {

    //Map days from calendar to view
    let calendarDays = this.state.calendar.map((item, index) => {
      return (
        <CalendarDay 
          data={item} 
          key={index} 
          addTaskToState={this.addTaskToState.bind(this, index)}
          removeTaskFromState={this.removeTaskFromState.bind(this, index)}>
        </CalendarDay>
      );
    });

    //Rendear Calendar App
    return(
      <div>
        <div className="calendar__header">
          <span className="calendar__header--month">{moment().format('MMMM').toUpperCase()}</span>
        </div>
        <div className="calendar">
          {calendarDays}        
        </div>
      </div>
    );
  }
}

render(<Calendar/>, window.document.getElementById("app"));