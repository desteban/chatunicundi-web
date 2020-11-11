import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import HeaderComponent from "./Header.component";

interface Istate {
  username: string;
  password: string;
  history: any;
}

class Login extends Component<any, Istate> {
  constructor(props: any) {
    super(props);
    this.state = { username: "", password: "", history: props.history };
  }

  render() {
    return (
      <div>
        {HeaderComponent()}
        <div className="container contenido">
          <h1 className="center">Login</h1>
          <form onSubmit={(e) => this.send(e)}>
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
                <label htmlFor="username">Usuario</label>
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
          </form>
        </div>
      </div>
    );
  }

  send = (event: any) => {
    event.preventDefault();
    console.log("state", this.state.username);
    this.state.history.push("/");
  };
}

export default withRouter(Login);
