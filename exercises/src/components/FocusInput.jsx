import { useRef, useEffect } from 'react'
import React from 'react'

export const FocusInput = () => {

    const focusInput = useRef(null)

useEffect(() => {
    focusInput.current?.focus()
   }, [])
   

  return (
    <input ref={focusInput} type="text" />
  )
}