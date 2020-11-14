import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import GrupoItem from "./Grupo.item.component";
import Chat from "./Chat.component";
import { Iusuario, getUsuario } from "../util/usuario";
import HeaderGrupos from "./Header.grupos.component";
import Socket from "../util/socket.io";
import { rutas } from "../util/rutas";

declare var M: any;

interface IGrupo {
  grupo?: number;
  nombre?: string;
  _id?: string;
  mensajes: [];
}

interface Istate {
  grupos: Array<IGrupo>;
  target?: IGrupo;
  usuario: Iusuario;
  history: any;
}

interface INotificacion {
  code: number;
  mensaje: string;
  data?: any;
}

class Home extends React.Component<any, Istate> {
  socket: any;

  constructor(props: any) {
    super(props);

    this.socket = Socket(rutas.app);

    let usuario: Iusuario = getUsuario();

    this.state = { grupos: [], usuario, history: props.history };

    if (!usuario) {
      this.state.history.push("/login");
    }
    this.buscarGrupos();
    this.eventos();
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
            {HeaderGrupos(
              this.state.usuario
                ? `${this.state.usuario.nombre} ${this.state.usuario.apellido}`
                : "Nombre de usuario"
            )}

            {/*  Lista de grupos */}
            <div className="chats">
              {this.state.grupos.map((grupo) => {
                return GrupoItem(grupo.nombre, grupo._id, () => {
                  this.validarGrupo(grupo);
                });
              })}
            </div>
          </div>

          {/* chat */}
          <Chat grupo={this.state.target} user={this.state.usuario} />
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

  eventos = () => {
    this.notificacion();
    this.not();
  };

  notificacion = () => {
    this.socket.on(
      `${this.state.usuario.codigo}:notificacion`,
      (data: INotificacion) => {
        alert(data.mensaje);
      }
    );
  };

  not = () => {
    this.socket.on("notificacion", (data: any) => {
      console.log("data del evento", data);
    });
  };
}

export default withRouter(Home);
