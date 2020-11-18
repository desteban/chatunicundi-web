import React from "react";

declare var M: any;

interface Iprops {
  nombre?: string;
  back?: any;
}
// nombre: string = "Nombre Chat"

function HeaderChat(props: Iprops) {
  return (
    <div className="chat-window-header">
      <div className="chat-window-header-left">
        <i
          className="material-icons back"
          onClick={() => {
            if (props.back) {
              props.back();
            }
          }}
        >
          arrow_back
        </i>
        <img
          className="chat-window-contact-image"
          src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="Imagen del grupo"
        />
        <div className="contact-name-and-status-container">
          <span className="chat-window-contact-name">
            {props.nombre ? props.nombre : "Nombre Chat"}
          </span>
        </div>
      </div>
      <div className="chat-window-header-right">
        <a
          className="dropdown-trigger waves-effect waves-light ajustes-chat"
          href="#"
          data-target="dropdown1"
        >
          <i className="material-icons">settings</i>
        </a>

        <ul id="dropdown1" className="dropdown-content">
          <li>
            <a href="#!">Ver integrantes</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default HeaderChat;
