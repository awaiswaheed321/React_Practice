import { useState, useEffect } from "react";

function Comp2() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("E Added");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("E Removed");
    };
  }, []);

  useEffect(() => {
    document.title = `Size: ${width} x ${height}`
  }, [width, height])

  return (
    <>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </>
  );
}

export default Comp2;
