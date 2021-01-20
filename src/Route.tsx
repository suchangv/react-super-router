import React, { Fragment, useContext } from 'react'
import { Location } from 'history'

import RouterContext from './RouterContext'
import matchPath from './matchPath'

function isEmptyChildren(children: React.ReactNode) {
  return React.Children.count(children) === 0
}

function evalChildrenDev(children: Function, props: object) {
  const value = children(props)

  return value || null
}

interface RouteProps {
  location?: Location
  component?: React.ComponentType<any>
  render?: (props: React.ComponentType<any>) => React.ReactNode
  path?: string
  exact?: boolean
  sensitive?: boolean
  strict?: boolean
  computedMatch: typeof matchPath
}

const Route: React.FC<RouteProps> = (props) => {
  const context = useContext(RouterContext)

  const location = props.location || context!.location
  const match = props.path
    ? matchPath(location.pathname, props)
    : context?.match

  let { children, component, render } = props

  if (Array.isArray(children) && isEmptyChildren(children)) {
    children = null
  }

  return <Fragment>{}</Fragment>
}

export default Route
