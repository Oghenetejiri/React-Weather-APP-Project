import React, { useState } from "react";

export default function Form() {
  const [search, setSearch] = useState();
  const [result, setResult] = useState();

  function handleSearch(event) {
    event.preventDefault();

    setResult(`It is 19°C in ${search}`);
  }
  function updateSearch(event) {
    setSearch(event.target.value);
  }
  return (
    <div className="formElement">
      <form className="locationForm" onSubmit={handleSearch}>
        <input
          type="text"
          placeHolder="Enter city"
          autoComplete="off"
          autoFocus={true}
          onChange={updateSearch}
        />
        <input type="submit" value="Search" />
        <button>Current</button>
      </form>
      <h1>{result}</h1>
    </div>
  );
}
