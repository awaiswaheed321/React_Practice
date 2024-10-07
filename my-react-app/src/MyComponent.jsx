import { useState } from "react";

function MyComponent() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });

  function handleYearChange(e) {
    setCar((c) => ({ ...c, year: e.target.value }));
  }

  function handleMakeChange(e) {
    setCar((c) => ({ ...c, make: e.target.value }));
  }

  function handleModelChange(e) {
    setCar((c) => ({ ...c, model: e.target.value }));
  }

  return (
    <div>
      <p>
        Your Fav Car is: {car.year} {car.make} {car.model}
      </p>
      <label style={{ padding: "10px" }}>Year</label>
      <input type="number" value={car.year} onChange={handleYearChange}></input>
      <br />
      <label style={{ padding: "10px" }}>Make</label>
      <input type="text" value={car.make} onChange={handleMakeChange}></input>
      <br />
      <label style={{ padding: "10px" }}>Model</label>
      <input type="text" value={car.model} onChange={handleModelChange}></input>
      <br />
    </div>
  );
}

export default MyComponent;
