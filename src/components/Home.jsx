import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <div className="home">
          <Link className="homelink" to="/todo">
            To-do App
          </Link>
          <Link className="homelink" to="/counter">
            Counter App
          </Link>
          <Link className="homelink" to="/random-image">
            Random Image App
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
