import React, { PureComponent } from 'react'
import { RouteComponentProps } from '../index'

interface Page2Params {
  test: string
  lalala: string
}

interface Page2State {
  a: number
  b: number
}

class Page2 extends PureComponent<RouteComponentProps<Page2Params, Page2State>> {
  handleClick = () => {
    this.props.history.back()
  }

  render() {
    console.log(this.props)
    console.log(this.props.location.state)
    return (
      <div>
        <h1>Page2</h1>
        <button onClick={this.handleClick}>回到page1</button>
      </div>
    )
  }
}

export default Page2
