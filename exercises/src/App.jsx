import { useState } from 'react'
import { Counter } from './components/Counter'

function App() {

  return (
    <>
      <Counter initialValue={0} incrementValue={1}/>
    </>
  )
}

export default App


