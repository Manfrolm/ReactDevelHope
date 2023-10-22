import React from "react";
import { useState } from "react";

export const TodoList = () => {
  const [items, setItems] = useState([]);
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleTodo = (e) => {
    setItems((items) => {
      return [...items, todo];
    });
    setTodo("");
  };

  const handleReset = () => {
    setItems([]);
  };

  const handleDeleteLi = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <>
      <ul>
        {items.map((item, index) => (
          <div>
            <li key={index}>{item}</li>
            <button type="reset" onClick={() => handleDeleteLi(index)}>
              Delete
            </button>
          </div>
        ))}
      </ul>
      <input type="text" value={todo} onChange={handleChange} />
      <button onClick={handleTodo}>Add</button>
      <button type="reset" onClick={handleReset}>
        Reset
      </button>
    </>
  );
};
