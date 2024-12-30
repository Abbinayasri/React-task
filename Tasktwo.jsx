import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // Initialize count state

  const increment = () => {
    setCount(count + 1); // Increase the count by 1
  };

  const decrement = () => {
    setCount(count - 1); // Decrease the count by 1
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Counter: {count}</h1>
      <button
        onClick={increment}
        style={{
          margin: "0.5rem",
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          backgroundColor: "#4CAF50",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Increase
      </button>
      <button
        onClick={decrement}
        style={{
          margin: "0.5rem",
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          backgroundColor: "#F44336",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default Counter;
