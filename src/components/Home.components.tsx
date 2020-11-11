import React from "react";
import logo from "./logo.svg";
import axios from "axios";

import HeaderComponent from "./Header.component";
import GrupoItem from "./Grupo.item.component";

declare var M: any;

interface IGrupo {
  grupo?: number;
  nombre?: string;
  _id?: string;
}

interface Istate {
  grupos: Array<IGrupo>;
}

class Home extends React.Component<any, Istate> {
  constructor(props: any) {
    super(props);

    let grupos: any;

    this.state = { grupos: [] };
  }

  render() {
    console.log("render");
    return (
      <div className="App">
        <HeaderComponent />
        <div className="row contenido">
          <div id="test-swipe-1" className="col s12 lista-grupos">
            {this.state.grupos.map((grupo) => {
              return GrupoItem(grupo.nombre);
            })}
          </div>
          <div id="test-swipe-2" className="col s12">
            Test 2
          </div>
        </div>
      </div>
    );
  }

  // https://cahtunicundi.herokuapp.com/grupos

  UNSAFE_componentWillMount() {
    axios
      .get("https://cahtunicundi.herokuapp.com/grupos")
      .then((response) => {
        this.setState({ grupos: response.data.grupos });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  UNSAFE_componentDidMount() {
    let elem = document.querySelector(".tabs");
    // var instance = M.Tabs.init(elem, {
    //   swipeable: true,
    //   esponsiveThreshold: 100,
    // });
    // M.AutoInit();
    var instance = M.Tabs.init(elem);
  }
}

export default Home;
