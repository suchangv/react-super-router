import { createContext } from 'react'
import { History, Location } from 'history'

export interface Match<Params extends { [K in keyof Params]?: string } = {}> {
  params: Params
  isExact: boolean
  path: string
  url: string
}

interface RouterContextProps {
  history: History
  location: Location
  match: Match
}

const RouterContext = createContext<RouterContextProps | null>(null)

export default RouterContext
