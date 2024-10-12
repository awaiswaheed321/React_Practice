import ComponentD from "./ComponentD.jsx";
import { UserContext } from "./ComponentA.jsx";
import { useContext } from "react";

function ComponentC() {
  const user = useContext(UserContext);
  return (
    <div className="box">
      <h1>ComponentC</h1>
      <h2>{`Hello x3 ${user}`}</h2>
      <ComponentD></ComponentD>
    </div>
  );
}

export default ComponentC;
