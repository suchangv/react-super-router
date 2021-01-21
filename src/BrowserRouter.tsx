import React from 'react'
import Router from './Router'
import history from 'history/browser'

const BrowserRouter: React.FC = (props) => {
  return <Router history={history} children={props.children} />
}

export default BrowserRouter
