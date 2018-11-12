import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Todo from "./components/Todo";
import Counter from "./components/Counter";
import Home from "./components/Home";
import RandomImage from "./components/RandomImage";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/todo" component={Todo} />
          <Route path="/counter" component={Counter} />
          <Route path="/random-image" component={RandomImage} />
        </Switch>
      </div>
    );
  }
}

export default App;
