import React, { createContext, useState, useEffect, useContext } from 'react';
import history from 'history/browser';
import history$1 from 'history/hash';
import { pathToRegexp } from 'path-to-regexp';

const RouterContext = createContext(null);

const computeRootMatch = (pathname) => {
    return { path: '/', url: '/', params: {}, isExact: pathname === '/' };
};
const Router = ({ history, children }) => {
    const [location, setLocation] = useState(history.location);
    useEffect(() => {
        const unlisten = history.listen(({ location }) => {
            setLocation(location);
        });
        return unlisten;
    }, []);
    return (React.createElement(RouterContext.Provider, { value: {
            history: history,
            location: location,
            match: computeRootMatch(location.pathname)
        } }, children));
};

const BrowserRouter = (props) => {
    return React.createElement(Router, { history: history, children: props.children });
};

const HashRouter = (props) => {
    return React.createElement(Router, { history: history$1, children: props.children });
};

function useHistory() {
    var _a;
    return (_a = useContext(RouterContext)) === null || _a === void 0 ? void 0 : _a.history;
}
function useLocation() {
    var _a;
    return (_a = useContext(RouterContext)) === null || _a === void 0 ? void 0 : _a.location;
}
function useParams() {
    var _a;
    const match = (_a = useContext(RouterContext)) === null || _a === void 0 ? void 0 : _a.match;
    return match ? match.params : {};
}

function compilePath(path, options) {
    const keys = [];
    const regexp = pathToRegexp(path, keys, options);
    const result = { regexp, keys };
    return result;
}
function matchPath(pathname, options = {}) {
    const { path, exact = false, strict = false, sensitive = false } = options;
    if (!path && path !== '')
        return null;
    const { regexp, keys } = compilePath(path, { end: exact, strict, sensitive });
    const match = regexp.exec(pathname);
    if (!match)
        return null;
    const [url, ...values] = match;
    const isExact = pathname === url;
    const params = keys.reduce((memo, key, index) => {
        memo[key.name] = values[index];
        return memo;
    }, {});
    return {
        path,
        url: path === '/' && url === '' ? '/' : url,
        isExact,
        params: params
    };
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function loadable(loader) {
    const [component, setComponent] = useState(null);
    useEffect(() => {
        const getComponent = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const component = yield loader();
                setComponent(component);
            }
            catch (err) {
                console.error(err);
                setComponent(null);
            }
        });
        getComponent();
    }, []);
    return component;
}

const Route = (props) => {
    var _a;
    const context = useContext(RouterContext);
    const location = context.location;
    const match = matchPath(location.pathname, props);
    const value = { history: context.history, location, match };
    let { component, loader } = props;
    if (loader && !component) {
        component = (_a = loadable(loader)) !== null && _a !== void 0 ? _a : undefined;
    }
    return (React.createElement(RouterContext.Provider, { value: value }, match
        ? component
            ? React.createElement(component, value)
            : component
        : null));
};

export { BrowserRouter, HashRouter, Route, Router, matchPath, useHistory, useLocation, useParams };
//# sourceMappingURL=react-super-router.js.map
