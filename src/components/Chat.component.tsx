import React from "react";
import { Iusuario } from "../util/usuario";
import HeaderChat from "./HeaderChat.component";
import Mensajes from "./Mensajes.component";
// import messageTailReceiver from "../images/message-tail-receiver.svg";
// import messageTailSender from "../images/message-tail-sender.svg";

interface IGrupo {
  grupo?: number;
  nombre?: string;
  _id?: string;
  mensajes: [];
}

export interface Imensajes {
  _id: string;
  texto: string;
  usuario?: Iusuario;
  fecha?: string;
}

interface Iprops {
  nombreChat?: string;
  grupo?: IGrupo;
  user: Iusuario;
}

function Chat(props: Iprops) {
  return (
    <div className="main hide-on-small-only">
      {props.grupo
        ? HeaderChat(props.grupo ? props.grupo.nombre : "Nombre del grupo")
        : null}
      {/*  Chat window */}
      <div className="chat-window">
        {/* send */}
        <div className="sender">
          <span className="sender-message-tail">
            {/* <img src={messageTailSender} /> */}
          </span>
          <span className="sender-message">Hey! How's it going??</span>
          <span className="message-time">21:32</span>
          <span className="message-status">
            <img src="./images/double-check-seen.svg" />
          </span>
        </div>

        {/* receiver */}
        <div className="receiver">
          <span className="receiver-message-tail">
            {/* <img src={messageTailReceiver} /> */}
          </span>
          <span className="receiver-message">
            I'm doing fine! What about you??
          </span>
          <span className="message-time">21:35</span>
        </div>

        {props.grupo?.mensajes.map((grupo) => Mensajes(grupo, props.user))}

        {validarMensajes(props.grupo ? props.grupo.mensajes : [])}

        {/*  Type message bar */}
        <div className="type-message-bar">
          <div className="type-message-bar-left">
            <i className="material-icons">attach_file</i>
            {/* attach_file */}
          </div>
          <div className="type-message-bar-center">
            {/* <input type="text" placeholder="Type a message" /> */}
            <textarea
              id="textarea1"
              className="materialize-textarea scroll-person"
              placeholder="Escribe un mensaje"
            ></textarea>
          </div>
          <div className="type-message-bar-right">
            <i className="material-icons">send</i>
          </div>
        </div>
      </div>
    </div>
  );
}

const validarMensajes = (mensajes: Array<Imensajes>) => {
  if (mensajes.length <= 0) {
    return (
      <div className="sinmensajes">
        <p>Selecciona un grupo</p>
      </div>
    );
  }
};

export default Chat;
