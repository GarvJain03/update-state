import React, { useState } from "react";
import "./styles/App.css";

function App() {
  const [state, setState] = useState({
    number: 0,
  });

  const handleIncrement = (e) => {
    e.preventDefault();

    setState({ number: state.number + 1 });
  };

  const handleDecrement = (e) => {
    e.preventDefault();

    setState({ number: state.number - 1 });
  };

  return (
    <div className="App">
      <h1>Increment And Decrement</h1>
      <div className="container">
        <span className="badge">{state.number}</span>
        <button className="button" onClick={handleIncrement}>
          Increment
        </button>
        <button className="button" onClick={handleDecrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
