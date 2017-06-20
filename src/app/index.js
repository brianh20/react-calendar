import React from "react";
import { render } from "react-dom";

import moment from 'moment';

import less from './style.less';

import { CalendarDay } from './components/CalendarDay';

class Calendar extends React.Component {
  constructor() {
    super();

    this.state = {
      calendar: this.createCalendarArray()
    };
  }

  createCalendarArray () {
    let calendar = [];
    let year = moment().year();
    let month = moment().month();
    let today = moment().date();
    let lastDay = moment().endOf('month').get('date');

    for (let day = 1; day <= lastDay; day++) {
      calendar.push({
        date: moment().year(year).month(month).date(day).format('DD-MM-YYYY'),
        task: null,
        blocked: ((day < today) ? true : false)
      });
    }

    return calendar;
  }

  render() {
    let calendarDays = this.state.calendar.map((item, index) => {
      return (
        <CalendarDay data={item} key={index}></CalendarDay>
      );
    });

    return(
      <div className="calendar">
        {calendarDays}        
      </div>
    );
  }
}

render(<Calendar/>, window.document.getElementById("app"));

  // <CalendarDay data={this.state.calendarDay}></CalendarDay>