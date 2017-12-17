// @flow
import React from 'react'
import type { signProps as Props } from '../flow_types/component_types'

export const Circle = (props: Props) => (
  <svg
    width="100%" height="100%" className={props.circleClass}
    onClick={props.onClick ? () => props.onClick('circle') : null}>
    <circle
      cx="50%" cy="50%" r="30%" stroke="green" strokeWidth="10"
      fillOpacity="0"
    />
  </svg>
)

export const Cross = (props: Props) => (
  <svg
    height="100%" width="100%"
    className={props.crossClass}
    onClick={props.onClick ? () => props.onClick('circle') : null}>
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
