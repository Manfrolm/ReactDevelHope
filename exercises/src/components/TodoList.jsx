import React from "react";
import { useState } from "react";

export const TodoList = () => {
  const [items, setItems] = useState([]);
  const [todo, setTodo] = useState("");


  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleTodo = (e) => {
    setItems((items) => {
        return [...items, todo];
      });
  }


  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <input type="text" value={todo} onChange={handleChange} />
      <button onClick={handleTodo}>Click me</button>
    </>
  );
};
