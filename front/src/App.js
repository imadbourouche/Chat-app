import "./App.css";
import NavBar from "./components/NavBar";
import ChatBox from "./components/ChatBox";
import SendMessage from "./components/SendMessage";
import React, {  useRef, useState, useEffect } from "react";
import socket from "./socket"

function App() {
  const [messages, setMessages] = useState([{name:"1m44D",text:"Join us"}]);
  const scroll = useRef();

  const handleMessageSend = (message) => {
    setMessages([...messages, message]);
  };


  useEffect(() => {
    socket.on('response', (msg) =>{
      console.log("this is data: ",msg);
      setMessages([...messages, msg]);
      }
    );
  }, [socket,messages]);

  
  return (
    <div>
      <NavBar />
      <ChatBox messages={messages} scroll={scroll} socket={socket}/>
      <span ref={scroll}></span>
      <SendMessage onMessageSend={handleMessageSend} socket={socket}/>
    </div>
  );
}
/*

function App() {
  const [user, setUser] = useState(true);

  return (
    <div className="App">
      <NavBar />
      {!user ? (
        <Welcome />
      ) : (
        <>
          <ChatBox />
        </>
      )}
    </div>
  );
}*/

export default App;
