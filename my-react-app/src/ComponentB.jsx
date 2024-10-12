import ComponentC from "./ComponentC.jsx";
import { UserContext } from "./ComponentA.jsx";
import { useContext } from "react";
function ComponentB() {
  const user = useContext(UserContext);
  return (
    <div className="box">
      <h1>ComponentB</h1>
      <h2>{`Hello again ${user}`}</h2>
      <ComponentC></ComponentC>
    </div>
  );
}

export default ComponentB;
