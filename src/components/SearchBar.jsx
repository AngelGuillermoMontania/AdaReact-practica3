import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  // Aca va tu codigo

  const [city, setCity] = useState("");

  const inpChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
      }}
    >
      <input
        type="text"
        placeholder="Ingrese su ciudad..."
        onChange={inpChange}
      />
      <button type="submit">Buscar</button>
      {/* <input type="submit"> */}
    </form>
  );
}
