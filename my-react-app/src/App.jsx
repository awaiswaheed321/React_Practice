import { useState } from "react";
import "./App.css";
import Button from "./Button/Button";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button />
    </>
  );
}

export default App;
