import React, { useState } from "react";
import ContainCard from "./components/ContainCard.jsx";
import Nav from "./components/Nav.jsx";
import data from "./data.js";

export default function App() {
  // Estado de la lista de ciudades

  const apiKey = import.meta.env.VITE_API_KEY_OPENWEATHER;

  function onClose(id) {
    // Codigo
  }

  function onSearch(ciudad) {
    // Codigo
  }

  return (
    <div>
      <Nav onSearch={onSearch} />
      <ContainCard cities={cities} onClose={onClose} />
    </div>
  );
}
