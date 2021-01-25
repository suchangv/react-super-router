import React, { ComponentType, useEffect, useState } from 'react'
import { RouterContextProps } from './RouterContext'

const loadable = <T extends ComponentType<any>>(loader: () => Promise<{ default: T }>) => {
  const C: React.FC<RouterContextProps> = (props) => {
    const [Component, setComponent] = useState<ComponentType<any> | null>(null)
    useEffect(() => {
      loader().then((res) => {
        setComponent(() => res.default)
      })
    }, [])

    if (!Component) {
      return null
    }
    return <Component {...props} />
  }
  C.displayName = 'loadable'
  return C
}

export default loadable
