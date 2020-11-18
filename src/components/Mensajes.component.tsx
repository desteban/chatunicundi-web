import React from "react";
import { Iusuario } from "../util/usuario";
import { Imensajes } from "./Chat.component";
import { Markup } from "interweave";

function Mensajes(mensaje: Imensajes, usuario: Iusuario) {
  let fecha = new Date(`${mensaje.fecha}`);

  let clase: string = "";

  let nombre: string = "";

  if (mensaje.usuario) {
    if (mensaje.usuario._id != usuario._id) {
      nombre = mensaje.usuario.nombre;
      clase = "receiver";
    }

    if (mensaje.usuario._id == usuario._id) {
      nombre = "Tu";
      clase = "sender";
    }
  }

  return (
    <div className={`${clase} mensaje`} key={`${mensaje._id}`}>
      <span className={`${clase}-message-tail`}>
        {/* <img src={messageTailSender} /> */}
      </span>
      <span className="nombre-persona-mensaje"> {`${nombre}:`} </span>

      <p className={`${clase}-message texto`}>
        <Markup content={mensaje.texto ? mensaje.texto : "Hola"} />
      </p>

      <span className="message-time">
        {fecha ? `${fecha.getHours()}:${fecha.getMinutes()}` : "00:00"}
      </span>
      <span className="message-status"></span>
    </div>
  );
}

export default Mensajes;
