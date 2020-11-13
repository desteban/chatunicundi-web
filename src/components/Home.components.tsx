import React from "react";
import axios from "axios";

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
  target?: IGrupo;
}

class Home extends React.Component<any, Istate> {
  constructor(props: any) {
    super(props);

    this.state = { grupos: [] };
  }

  render() {
    this.tabs();
    return (
      <div className="grid">
        {/*  App background */}
        <div className="top"></div>
        <div className="bottom"></div>
        {/*  App */}
        <div className="app">
          <div className="sidebar">
            {/*  Sidebar header */}
            <div className="sidebar-header">
              <img
                src="https://images.unsplash.com/photo-1590031905406-f18a426d772d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="Imagen de perfil"
              />
              <div className="sidebar-header-icons">
                <p className="nombre">Nombre</p>
              </div>
            </div>

            {/*  Chats */}
            <div className="chats">
              {this.state.grupos.map((grupo) => {
                return GrupoItem(grupo.nombre, grupo._id, () => {
                  this.validarGrupo(grupo);
                });
              })}
            </div>
          </div>

          {/* chat */}
          <Chat nombreChat={this.state.target?.nombre} />
        </div>
      </div>
    );
  }

  validarGrupo = (grupoSe: IGrupo) => {
    if (grupoSe) {
      let grupoFound = this.state.grupos.find((grupo) => {
        if (grupo === grupoSe) {
          console.log(grupo);
          return grupo;
        }
      });

      if (grupoFound) {
        this.setState({ target: grupoFound });
      }
    }
  };

  // https://cahtunicundi.herokuapp.com/grupos
  UNSAFE_componentDidMount() {
    this.tabs();
  }

  validarchat = () => {
    (() => {
      let chat = document.getElementById("contenido-chat");
      let listagrupo = document.getElementById("test-swipe-1");
      let cabecera = document.getElementById("cabecera");
      let ancho = window.screen.height;
      let alto = 100;

      if (chat && listagrupo && cabecera) {
        if (ancho <= 600) {
          alto = ancho - 104;
        }

        if (ancho > 600) {
          alto = ancho - 64;
        }

        chat.style.height = `${alto}`;
        listagrupo.style.height = `${alto}`;
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
