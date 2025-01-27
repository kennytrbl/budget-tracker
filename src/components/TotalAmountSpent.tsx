import React, { Component } from "react";
import "../styles/TotalAmountSpent.css";
import { totalAmount, updateTotals } from "./DisplayData.tsx";

class TotalAmountSpent extends Component {
  // Timer for updating the total amount spent
  timer: NodeJS.Timeout | undefined;

  // State for the current total amount spent
  state = {
    currentTotal: totalAmount,
  };

  // Update the total amount spent
  componentDidMount() {
    this.timer = setInterval(() => {
      updateTotals();
      this.setState({ currentTotal: totalAmount });
    }, 1000);
  }

  // Clear the timer
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // Render the total amount spent
  render() {
    return (
      <div className="totalAmountSpent">
        <p id="total">${this.state.currentTotal}</p>
      </div>
    );
  }
}

export default TotalAmountSpent;
