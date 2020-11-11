import React from "react";
import logo from "./logo.svg";

import HeaderComponent from "./components/Header.component";

declare var M: any;

class App extends React.Component {
  render() {
    console.log("render");
    return (
      <div className="App">
        <HeaderComponent />
        <div className="row contenido">
          <ul id="tabs-swipe-demo" className="tabs">
            <li className="tab col s3">
              <a href="#test-swipe-1">Grupos</a>
            </li>
            <li className="tab col s3">
              <a className="active" href="#test-swipe-2">
                Ajustes
              </a>
            </li>
          </ul>
          <div id="test-swipe-1" className="col s12 blue">
            Test 1
          </div>
          <div id="test-swipe-2" className="col s12 red">
            Test 2
          </div>
        </div>
      </div>
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
