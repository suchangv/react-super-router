import React, { useEffect, useState } from 'react'
import { RouterContextProps } from './RouterContext'
import { Loader } from './types'

const loadable = (loader: Loader) => (props: RouterContextProps | null) => {
  const [Component, setComponent] = useState<React.ComponentType<any> | null>(null)

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

export default loadable
