import React from "react";
import "./chat.scss";
// import ChatBox from "../chatbox/chatbox";
import { useState } from "react";

export default function Chat() {
  const [chat, setChat] = useState(1);

  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img src="/user.png" alt="" />
          <span>Betty Renny</span>
          <p>Neque porro quisquam est qui dolorem...</p>
        </div>
        <div className="message">
          <img src="/user.png" alt="" />
          <span>Betty Renny</span>
          <p>Neque porro quisquam est qui dolorem...</p>
        </div>
        <div className="message">
          <img src="/user.png" alt="" />
          <span>Betty Renny</span>
          <p>Neque porro quisquam est qui dolorem...</p>
        </div>
        <div className="message">
          <img src="/user.png" alt="" />
          <span>Betty Renny</span>
          <p>Neque porro quisquam est qui dolorem...</p>
        </div>
        <div className="message">
          <img src="/user.png" alt="" />
          <span>Betty Renny</span>
          <p>Neque porro quisquam est qui dolorem...</p>
        </div>
        <div className="message">
          <img src="/user.png" alt="" />
          <span>Betty Renny</span>
          <p>Neque porro quisquam est qui dolorem...</p>
        </div>
      </div>
      {chat && (
        <div className="chatbox">
          <div className="top">
            <div className="user">
              <img src="/user.png" alt="" />
              Betty Renny
            </div>
            <span className="close" onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className="center">
            <div className="chatmessage own">
              <p>Neque porro quisquam est qui dolorem...</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatmessage">
              <p>Neque porro quisquam est qui dolorem...</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatmessage own">
              <p>Neque porro quisquam est qui dolorem...</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatmessage">
              <p>Neque porro quisquam est qui dolorem...</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatmessage own">
              <p>Neque porro quisquam est qui dolorem...</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatmessage">
              <p>Neque porro quisquam est qui dolorem...</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatmessage own">
              <p>Neque porro quisquam est qui dolorem...</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatmessage">
              <p>Neque porro quisquam est qui dolorem...</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
