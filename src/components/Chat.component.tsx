import React, { Component } from "react";

class Chat extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="chat" id="chatcontainer">
        {/* mensajes */}
        <div className="mensajes">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            praesentium et. Dolorum pariatur ut impedit tempore enim accusamus
            ullam quasi ea, eaque aliquam id. Id dignissimos porro deserunt
            quasi incidunt.
          </p>
        </div>

        {/* input del chat */}
        <div className="imput-container verde-u">
          <div className="input-field col s12">
            <textarea
              id="textarea1"
              className="materialize-textarea"
              placeholder="Escribe un mensaje"
            ></textarea>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
