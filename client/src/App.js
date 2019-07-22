import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes/routes";
class App extends Component {
  render() {
    return (
      <Router>
        <Routes />
      </Router>
    );
  }
}

export default App;
