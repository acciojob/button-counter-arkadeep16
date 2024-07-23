
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [count, setCount] = useState(0);

  function click() {
    setCount(`Button clicked ${count++} times`);
  }
  return (
    <div>
        <p>{count}</p>
        <button onClick={click}>Click me</button>
    </div>
  )
}

export default App
