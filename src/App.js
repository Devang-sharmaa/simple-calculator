import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState(""); // For entering current number
  const [result, setResult] = useState(0); // To store the ongoing result
  const [operation, setOperation] = useState(null); // To store the current operation

  const handleInputChange = (e) => {
    const value = e.target.value;
    // Allow only numeric values in the input field
    if (!isNaN(value) || value === "") {
      setInput(value);
    }
  };

  const handleOperation = (op) => {
    if (input !== "") {
      // Convert input to number for calculation
      const numInput = Number(input);

      if (operation === null) {
        // If no previous operation, set result to the input number
        setResult(numInput);
      } else {
        // Perform the stored operation with the input value
        switch (operation) {
          case "add":
            setResult(result + numInput);
            break;
          case "subtract":
            setResult(result - numInput);
            break;
          case "multiply":
            setResult(result * numInput);
            break;
          case "divide":
            if (numInput !== 0) {
              setResult(result / numInput);
            } else {
              alert("Cannot divide by zero");
            }
            break;
          default:
            break;
        }
      }
      // Set the next operation
      setOperation(op);
      setInput(""); // Clear input after operation
    }
  };

  const resetInput = () => setInput("");
  const resetResult = () => {
    setResult(0);
    setInput("");
    setOperation(null);
  };

  return (
    <div className="App">
      <h1>Simple Calculator</h1>
      <div>
        <h2>Result: {result}</h2>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter a number"
        />
      </div>
      <div>
        <button onClick={() => handleOperation("add")}>Add</button>
        <button onClick={() => handleOperation("subtract")}>Subtract</button>
        <button onClick={() => handleOperation("multiply")}>Multiply</button>
        <button onClick={() => handleOperation("divide")}>Divide</button>
        <button onClick={resetInput} style={{ background: "tomato" }}>
          Reset Input
        </button>
        <button onClick={resetResult} style={{ background: "tomato" }}>
          Reset Result
        </button>
      </div>
    </div>
  );
}

export default App;
