import React, { Component } from "react";
import HeaderChat from "./HeaderChat.component";

interface Iprops {
  nombreChat?: string;
}

interface Istate {
  nombreChat?: string;
  mensajes?: [];
}

class Chat extends Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props);
    this.state = { nombreChat: props.nombreChat };
  }

  render() {
    return (
      <div className="main hide-on-small-only">
        {/*  Main chat window header */}
        {HeaderChat(this.state.nombreChat)}
        {/*  Chat window */}
        <div className="chat-window">
          <div className="sender">
            <span className="sender-message-tail">
              <img src="./images/message-tail-sender.svg" />
            </span>
            <span className="sender-message">Hey! How's it going??</span>
            <span className="message-time">21:32</span>
            <span className="message-status">
              <img src="./images/double-check-seen.svg" />
            </span>
          </div>
          <div className="receiver">
            <span className="receiver-message-tail">
              <img src="./images/message-tail-receiver.svg" />
            </span>
            <span className="receiver-message">
              I'm doing fine! What about you??
            </span>
            <span className="message-time">21:35</span>
          </div>
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
}

export default Chat;
