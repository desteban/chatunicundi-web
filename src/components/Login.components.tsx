import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import HeaderComponent from "./Header.component";
import escudo from "../images/escudo.png";
import Axios from "axios";
import { rutas } from "../util/rutas";
import Loader from "./Loader.component";
import { setUsuario } from "../util/usuario";

interface Istate {
  username: string;
  password: string;
  history: any;
  busqueda: boolean;
}

interface Irespuestahttp {
  code: number;
  tittle: string;
  message?: string;
  data?: any;
}

class Login extends Component<any, Istate> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: "",
      password: "",
      history: props.history,
      busqueda: false,
    };

    let usuario = JSON.parse(`${localStorage.getItem("usuario")}`);

    if (usuario) {
      this.state.history.push("/");
    }
  }

  render() {
    return (
      <div className="login">
        {HeaderComponent()}

        <div className="container">
          <form onSubmit={(e) => this.send(e)} className="formulario-login">
            <div className="contenido_form">
              {this.state.busqueda === true ? Loader() : null}

              <div className="center">
                <img
                  src={escudo}
                  alt="Universidad de cundinamarca"
                  className="logo-login"
                />
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={this.state.username}
                    onChange={(e) => {
                      this.setState({ username: e.target.value });
                    }}
                  ></input>
                  <label htmlFor="username">Codigo</label>
                </div>

                <div className="input-field col s12">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    value={this.state.password}
                    onChange={(e) => {
                      this.setState({ password: e.target.value });
                    }}
                  ></input>
                  <label htmlFor="password">Contraseña</label>
                </div>
              </div>

              <div className="botones">
                <button className="btn verde-u">Entrar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }

  send = async (event: any) => {
    event.preventDefault();

    this.setState({ busqueda: true });

    let json = { codigo: this.state.username, password: this.state.password };

    Axios.post(`${rutas.app}/login`, {
      json,
    })
      .then((response) => {
        let data: Irespuestahttp = response.data;

        if (data.code === 400) {
          alert(data.message);
        }

        if (data.code === 200 && data.tittle == "Succes") {
          data.data.password = undefined;
          setUsuario(data.data);

          this.state.history.push("/");
        }

        this.setState({ busqueda: false });
      })
      .catch((err) => {
        console.log(err);

        this.setState({ busqueda: false });
      });
  };
}

export default withRouter(Login);
