import "./Planet.css";

function Planet({ name, image, title, description, distanceFromSun, diameter, gravity }) {
  let dialog;

  function openDialog(e) {
    dialog = e.target.parentElement.nextSibling;
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

  function handleBackdropClick(e) {
    if (e.target == dialog) {
      closeDialog();
    }
  }

  return (
    <div className="planet">
      <h2 className="planetTitle">{name.toUpperCase()}</h2>
      <button onClick={openDialog}>
        <img src={image} alt={title} />
      </button>
      <dialog id="dialog" onClick={handleBackdropClick}>
        <div className="dialogContent">
          <div>
            <h2>{name.toUpperCase()}</h2>
            <div className="planetInformation">
              <div className="info">
                <h4>Description</h4>
                <p>{description}</p>
              </div>
              <div className="info">
                <h4>Distance from the sun</h4>
                <p>{distanceFromSun}</p>
              </div>
              <div className="info">
                <h4>Planet Diameter:</h4>
                <p>{diameter}</p>
              </div>
              <div className="info">
                <h4>Planet Gravity:</h4>
                <p>{gravity}</p>
              </div>
            </div>
          </div>
          <button onClick={closeDialog}>Close Planet</button>
        </div>
      </dialog>
    </div>
  );
}

export default Planet;
