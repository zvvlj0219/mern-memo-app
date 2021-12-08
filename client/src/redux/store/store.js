import { createStore as reduxStore,combineReducers,applyMiddleware } from "redux";
import { connectRouter,routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

//Import reducers
import { MemoReducer } from '../memos/reducers'

export default function createStore(history){
  return reduxStore(
    combineReducers({
      router:connectRouter(history),
      memos:MemoReducer
    }),
    applyMiddleware(
      routerMiddleware(history),
      thunk
    )
  )
}