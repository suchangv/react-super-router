import React from 'react'
import Router from './Router'
import history from 'history/hash'

const HashRouter: React.FC = (props) => {
  return <Router history={history} children={props.children} />
}

export default HashRouter
