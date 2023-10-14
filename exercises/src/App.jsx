import { useState } from 'react'
import { PrintName } from './components/PrintName'

function App() {

  const name="Mario";

  return (
    <>
      <PrintName name={name}/> 
    </> 
  )
}

export default App
