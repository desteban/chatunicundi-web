import React from "react";

function GrupoItemComponent(nombre?: string, key?: any) {
  return (
    <div className="grupo-item waves-effect" key={key ? key : 1}>
      <div className="imagen">
        <img
          src="https://images.unsplash.com/photo-1499673610122-01c7122c5dcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=926&q=80"
          alt="logo"
          className="circulo"
        />
      </div>
      <p className="titulo">{nombre ? nombre : "Nombre"}</p>
    </div>
  );
}

export default GrupoItemComponent;
