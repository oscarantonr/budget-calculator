import "./App.css";
import React from "react";
import Calculator from "./Components/Calculator";
import "./Styles/styles.scss";

function App() {
  return (
    <div className="App">
      <div className="window">
        <div className="title-bar">
          <div className="title-bar-text">Budget Calculator</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize">
              <b>-</b>
            </button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close">
              <b>X</b>
            </button>
          </div>
        </div>
        <Calculator />
      </div>
    </div>
  );
}

export default App;
