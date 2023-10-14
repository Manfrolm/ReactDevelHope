import { useState } from 'react'
import { Hello }  from './components/Hello'
import { Message } from './components/Message'

function App() {

  return (
    <>
      <Hello />
      <Hello />
      <Hello />
      <Hello />
      <Hello />
      <Message />
    </>
  )
}

export default App


{/* Il component, se utilizzato più volte, sarà renderizzato per tutte le volte che viene utilizzato (In questo caso avremo cinque tag h2) */}
