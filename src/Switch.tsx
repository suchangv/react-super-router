import React, { useContext, useEffect, useReducer, useRef, useState } from 'react'
import matchPath from './matchPath'
import RouterContext from './RouterContext'

const Switch: React.FC = (props) => {
  const context = useContext(RouterContext)!
  const element = useRef<any>(null)
  const match = useRef<any>(null)

  const [, forceUpdate] = useReducer((x) => x + 1, 0)

  const location = context.location

  useEffect(() => {
    React.Children.forEach(props.children, (child) => {
      if (match.current === null && React.isValidElement(child)) {
        element.current = child

        const path = child.props.path

        match.current = path ? matchPath(location.pathname, { ...child.props, path }) : context.match
      }
    })

    forceUpdate()
  })

  return match.current ? React.cloneElement(element.current, { location, computedMatch: match.current }) : null
}

export default Switch
