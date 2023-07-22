import React from "react";
import Card from "./Card";

export default function ContainCards({ cities, onClose }) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "3rem",
      }}
    >
      {cities &&
        cities.map((city) => {
          return (
            <Card
              key={city.id}
              id={city.id}
              name={city.name}
              min={city.min}
              max={city.max}
              img={city.img}
              onClose={onClose}
            />
          );
        })}
    </div>
  );
}
