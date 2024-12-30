import React, { useState } from "react";

function NameUpdater() {
  const [name, setName] = useState("Default Name"); 
  const [inputValue, setInputValue] = useState(""); 
  const handleInputChange = (e) => {
    setInputValue(e.target.value); 
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (inputValue.trim() !== "") {
      setName(inputValue); 
      setInputValue(""); 
    }
  };

  return (
    <div style={{ textAlign: "left", marginTop: "2rem" }}>
      <h1>{name}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a new name"
          style={{ padding: "0.5rem", fontSize: "1rem" }}
        />
        <button type="submit" style={{ marginLeft: "1rem", padding: "0.5rem", fontSize: "1rem" }}>
          Change Name
        </button>
      </form>
    </div>
  );
}

export default NameUpdater;
