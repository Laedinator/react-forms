import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState ("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleGreeting(){
    setHeading(name);
  }

  return (
    <div className="container">
      <h1>Hello {headingText} </h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={handleGreeting} >Submit</button>
    </div>
  );
}

export default App;
