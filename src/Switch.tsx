import React, { useContext } from 'react'
import matchPath from './matchPath'
import RouterContext, { Match } from './RouterContext'

const Switch: React.FC = (props) => {
  const context = useContext(RouterContext)!
  let element: React.ReactNode = null
  let match: Match | null = null

  const location = context.location

  React.Children.forEach(props.children, (child) => {
    if (match === null && React.isValidElement(child)) {
      element = child

      const path = child.props.path

      match = path ? matchPath(location.pathname, { ...child.props, path }) : context.match
    }
  })

  return match ? (element ? React.cloneElement(element, { location, computedMatch: match }) : null) : null
}

export default Switch
