import { useState } from "react";

function Card(prop) {
  let [changeColor, setColor] = useState("black");
  let changeColourfun = () => {
    setColor("pink");
  };
  let removeColourfun = () => {
    setColor("black");
  };
  return (
    <>
      {console.log(prop.customerName)}
      <div className="col">
        <div className="card h-100" style={{ color: changeColor }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{prop.customerName.name}</h5>
            <p className="card-text">{prop.customerName.job}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
            {changeColor != "black" ? (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={removeColourfun}
              >
                Remove Color
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={changeColourfun}
              >
                Change Color
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
