import React from "react";

const Message = ({message}) => {
  return (
    <div className={`chat-bubble left`}>
      <div className="chat-bubble__right">
        <p className="user-name">{message.name}</p>
        <p className="user-message">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
