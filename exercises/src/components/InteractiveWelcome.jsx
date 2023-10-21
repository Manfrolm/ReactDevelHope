import React from "react";
import { useState } from 'react'
import { Welcome } from './Welcome'

export function InteractiveWelcome() {

    const [name, setName] = useState("");

    const handleInput = (e) => {
        const value = e.target.value;
        setName(value);
    }

  return (
    <>
      <input type="text" value={name} onChange={handleInput}/>
      <Welcome name={name}/>
    </>
  );
};

