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
          <div className="col s12 espacio-contenido">
            <ul className="tabs">
              <li className="tab">
                <a href="lista-grupos">Grupos</a>
              </li>
              <li className="tab">
                <a href="contenidochat">Ajustes</a>
              </li>
            </ul>
          </div>
          <div className="row chat">
            <div id="lista-grupos" className="col s12 m4">
              <h2>Hola</h2>
            </div>

            <div id="contenidochat" className="col s12 m8">
              <h2>Contenido</h2>
            </div>
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
