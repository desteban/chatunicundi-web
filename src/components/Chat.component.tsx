import React, { Component } from "react";

class Chat extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="main">
        {/*  Main chat window header */}
        <div className="chat-window-header">
          <div className="chat-window-header-left">
            <img
              className="chat-window-contact-image"
              src="images/timmy-m-harley.jpg"
            />
            <div className="contact-name-and-status-container">
              <span className="chat-window-contact-name">Timmy M Harley</span>
              <span className="chat-window-contact-status">Online</span>
            </div>
          </div>
          <div className="chat-window-header-right">
            <img
              className="chat-window-search-icon"
              src="images/search-icon.svg"
            />
            <img className="chat-window-menu-icon" src="images/menu-icon.svg" />
          </div>
        </div>
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
          <div className="sender">
            <span className="sender-message-tail">
              <img src="./images/message-tail-sender.svg" />
            </span>
            <span className="sender-message">
              I'm good but I'm sooo bored 🥱🥱🥱
            </span>
            <span className="message-time">21:35</span>
            <span className="message-status">
              <img src="./images/double-check-seen.svg" />
            </span>
          </div>
          <div className="receiver">
            <span className="receiver-message-tail">
              <img src="./images/message-tail-receiver.svg" />
            </span>
            <span className="receiver-message">Check this out...</span>
            <span className="message-time">21:36</span>
          </div>
          <div className="receiver">
            <span className="receiver-message">😝😝😝</span>
            <span className="message-time">21:36</span>
          </div>
          <div className="receiver image-message">
            <span className="receiver-message">
              <img src="./images/meme-coding.png" />
            </span>
            <span className="message-time">21:36</span>
          </div>
          <div className="receiver image-message">
            <span className="receiver-message">
              <img src="./images/meme-khaleesi.jpg" />
            </span>
            <span className="message-time">21:36</span>
          </div>
          <div className="receiver receiver-audio-message">
            <div className="audio-message">
              <div className="audio-message-left">
                <img src="images/play-audio-icon.svg" />
              </div>
              <div className="audio-message-center">
                <div className="audio-message-center-top">
                  <span className="audio-message-bar"></span>
                  <input type="range" min="0" max="100" value="75" />
                </div>
                <div className="audio-message-center-bottom">
                  <div className="audio-message-bottom">
                    <span className="audio-message-length">1:15</span>
                    <span className="message-time">21:38</span>
                  </div>
                </div>
              </div>
              <div className="audio-message-right">
                <img
                  className="audio-message-contact-image"
                  src="images/timmy-m-harley.jpg"
                />
                <img
                  className="audio-message-microphone"
                  src="images/microphone-seen.svg"
                />
              </div>
            </div>
          </div>
          <div className="sender">
            <span className="sender-message-tail">
              <img src="images/message-tail-sender.svg" />
            </span>
            <span className="sender-message">hahahahahah</span>
            <span className="message-time">21:39</span>
            <span className="message-status">
              <img src="./images/double-check-seen.svg" />
            </span>
          </div>
          <div className="sender">
            <span className="sender-message">🤣🤣🤣🤣</span>
            <span className="message-time">21:39</span>
            <span className="message-status">
              <img src="./images/double-check-seen.svg" />
            </span>
          </div>
          {/*  Type message bar */}
          <div className="type-message-bar">
            <div className="type-message-bar-left">
              <img src="images/icons.svg" />
              <img src="images/attach-icon.svg" />
            </div>
            <div className="type-message-bar-center">
              <input type="text" placeholder="Type a message" />
            </div>
            <div className="type-message-bar-right">
              <img src="images/audio-icon.svg" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
