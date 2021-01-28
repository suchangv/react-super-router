import { History, Location, State } from 'history'
import { Match } from './RouterContext'

export interface RouteComponentProps<Params extends { [K in keyof Params]?: string } = {}, S extends State = {}> {
  history: History
  location: Location<S>
  match: Match<Params>
}
