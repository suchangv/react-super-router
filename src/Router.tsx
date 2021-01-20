import React, { useEffect, useState } from 'react'
import { History } from 'history'

import RouterContext from './RouterContext'
import { Match } from './RouterContext'

const computeRootMatch = (pathname: string): Match => {
  return { path: '/', url: '/', params: {}, isExact: pathname === '/' }
}

interface RouterProps {
  history: History
}

const Router: React.FC<RouterProps> = ({ history, children }) => {
  const [location, setLocation] = useState(history.location)

  useEffect(() => {
    const unlisten = history.listen(({ location }) => {
      setLocation(location)
    })
    return unlisten
  }, [])

  return (
    <RouterContext.Provider
      value={{
        history: history,
        location: location,
        match: computeRootMatch(location.pathname)
      }}
    >
      {children}
    </RouterContext.Provider>
  )
}

export default Router
