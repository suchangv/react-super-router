import { useContext } from 'react'
import RouterContext from './RouterContext'

export function useHistory() {
  return useContext(RouterContext)?.history
}

export function useLocation() {
  return useContext(RouterContext)?.location
}

export function useParams<Params extends { [K in keyof Params]?: string } = {}>(): Params {
  const match = useContext(RouterContext)?.match
  return ((match ? match.params : {}) as unknown) as Params
}
