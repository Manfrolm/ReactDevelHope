import { useState } from 'react'
import { AlertClock} from './components/AlertClock'

function App() {

  const handleButtonClick = () => {
    const currentTime = new Date().toLocaleTimeString();
    alert(`The current time is: ${currentTime}`)
}

  return (
    <>
    <AlertClock onClick={handleButtonClick}/>
    </>
  )
}

export default App


