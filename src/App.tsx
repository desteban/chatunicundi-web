import React from "react";
import logo from "./logo.svg";

import HeaderComponent from "./components/Header.component";
import GrupoItem from "./components/Grupo.item.component";

declare var M: any;

class App extends React.Component {
  render() {
    console.log("render");
    return (
      <div className="App">
        <HeaderComponent />
        <div className="row contenido">
          <div id="test-swipe-1" className="col s12 lista-grupos">
            <GrupoItem />
            <GrupoItem />
            <GrupoItem />
            <GrupoItem />
            <GrupoItem />
            <GrupoItem />
            <GrupoItem />
            <GrupoItem />
            <GrupoItem />
            <GrupoItem />
            <GrupoItem />
            <GrupoItem />
            <GrupoItem />
            <GrupoItem />
            <GrupoItem />
            <GrupoItem />
          </div>
          <div id="test-swipe-2" className="col s12">
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
