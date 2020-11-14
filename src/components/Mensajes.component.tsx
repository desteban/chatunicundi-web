import React from "react";
import { Iusuario } from "../util/usuario";
import { Imensajes } from "./Chat.component";

function Mensajes(mensaje: Imensajes, usuario: Iusuario) {
  let fecha = new Date(`${mensaje.fecha}`);

  let clase: string = "";

  if (mensaje.usuario == usuario._id) {
    clase = "sender";
  }

  if (mensaje.usuario != usuario._id) {
    clase = "receiver";
  }

  return (
    <div className={`${clase} mensaje`} key={`${mensaje._id}`}>
      <span className={`${clase}-message-tail`}>
        {/* <img src={messageTailSender} /> */}
      </span>
      <span className="nombre-persona-mensaje">nombre</span>
      <span className={`${clase}-message`}>
        {mensaje.texto ? mensaje.texto : "Hola"}
      </span>
      <span className="message-time">
        {fecha ? `${fecha.getHours()}:${fecha.getMinutes()}` : "00:00"}
      </span>
      <span className="message-status"></span>
    </div>
  );
}

export default Mensajes;
