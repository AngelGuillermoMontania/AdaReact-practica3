import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  // Estado de la ciudad

  return (
    <form>
      <input
        type="text"
        placeholder="Ingrese su ciudad..."
        onChange={inpChange}
      />
      <button type="submit">Buscar</button>
    </form>
  );
}
