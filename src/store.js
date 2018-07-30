import { isProduction } from './constants'


import { createBrowserHistory } from 'history'
import { applyMiddleware, createStore, compose } from "redux"
import { connectRouter, routerMiddleware } from 'connected-react-router'

import logger from "redux-logger"
import thunk from 'redux-thunk'

import reducers from "./reducers"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleWareArr = isProduction?[thunk]:[logger, thunk]
const middleWare = applyMiddleware(...middleWareArr, routerMiddleware(history))

export const history = createBrowserHistory()

const store = createStore(
	connectRouter(history)(reducers), 
	composeEnhancers(middleWare)
)

const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

//unsubscribe()

export default store