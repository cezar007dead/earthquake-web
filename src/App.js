import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import MainPage from "./components/MainPage";
import About from "./components/About";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/">
            <MainPage></MainPage>
          </Route>
        </Switch>
      </Router>
      //  <>
      //   <MainPage></MainPage>
      // </>
    );
  }
}

export default App;
