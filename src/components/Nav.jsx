import React from "react";
import Logo from "../assets/logoAda.png";
import SearchBar from "./SearchBar.jsx";

function Nav({ onSearch }) {
  return (
    <header
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={Logo} style={{ height: "11rem", width: "50%" }} />
      <h1>Ada Wheater - APP</h1>
      <SearchBar onSearch={onSearch} />
    </header>
  );
}

export default Nav;
