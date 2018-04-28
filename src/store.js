import { applyMiddleware, createStore } from "redux"

import logger from "redux-logger"
import thunk from 'redux-thunk'

import reducers from "./reducers"


const middleWare = applyMiddleware(logger, thunk)

const store = createStore(reducers, middleWare)

const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

//unsubscribe()

export default store