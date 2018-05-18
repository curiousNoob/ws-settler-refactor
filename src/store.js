import { applyMiddleware, createStore, compose } from "redux"

import logger from "redux-logger"
import thunk from 'redux-thunk'

import reducers from "./reducers"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleWareArr = [logger, thunk]

const middleWare = applyMiddleware(...middleWareArr)

const store = createStore(reducers, composeEnhancers(middleWare))

const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

//unsubscribe()

export default store