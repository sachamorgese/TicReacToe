import React from 'react'

export const Circle = () =>
  (
    <svg width="100%" height="100%" className="svg-content">
      <circle
        cx="50%" cy="50%" r="30%" stroke="green" strokeWidth="10"
        fillOpacity="0"
      />
    </svg>
  )
export const Cross = () =>
  (
    <svg height="100%" width="100%">
      <line
        x1="20%" y1="20%" x2="80%" y2="80%" className="cross"
        stroke="black" strokeWidth="10"
      />
      <line
        x1="80%" y1="20%" x2="20%" y2="80%" className="cross"
        stroke="black" strokeWidth="10"
      />
    </svg>
  )
