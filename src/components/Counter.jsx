import React from "react";
import { Link } from "react-router-dom";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  handleDecrement = () => {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 });
    }
  };

  handleRandomNumber = () => {
    let random = Math.floor(Math.random() * 100 + 1);
    this.setState({ counter: random });
  };

  handleReset = () => {
    this.setState({ counter: 0 });
  };

  render() {
    return (
      <div>
        <h1>Counter</h1>
        {this.state.counter}
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
        <button onClick={this.handleRandomNumber}>Random Number</button>
        <button onClick={this.handleReset}>RESET</button>
        <Link className="link" to="/">
          Back to the Home Page
        </Link>
      </div>
    );
  }
}

export default Counter;
