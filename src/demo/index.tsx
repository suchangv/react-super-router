import React from 'react'
import ReactDOM from 'react-dom'
// import Page1 from './Page1'
// import Page2 from './Page2'
const Page1 = () => import('./Page1')
const Page2 = () => import('./Page2')

import { BrowserRouter as Router, Route } from '../index'

const App: React.FC = () => {
  return (
    <Router>
      <span>helloworld</span>
      <Route path='/page1' loader={Page1} />
      <Route path='/page2' loader={Page2} />
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
