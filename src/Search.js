import React, { useState } from "react";

export default function SearchEngine() {
  const [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`You searched for ${city}`);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="search" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );
}
