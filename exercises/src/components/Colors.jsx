import React from 'react'
import { Color } from './Color'

export const Colors = ({items}) => {
  return (
    <ul>
      <Color
        items={[
          { id: 1, name: "red" },
          { id: 2, name: "blue" },
          { id: 3, name: "green" },
          { id: 4, name: "yellow" },
        ]}
      />
    </ul>
  )
}
