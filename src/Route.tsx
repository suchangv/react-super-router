import React, { useContext } from 'react'

import RouterContext from './RouterContext'
import matchPath from './matchPath'

import loadable from './loadable'
import { Loader } from './types'

interface RouteProps {
  component?: React.ComponentType<any>
  loader?: Loader
  render?: (props: React.ComponentType<any>) => React.ReactNode
  path?: string
  exact?: boolean
  sensitive?: boolean
  strict?: boolean
}

const Route: React.FC<RouteProps> = (props) => {
  const context = useContext(RouterContext)
  const location = context!.location
  const match = matchPath(location.pathname, props)
  const value = { history: context!.history, location, match }
  let { component, loader } = props

  if (loader && !component) {
    component = loadable(loader)
  }

  return (
    <RouterContext.Provider value={value}>
      {match
        ? component
          ? React.createElement(component, value)
          : component
        : null}
    </RouterContext.Provider>
  )
}

export default Route
