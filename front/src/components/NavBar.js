import React, { useState } from "react";

const NavBar = () => {
  const [user, setUser] = useState(false);

  const googleSignIn = () => {
    console.log("sign in clicked")
    //setUser(true);
  };

  const signOut = () => {
    console.log("sign out clicked")
    //setUser(false);
  };

  return (
    <nav className="nav-bar">
      <h1>React Chat</h1>
      {!user && 
        <button onClick={signOut} className="sign-out" type="button">
          Sign Out
        </button>}
    </nav>
  );
};

export default NavBar;
