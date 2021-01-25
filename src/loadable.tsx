import React, { ComponentType, useEffect, useState } from 'react'
import { RouterContextProps } from './RouterContext'

function loadable<T extends ComponentType<any>>(loader: () => Promise<{ default: T }>) {
  const C = function (props: RouterContextProps | null) {
    const [Component, setComponent] = useState<ComponentType<any> | null>(null)
    useEffect(() => {
      loader().then((res) => {
        setComponent(() => res.default)
      })
    }, [])
    if (!Component) {
      return null
    } else {
      return <Component {...props} />
    }
  }

  return C
}

export default loadable
