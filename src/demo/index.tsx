import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from '../index'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import loadable from '@loadable/component'
// import { CSSTransition, SwitchTransition, Transition, TransitionGroup } from 'react-transition-group'
import './index.scss'

// import Page1 from './Page1'
// import Page2 from './Page2'
// import Page3 from './Page3'

const Page1 = loadable(() => import('./Page1'), { fallback: <div>Loading...</div> })
const Page2 = loadable(() => import('./Page2'), { fallback: <div>Loading...</div> })
const Page3 = loadable(() => import('./Page3'), { fallback: <div>Loading...</div> })

// const Page1 = () => import('./Page1')
// const Page2 = () => import('./Page2')
// const Page3 = () => import('./Page3')

const App: React.FC = () => {
  return (
    <Router>
      <span>helloworld</span>
      <Switch>
        <Route path='/page1' component={Page1} />
        <Route path='/page2' component={Page2} />
        <Route path='/page3' component={Page3} />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app')!)
