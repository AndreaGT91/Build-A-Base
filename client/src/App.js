import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// TODO: Temporary, just for testing
import API from "./utils/API";

function App() {
  // TODO: Temporary, just for testing
  API.readSpreadsheet("/Users/andreabentley/Documents/github/Build-A-Base/sample-data/1010-Sample-Information.xlsx");

  return (
    <Router>
        <Switch>
        </Switch>
    </Router>
  );
}

export default App;
