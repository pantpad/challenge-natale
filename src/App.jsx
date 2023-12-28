import { useState } from "react";
import "./App.css";

import earth from "./assets/images/rotating_earth.gif";

function App() {
  const dialog = document.getElementById("dialog");
  console.log(dialog);
  function openDialog() {
    let bodyWidth = document.body.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.width = `${bodyWidth}`;
    dialog.showModal();
  }

  function closeDialog() {
    document.body.style.overflow = "auto";
    document.body.style.width = "auto";
    dialog.close();
  }

  return (
    <div className="bodyContainer">
      <div className="titleContainer">
        <h1>TITOLO</h1>
      </div>
      <div className="planetContainer">
        <h2>Seleziona un pianeta!</h2>
        <div className="planetGrid">
          <div className="planet">
            <h2 className="planetTitle">EARTH</h2>
            <button onClick={openDialog}>
              <img src={earth} alt="" />
            </button>
            <dialog id="dialog">
              <div>
                <h2>Planet Title</h2>
                <p>Planet Description</p>
                <p>Planet Distance from the sun</p>
                <p>Planet Diameter</p>
                <p>Planet Gravity</p>
              </div>
              <button onClick={closeDialog}>Close Planet</button>
            </dialog>
          </div>
          <div className="planet">
            <h2 className="planetTitle">EARTH</h2>
            <button onClick={openDialog}>
              <img src={earth} alt="" />
            </button>
          </div>
          <div className="planet">
            <h2 className="planetTitle">EARTH</h2>
            <button onClick={openDialog}>
              <img src={earth} alt="" />
            </button>
          </div>
          <div className="planet">
            <h2 className="planetTitle">EARTH</h2>
            <button onClick={openDialog}>
              <img src={earth} alt="" />
            </button>
          </div>
          <div className="planet">
            <h2 className="planetTitle">EARTH</h2>
            <button onClick={openDialog}>
              <img src={earth} alt="" />
            </button>
          </div>
          <div className="planet">
            <h2 className="planetTitle">EARTH</h2>
            <button onClick={openDialog}>
              <img src={earth} alt="" />
            </button>
          </div>
          <div className="planet">
            <h2 className="planetTitle">EARTH</h2>
            <button onClick={openDialog}>
              <img src={earth} alt="" />
            </button>
          </div>
          <div className="planet">
            <h2 className="planetTitle">EARTH</h2>
            <button onClick={openDialog}>
              <img src={earth} alt="" />
            </button>
          </div>
          <div className="planet">
            <h2 className="planetTitle">EARTH</h2>
            <button onClick={openDialog}>
              <img src={earth} alt="" />
            </button>
          </div>
          <div className="planet">
            <h2 className="planetTitle">EARTH</h2>
            <button onClick={openDialog}>
              <img src={earth} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
