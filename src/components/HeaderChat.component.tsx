import React from "react";

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
      <div className="chat-window-header-right"></div>
    </div>
  );
}

export default HeaderChat;
