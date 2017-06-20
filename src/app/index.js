import React from "react";
import { render } from "react-dom";

class Calendar extends React.Component {
  constructor() {
    super();
    this.state = {
      calendar: "Calendar"
    };
  }

  render() {
    return(
      <div>
        {this.state.calendar}
      </div>
    );
  }
}

render(<Calendar/>, window.document.getElementById("app"));