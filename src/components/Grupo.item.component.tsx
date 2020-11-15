import React from "react";
import { Link } from "react-router-dom";

function GrupoItemComponent(
  nombre: string = "Nombre",
  key?: any,
  target?: any
) {
  return (
    <div
      className="chat waves-effect"
      key={`${key ? key : "1"}`}
      onClick={() => target()}
    >
      <div className="chat-left">
        <img
          src="https://images.unsplash.com/photo-1499673610122-01c7122c5dcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=926&q=80"
          className="imagen-grupo"
        />
      </div>
      <div className="chat-right">
        <div className="chat-right-top">
          <span className="contact-name">{nombre}</span>
        </div>
      </div>
    </div>
  );
}

export default GrupoItemComponent;
