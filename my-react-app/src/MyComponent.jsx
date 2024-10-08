import { useState, useEffect } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('green');

  useEffect(() => {
    document.title = `Count: ${count}, ${color}`;
  }, [count, color]);

  const handleAddCount = () => {
    setCount((c) => c + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const changeColor = () => {
    setColor(c => c === "green" ? "red" : "green")
  }

  return (
    <>
      <p style={{color: color}}>Count: {count}, {color}</p>
      <button onClick={handleAddCount}>Add</button> <br />
      <button onClick={handleReset}>Reset</button> <br />
      <button onClick={changeColor}>Change Color</button>
    </>
  );
}

export default MyComponent;
