import { useState } from 'react'
import { PrintName } from './components/PrintName'

function App() {

  const name= <h1>JSX Expression</h1>;

  return (
    <>
      <PrintName name={name}/> 
    </> 
  )
}

export default App



{/* Nel caso in cui la variabile "name" dovesse contenere un'espressione JSX invece di una stringa, 
React andrà a renderizzare l'espressione JSX come parte del component  */}

