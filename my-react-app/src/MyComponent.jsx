import React, { useState } from "react";

function MyComponent() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);
    const updateName = () => {
        setName("John Doe")
    }
    const incrementAge = () => {
        setAge(age+1)
    }
    const decrementAge = () => {
        setAge(age-1)
    }
    const changeEmployment = () => {
        setIsEmployed(!isEmployed)
    }
    return (<div>
        <p>Name: {name}</p>
        <button onClick={() => updateName()} >Set Name</button>
        <p>Age: {age}</p>
        <button onClick={() => incrementAge()} >Increment Age</button>
        <button onClick={() => decrementAge()} >Decrement Age</button>
        <p>Is Employed: {isEmployed ? "True" : "False"}</p>
        <button onClick={() => changeEmployment()} >Change Employment</button>
    </div>)
}

export default MyComponent;
