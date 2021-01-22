import React from 'react'
import { RouteComponentProps, useParams } from '../index'

interface Page1Params {
  id: string
  name: string
}

const Page1: React.FC<RouteComponentProps<Page1Params>> = (props) => {
  const params = useParams()
  console.log(props)
  console.log(params)
  console.log(props.match.params)
  console.log(params === props.match.params)
  const handleClick = () => {
    props.history.push('/page2', { a: 1, b: 2 })
  }
  return (
    <div>
      <h1>Page1</h1>
      <button onClick={handleClick}>去page2</button>
      <button onClick={() => props.history.push('/page3')}>去page3</button>
    </div>
  )
}

export default Page1
