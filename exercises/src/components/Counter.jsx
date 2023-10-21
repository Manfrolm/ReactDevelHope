import { useState, useEffect, useRef } from 'react';
import React from "react";

export const Counter = ({initialValue = 0}) => {
  const [count, setCount] = useState(0);
  const prevRef = useRef(initialValue);
  const directionRef = useRef("");


  useEffect(() => {
    let newDirection;
    if (count > prevRef.current) {
      newDirection = "up";
    } else if (count < prevRef.current) {
      newDirection = "down";
    } else {
      newDirection = "";
    }

    if (newDirection !== directionRef.current) {
      directionRef.current = newDirection;
      console.log(directionRef.current);
    }
    prevRef.current = count;
  }, [count]);

  const handleIncrement = () => {
    setCount(count => {
      return count + 1;
    });
  };

  const handleDecrement = () => {
    setCount(count => {
      return count - 1;
    });
  };

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Up</button>
      <button onClick={handleDecrement}>Down</button>
    </>
  );
};
