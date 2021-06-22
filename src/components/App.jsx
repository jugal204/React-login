import React from "react";
import Login from "./login";
import Form from "./Form";



var userIsRegistered = true;



function App() {
  return (
    <div className="container">{ 
  //      isLoggedIn ?<h1> Hello </h1>:<Login />
  //currentTime>12 && <h1>Whay are u working?</h1>
  <Form 
      isRegistered={userIsRegistered}
  />
  
    }</div>
  );
}

export default App;
