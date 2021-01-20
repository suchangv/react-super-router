import matchPath from './matchPath'

const result = matchPath('/user/suchang/123?query=lalala', {
  path: '/user/:id/:post'
})

console.log(result)
