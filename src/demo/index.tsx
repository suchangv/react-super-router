import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from '../index'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
// import loadable from '@loadable/component'

// const Page1 = loadable(() => import('./Page1'), { fallback: <div>Loading...</div> })
// const Page2 = loadable(() => import('./Page2'), { fallback: <div>Loading...</div> })
// const Page3 = loadable(() => import('./Page3'), { fallback: <div>Loading...</div> })

const Page1 = () => import('./Page1')
const Page2 = () => import('./Page2')
const Page3 = () => import('./Page3')

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
