import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home.components";
import Error from "./components/Error.component";

declare var M: any;

class App extends React.Component {
  render() {
    console.log("render");
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

  componentDidMount() {
    console.log("componentDidMount");
    let elem = document.querySelector(".tabs");
    // var instance = M.Tabs.init(elem, {
    //   swipeable: true,
    //   esponsiveThreshold: 100,
    // });
    // M.AutoInit();
    var instance = M.Tabs.init(elem);
  }
}

export default App;
