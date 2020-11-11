import React, { Component } from "react";

function GrupoItemComponent() {
  return (
    <div className="grupo-item waves-effect">
      <div className="imagen">
        <img
          src="https://images.unsplash.com/photo-1499673610122-01c7122c5dcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=926&q=80"
          alt="logo"
          className="circulo"
        />
      </div>
      <p className="titulo">Nombre</p>
    </div>
  );
}

export default GrupoItemComponent;
