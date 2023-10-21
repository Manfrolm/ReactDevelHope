import React from 'react'

export const Colors = ({items}) => {
  return (
    <ul>{items.map((items, index) => <li key={index}>{items}</li>)}
        
    </ul>
  )
}
