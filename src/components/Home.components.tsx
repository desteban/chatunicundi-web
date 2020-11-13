import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import GrupoItem from "./Grupo.item.component";
import Chat from "./Chat.component";
import { Iusuario, getUsuario } from "../util/usuario";

declare var M: any;

interface IGrupo {
  grupo?: number;
  nombre?: string;
  _id?: string;
}

interface Istate {
  grupos: Array<IGrupo>;
  target?: IGrupo;
  usuario?: Iusuario;
  history: any;
}

class Home extends React.Component<any, Istate> {
  constructor(props: any) {
    super(props);

    let usuario: Iusuario = getUsuario();

    this.state = { grupos: [], usuario, history: props.history };

    if (!usuario) {
      this.state.history.push("/login");
    }
    this.buscarGrupos();
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
                <p className="nombre">
                  {this.state.usuario ? this.state.usuario.nombre : "Nombre"}
                </p>
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

  tabs = () => {
    let elem = document.querySelector(".tabs");
    // var instance = M.Tabs.init(elem, {
    //   swipeable: true,
    // });
    M.Tabs.init(elem);
  };

  buscarGrupos = () => {
    axios
      .get("https://cahtunicundi.herokuapp.com/grupos")
      .then((response) => {
        this.setState({ grupos: response.data.grupos });
        // return response.data.grupos;
      })
      .catch((error) => {
        console.log(error);
        // return [];
      });
  };
}

export default withRouter(Home);
