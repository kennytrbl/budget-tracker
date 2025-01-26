import React, { Component } from "react";
import "../styles/TotalAmountSpent.css";
import { totalAmount, updateTotals } from "./DisplayData.tsx";

class TotalAmountSpent extends Component {
  timer: NodeJS.Timeout | undefined;

  state = {
    currentTotal: totalAmount,
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      updateTotals();
      this.setState({ currentTotal: totalAmount });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="totalAmountSpent">
        <p id="total">${this.state.currentTotal}</p>
      </div>
    );
  }
}

export default TotalAmountSpent;
