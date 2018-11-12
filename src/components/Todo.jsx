import React from "react";
import { Link } from "react-router-dom";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: []
    };
  }

  getInputValue = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleAddItem = e => {
    this.setState({
      list: [...this.state.list, e.target.value]
    });
  };

  handleDeleteItem = e => {
    let list = this.state.list;
    let index = list.indexOf(e.target.value);
    list.splice(index, 1);
    this.setState({ list: list });
  };

  handleDeleteAll = e => {
    this.setState({
      list: []
    });
  };

  render() {
    return (
      <div>
        <h1>To-Do App</h1>
        <div className="inputs">
          <input
            className="inputbox1"
            type="text"
            value={this.state.inputValue}
            onChange={this.getInputValue}
          />
          <button
            className="addbutton"
            value={this.state.inputValue}
            onClick={this.handleAddItem}
          >
            +
          </button>
        </div>
        <ul>
          {this.state.list.map(item => {
            return (
              <div className="listitem">
                <li>{item}</li>
                <button
                  className="deletebutton"
                  onClick={this.handleDeleteItem}
                  value={item}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </ul>
        <button className="deleteallbutton" onClick={this.handleDeleteAll}>
          Delete All
        </button>
        <Link className="link" to="/">
          Back to the Home Page
        </Link>
      </div>
    );
  }
}

export default Todo;
