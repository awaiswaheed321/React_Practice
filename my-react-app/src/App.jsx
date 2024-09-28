import "./App.css";
import Student from "./Student";
function App() {
  return (
    <>
      <Student name="Sponge Bob" age = {50} isStudent={true}/>
      <Student name="John Doe" age = {30} isStudent={1}/>
      <Student name="Ted Lasso" age = "30" isStudent={0}/>
      <Student name="Coach Beard" age = {45} isStudent={false}/>
      <Student name="Roy Kent"/>
    </>
  );
}

export default App;
