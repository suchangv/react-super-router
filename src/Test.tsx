import React, { useContext } from 'react'
import RouterContext from './RouterContext'

const Test = () => {
  const context = useContext(RouterContext)
  if (!context) return null

  const { match, component } = context

  console.log(context)

  return match ? (component ? React.createElement(component, { ...context }) : null) : null
}

export default Test
