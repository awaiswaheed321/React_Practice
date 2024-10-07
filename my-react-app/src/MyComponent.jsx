import { useState } from "react";

function MyComponent() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  const handleAddFood = (e) => {
    const newFood = document.getElementById("foodInput").value;
    if (newFood != "") {
      document.getElementById("foodInput").value = "";
      setFoods((c) => [...c, newFood]);
    }
  };

  const handleRemoveFood = (index) => {
    setFoods((f) => f.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>List of Foods</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter Food Name"></input>
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
}

export default MyComponent;
