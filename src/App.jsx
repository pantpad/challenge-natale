import { useState } from "react";
import "./App.css";
import earth from "./assets/images/rotating_earth.gif";

import Planet from "./Planet/Planet";
import planetsData from "./database/planets";

function App() {
  return (
    <div className="bodyContainer">
      <div className="titleContainer">
        <h1>REACT PLANETS</h1>
      </div>
      <div className="planetContainer">
        <div className="planetGrid">
          {planetsData.map((planet) => (
            <Planet {...planet} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
