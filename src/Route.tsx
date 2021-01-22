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

  // 处理loader
  if (loader && !component) {
    component = loadable(loader)
  }

  return (
    <RouterContext.Provider value={value}>
      {/* <div style={{ display: match ? 'block' : 'none' }}>
        {component ? React.createElement(component, value) : component}
      </div> */}
      <div>
            {match
        ? component
          ? React.createElement(component, value)
          : component
        : null}
        </div>

    </RouterContext.Provider>
  )
}

export default Route
