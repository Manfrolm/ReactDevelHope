import { useState } from 'react'
import { PrintName } from './components/PrintName'

function App() {

  const name="Mario";

  return (
    <>
      <PrintName /> 
    </> 
  )
}

export default App


{/* Nel caso in cui non dovessimo passare la variabile "name" alla funzione, il component verrà renderizzato comunque ma
ma l'output del name sarà undefined, quindi "Hello, undefined"  e il nome non apparirà a schermo*/}
