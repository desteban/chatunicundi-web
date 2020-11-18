import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import GrupoItem from "./Grupo.item.component";
import Chat, { Imensajes } from "./Chat.component";
import { Iusuario, getUsuario } from "../util/usuario";
import HeaderGrupos from "./Header.grupos.component";
import { rutas } from "../util/rutas";
import { INotificacion } from "../eventos";
import Loader from "./Loader.component";
// import Socket from "socket.io-client";

// const Socket = require("../util/socket.io");
declare var io: any;

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
  mensaje: string;
  busqueda: boolean;
  socket: any;
}

class Home extends React.Component<any, Istate> {
  constructor(props: any) {
    super(props);

    this.state = {
      grupos: [],
      usuario: getUsuario(),
      history: props.history,
      mensaje: "",
      busqueda: true,
      socket: io(rutas.app),
    };

    if (!this.state.usuario) {
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
          <div
            className={`sidebar col s12 ${
              this.state.target ? "invisible" : ""
            }`}
          >
            {/*  Sidebar header */}

            <HeaderGrupos
              nombre={
                this.state.usuario
                  ? `${this.state.usuario.nombre} ${this.state.usuario.apellido}`
                  : "Nombre de usuario"
              }
              navegar={() => {
                this.state.history.push("/login");
              }}
            />

            {/*  Lista de grupos */}
            <div className="chats">
              {this.state.busqueda === true ? Loader() : null}

              {this.state.grupos.map((grupo) => {
                return GrupoItem(grupo.nombre, grupo._id, () => {
                  this.validarGrupo(grupo);
                });
              })}
            </div>
          </div>

          {/* chat */}
          <Chat
            grupo={this.state.target ? this.state.target : undefined}
            user={this.state.usuario}
            value={this.state.mensaje}
            onchange={(texto: string) => {
              this.setState({ mensaje: texto });
            }}
            send={() => {
              this.setMessage();
            }}
            clase={this.state.target ? "visible" : "invisible"}
            back={() => {
              this.setState({ target: undefined });
            }}
          />
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

  UNSAFE_componentDidMount() {
    this.tabs();
    this.state.grupos.map((grupo) => {
      this.mensaje(grupo._id);
    });
  }

  shoulComponentUpdate(nextProps: any, nextState: Istate) {
    this.state.socket.disconnect();

    return true;
  }

  back = () => {
    this.setState({ target: undefined });
  };

  tabs = () => {
    let elem = document.querySelector(".tabs");
    // var instance = M.Tabs.init(elem, {
    //   swipeable: true,
    // });
    M.Tabs.init(elem);

    let drop = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(drop);
  };

  buscarGrupos = () => {
    if (this.state.usuario && this.state.usuario.codigo) {
      this.setState({ busqueda: true });
      axios
        .get(
          `https://cahtunicundi.herokuapp.com/grupos/persona/${this.state.usuario.codigo}`
        )
        .then((response) => {
          this.setState({ grupos: response.data.grupos });
          this.setState({ busqueda: false });
          response.data.grupos.map((grupo: any) => {
            this.mensaje(grupo._id);
          });
        })
        .catch((error) => {
          console.log(error);
          this.setState({ busqueda: false });
        });
    }
  };

  eventos = () => {
    this.notificacionGlobal();
  };

  notificacionGlobal = () => {
    if (this.state.usuario) {
      this.state.socket.on(
        `${this.state.usuario.codigo}:notificacion`,
        (data: INotificacion) => {
          alert(data.mensaje);
        }
      );
    }
  };

  setMessage = () => {
    if (this.state.target) {
      let mensajeSocket: ImensajeSocket = {
        contenido: this.state.mensaje,
        grupoId: this.state.target._id,
        usuario: this.state.usuario,
      };

      this.state.socket.emit("grupo:mensaje", mensajeSocket);

      this.setState({ mensaje: "" });
      //22
      let area = document.getElementById("textarea1");
      if (area) {
        area.style.height = "22px";
      }
    }

    if (!this.state.target) {
      alert("selecciona un grupo para poder enviar mensajes");
    }
  };

  mensaje = (id_grupo?: string) => {
    if (id_grupo) {
      this.state.socket.on(`${id_grupo}:mensajes`, (mensaje: Imensajes) => {
        let listagrupos: Array<IGrupo> = this.state.grupos;

        listagrupos.find((grupo: any) => {
          if (grupo._id == id_grupo) {
            grupo.mensajes.push(mensaje);
          }
        });

        this.setState({ grupos: listagrupos });
      });
    }
  };
}

interface ImensajeSocket {
  contenido: string;
  grupoId?: string;
  usuario: Iusuario;
}

export default withRouter(Home);
