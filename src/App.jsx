import { useState } from "react";
import "./App.css";
import earth from "./assets/images/rotating_earth.gif";

import Planet from "./Planet/Planet";
import planetsData from "./database/planets";

function App() {
  const dialog = document.getElementById("dialog");
  console.log(dialog);
  function openDialog() {
    //let bodyWidth = document.body.clientWidth;
    //document.body.style.overflow = "hidden";
    //document.body.style.width = `${bodyWidth}`;
    dialog.showModal();
  }

  function closeDialog() {
    //document.body.style.overflow = "auto";
    //document.body.style.width = "auto";
    dialog.close();
  }

  return (
    <div className="bodyContainer">
      <div className="titleContainer">
        <h1>REACT PLANETS</h1>
      </div>
      <div className="planetContainer">
        <h2>Seleziona un pianeta!</h2>
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
