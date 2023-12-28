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
        <h2>Select a Planet! </h2>
        <div className="planetGrid">
          <Planet {...planetsData[0]} />
          <Planet {...planetsData[1]} />
          <Planet {...planetsData[2]} />
          <Planet {...planetsData[3]} />
          <Planet {...planetsData[4]} />
          <Planet {...planetsData[5]} />
          <Planet {...planetsData[6]} />
          <Planet {...planetsData[7]} />
          <Planet {...planetsData[8]} />
          <Planet {...planetsData[9]} />
        </div>
      </div>
    </div>
  );
}

export default App;
