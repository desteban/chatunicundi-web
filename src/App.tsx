import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home.components";
import Error from "./components/Error.component";
import Login from "./components/Login.components";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
