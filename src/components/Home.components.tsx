import React from "react";
import axios from "axios";

import HeaderComponent from "./Header.component";
import GrupoItem from "./Grupo.item.component";
import Chat from "./Chat.component";

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

    this.state = { grupos: [] };
  }

  render() {
    this.tabs();
    return (
      <div className="App">
        {HeaderComponent(true)}
        <div className="row contenido">
          <div className="col m8 chat-contenido hide-on-small-only">
            <Chat />
          </div>

          <div id="test-swipe-1" className="col s12 m4 lista-grupos">
            {this.state.grupos.map((grupo) => {
              return GrupoItem(grupo.nombre, grupo._id);
            })}
          </div>

          <div id="test-swipe-2" className="col s12 ajustes">
            Test 2{GrupoItem("Ajustes", 1)}
            {GrupoItem("Ajustes", 2)}
          </div>
        </div>
      </div>
    );
  }

  // https://cahtunicundi.herokuapp.com/grupos
  componentDidMount() {
    this.tabs();
  }

  validarchat = () => {
    (() => {
      let chat = document.getElementById("test-swipe-2");
      if (chat) {
        if (window.screen.width > 600) {
          chat.style.display = "";
        }

        if (window.screen.width <= 600) {
          chat.style.display = "none";
        }
      }
    })();
  };

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

  tabs = () => {
    let elem = document.querySelector(".tabs");
    // var instance = M.Tabs.init(elem, {
    //   swipeable: true,
    // });
    M.Tabs.init(elem);
  };
}

export default Home;
