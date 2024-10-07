function Button() {
  let count = 0;
  //   const handleClick = () => {
  //     console.log("OUCH");
  //   };
//   const handleClick = (name) => {
//     if (count < 3) {
//       count++;
//       console.log(`${name} you clicked me ${count} time`);
//     } else {
//       console.log(`${name} stop clicking me`);
//     }
//   };

const handleClick = (e) => {
    console.log(e);
    e.target.textContent = "Ouch"
}

const handleDoubleClick = (e) => {
    console.log(e);
    e.target.textContent = "Double Ouch"
}

  return <button onClick={(e) => handleClick(e)} onDoubleClick={(e) => handleDoubleClick(e)}>Click Me</button>;
}

export default Button;
