import { useState } from 'react'
import { Counter } from './components/Counter'

function App() {

  return (
    <>
      <Counter initialValue={0} incrementValue={1} decrementValue={10}/>
    </>
  )
}

export default App


