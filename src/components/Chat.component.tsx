import { group } from "console";
import React from "react";
import { Iusuario } from "../util/usuario";
import HeaderChat from "./HeaderChat.component";
import Mensajes from "./Mensajes.component";
import construccion from "../images/construccion.png";
// import messageTailReceiver from "../images/message-tail-receiver.svg";
// import messageTailSender from "../images/message-tail-sender.svg";

interface IGrupo {
  grupo?: number;
  nombre?: string;
  _id?: string;
  mensajes: Array<Imensajes>;
}

export interface Imensajes {
  _id: string;
  texto: string;
  usuario?: Iusuario;
  fecha: string;
}

interface Iprops {
  grupo?: IGrupo;
  user: Iusuario;
  value?: string;
  onchange?: any;
  send?: any;
  clase: string;
  back?: any;
}

function Chat(props: Iprops) {
  return (
    <div className={`main ${props.clase}`}>
      <HeaderChat
        nombre={props.grupo?.nombre}
        back={() => {
          if (props.back) {
            props.back();
          }
        }}
      />
      {/*  Chat window */}
      <div className="chat-window">
        {props.grupo?.mensajes.map((grupo) => Mensajes(grupo, props.user))}

        {validarMensajes(props.grupo)}

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
              value={props.value}
              onChange={(e) => {
                if (props.onchange) {
                  props.onchange(e.target.value);
                }
              }}
            ></textarea>
          </div>
          <div className="type-message-bar-right">
            <div className="boton waves-effect waves-light verde-u">
              <i
                className="material-icons"
                onClick={() => {
                  if (props.send) {
                    props.send();
                  }
                }}
              >
                send
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const validarMensajes = (grupo?: IGrupo) => {
  if (!grupo) {
    return (
      <div className="sinmensajes">
        <div className="construcc">
          <p className="">Selecciona un grupo</p>
          <p>Sito en construccion</p>
          <div className="center">
            <img src={construccion} className="centerimg" />
          </div>
        </div>
      </div>
    );
  }
};

export default Chat;
