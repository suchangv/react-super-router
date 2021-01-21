// @ts-nocheck

import React, { PureComponent, useEffect, useState } from 'react'
import { Loader } from './types'

// const loadable = (
//   loader: () => Promise<any>
// ): React.ComponentType<any> | null => {
//   const [component, setComponent] = useState<React.ComponentType<any> | null>(
//     null
//   )

//   useEffect(() => {
//     const getComponent = async () => {
//       try {
//         const component = await loader()
//         setComponent(component.default)
//       } catch (err) {
//         console.error(err)
//         setComponent(null)
//       }
//     }
//     getComponent()
//   }, [])

//   return component || null
// }

// export default loadable

const loadable = (loader: Loader, ...props) =>
  class extends PureComponent {
    state = {
      component: null
    }

    componentDidMount() {
      loader().then((res) => {
        const component = res.default
        this.setState({
          component
        })
      })
    }

    render() {
      const { component: Component } = this.state
      if (!Component) {
        return null
      } else {
        return <Component {...this.props} />
      }
    }
  }

export default loadable
