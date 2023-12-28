import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="bodyContainer">
      <div className="titleContainer">
        <h1>TITOLO</h1>
      </div>
      <div className="planetContainer">
        <h2>Seleziona un pianeta!</h2>
        <div className="planetGrid">
          <div className="planet"></div>
          <div className="planet"></div>
          <div className="planet"></div>
          <div className="planet"></div>
          <div className="planet"></div>
          <div className="planet"></div>
          <div className="planet"></div>
          <div className="planet"></div>
          <div className="planet"></div>
          <div className="planet"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
