import React from "react";

export default function ContainCards({ cities, onClose }) {
  return (
    <div>
      {cities &&
        cities.map((city) => {
          return <></>;
        })}
    </div>
  );
}
