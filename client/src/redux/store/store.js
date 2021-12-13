import { createStore,combineReducers,applyMiddleware } from "redux";
import { connectRouter,routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

//Import reducers
import { MemoReducer } from '../memos/reducers'

//history
import { createBrowserHistory } from 'history'
export const history = createBrowserHistory();

//store
export default function configureStore(){
  const store = createStore(
    combineReducers({
      router:connectRouter(history),
      memos:MemoReducer
    }),
    applyMiddleware(
      routerMiddleware(history),
      thunk
    )
  )
  return store
}