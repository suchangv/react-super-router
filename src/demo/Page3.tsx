import React from 'react'
import { RouteComponentProps, useParams } from '../index'

interface Page3Params {
  id: string
  name: string
}

const Page3: React.FC<RouteComponentProps<Page3Params>> = (props) => {
  const handleClick = () => {
    props.history.push('/page1')
  }

  return (
    <div>
      <h1>Page3</h1>
      <h1>Page3</h1>
      <h1>Page3</h1>
      <button onClick={handleClick}>去page1</button>
    </div>
  )
}

export default Page3
