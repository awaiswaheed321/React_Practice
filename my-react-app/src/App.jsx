import "./App.css";
import List from "./List";
function App() {
  const fruits = [
    { id: 1, name: "Apple", calories: 95 },
    { id: 2, name: "Banana", calories: 120 },
    { id: 3, name: "Pineapple", calories: 55 },
    { id: 4, name: "Apricot", calories: 60 },
    { id: 5, name: "Coconut", calories: 150 },
  ];

  const veggies = [
    { id: 6, name: "Potato", calories: 110 },
    { id: 7, name: "Celery", calories: 15 },
    { id: 8, name: "Carrots", calories: 25 },
    { id: 9, name: "Corn", calories: 63 },
    { id: 10, name: "Broccoli", calories: 50 },
  ];

  return (
    <>
    {fruits.length > 0 && <List items={fruits} category="Fruits"></List>}
    {veggies.length > 0 && <List items={veggies} category="Veggies"></List>}
    <List></List>
    </>
  );
}

export default App;
