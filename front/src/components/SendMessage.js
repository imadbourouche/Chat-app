import React, { useState } from "react";


const SendMessage = ({ onMessageSend, socket}) => {
  const [message, setMessage] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();

    if(message){
      console.log(message);
      let m={name:"1m4D",text:message};
      socket.emit('message',m);
      onMessageSend({name:"1m4D",text:message});
      setMessage("");
    }
    /*
    if(message){
      console.log(message);
      onMessageSend({name:"1m4D",text:message});
      setMessage("");
    }*/

  };

  return (
    <form onSubmit={(event) => sendMessage(event)} className="send-message">
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="type message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default SendMessage;

