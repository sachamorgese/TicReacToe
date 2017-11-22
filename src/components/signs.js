import React from 'react'

export const Circle = (props) =>
  (
    <svg width="100%" height="100%" className={props.circleClass} onClick={() => props.onClick('circle')}>
      <circle
        cx="50%" cy="50%" r="30%" stroke="green" strokeWidth="10"
        fillOpacity="0"
      />
    </svg>
  )
export const Cross = (props) =>
  (
    <svg height="100%" width="100%" className={props.crossClass} onClick={() => props.onClick('cross')}>
      <line
        x1="20%" y1="20%" x2="80%" y2="80%"
        stroke="black" strokeWidth="10"
      />
      <line
        x1="80%" y1="20%" x2="20%" y2="80%"
        stroke="black" strokeWidth="10"
      />
    </svg>
  )
