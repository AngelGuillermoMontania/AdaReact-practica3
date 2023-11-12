import React from "react";

export default function Card({
  id,
  temp,
  img,
  name,
  clouds,
  humidity,
  description,
  onClose,
}) {
  // Chequea si las props, son las mismas que recibias en practicas anteriores
  // acá va tu código
  return (
    <div style={{ border: "1px solid white", width: "20vw" }}>
      <div>
        <button onClick={() => onClose(id)}>X</button>
      </div>
      <div>
        <h2>{name}</h2>
      </div>
      <div>
        <div>
          <h5>Min</h5>
          <h5>{min}</h5>
        </div>
        <div>
          <h5>Max</h5>
          <h5>{max}</h5>
        </div>
        <div>
          <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
        </div>
      </div>
    </div>
  );
}
