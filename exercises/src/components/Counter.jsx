import { useState } from "react";

export function Counter() {


  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter((c) => {
        return c + 1
    })
  }

  return (
    <>
      <h2 style={{
        backgroundColor: "aquamarine",
        color: "black",
        fontFamily: "Arial",
        fontSize: "40px",
      }}>{counter}</h2>
      <button onClick={handleClick}>Click</button>
    </>
  );
}