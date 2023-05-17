import Message from "./Message";
import React, { useEffect } from "react";



const ChatBox = ({messages, scroll, socket}) => {

  useEffect(() => {
    scroll.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);


  return (
    <main className="chat-box">
      <div className="messages-wrapper">
      {
        messages?.map(function(message,index){
          return(
            <Message key={index} message={message} />  
          )
        })
      }
      </div>
    </main>
  );
};

export default ChatBox;
