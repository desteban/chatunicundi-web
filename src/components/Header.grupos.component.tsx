import React from "react";
import { deleteUsuario } from "../util/usuario";
import { withRouter } from "react-router-dom";

interface Iprops {
  nombre: string;
  navegar?: any;
}

function HeaderGrupos(props: Iprops) {
  return (
    <div className="sidebar-header">
      <img
        src="https://images.unsplash.com/photo-1590031905406-f18a426d772d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="Imagen de perfil"
      />
      <div className="sidebar-header-icons">
        <p className="nombre">{props.nombre}</p>
        <i
          className="material-icons salir"
          onClick={() => {
            deleteUsuario();

            if (props.navegar) {
              props.navegar();
            }
          }}
        >
          exit_to_app
        </i>
      </div>
    </div>
  );
}

export default HeaderGrupos;
