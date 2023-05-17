import React, { useState } from "react";

const Welcome = () => {
  const [user, setUser] = useState(false);


  const googleSignIn = () => {
    console.log("enter the chat");
    setUser(true);
  };


  return(
    <main className="welcome">
      <h2>Welcome to my chat app</h2>
      <img src="/logo512.png" alt="ReactJs logo" width={50} height={50} />
      <p>A simple chat app developed with MERN stack</p>
      
      {!user && 
        <button onClick={googleSignIn} className="sign-in" type="button">
        Enter the chat
        </button>
      }
    </main>
  );
};

export default Welcome;


   /*  
      <button className="sign-in" onClick={googleSignIn}>
        Enter
      </button>
      
      {user ? (
        <button onClick={googleSignIn} className="sign-in" type="button">
          Leave the chat
        </button>
      ) : (
 
      )}
      */