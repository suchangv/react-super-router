import React from 'react'
import ReactDOM from 'react-dom'
const Page1 = () => import('./Page1')
const Page2 = () => import('./Page2')
const Page3 = () => import('./Page3')

import { BrowserRouter as Router, Route } from '../index'

const App: React.FC = () => {
  return (
    <Router>
      <span>helloworld</span>
      <Route path='/page1' loader={Page1} />
      <Route path='/page2' loader={Page2} />
      <Route path='/page3' loader={Page3} />
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
