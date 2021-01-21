import {
  pathToRegexp,
  TokensToRegexpOptions,
  ParseOptions,
  Key
} from 'path-to-regexp'
import { Match } from './RouterContext'

type Options = TokensToRegexpOptions &
  ParseOptions & { path?: string; exact?: boolean }

interface CompilePathResult {
  regexp: RegExp
  keys: Key[]
}

function compilePath(path: string, options: Options): CompilePathResult {
  const keys: Key[] = []
  const regexp = pathToRegexp(path, keys, options)
  const result: CompilePathResult = { regexp, keys }

  return result
}

function matchPath<Params extends { [K in keyof Params]?: string }>(
  pathname: string,
  options: Options = {}
): Match<Params> | null {
  const { path, exact = false, strict = false, sensitive = false } = options

  if (!path && path !== '') return null

  const { regexp, keys } = compilePath(path, { end: exact, strict, sensitive })
  const match = regexp.exec(pathname)

  if (!match) return null

  const [url, ...values] = match
  const isExact = pathname === url

  const params = keys.reduce<any>((memo, key, index) => {
    memo[key.name] = values[index]
    return memo
  }, {})

  return {
    path,
    url: path === '/' && url === '' ? '/' : url,
    isExact,
    params: params as Params
  }
}

export default matchPath
