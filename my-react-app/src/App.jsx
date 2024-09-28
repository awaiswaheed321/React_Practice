import "./App.css";
import UserGreeting from "./UserGreeting";

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={0} username="John Doe"/>
    </>
  );
}

export default App;
