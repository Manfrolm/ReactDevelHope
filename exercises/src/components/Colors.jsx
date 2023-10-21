import React from 'react'

export const Colors = ({items}) => {
  return (
    <ul>{items.map((item) => (<li key={item.id}>{item.color}</li>))}        
    </ul>
  )
}
