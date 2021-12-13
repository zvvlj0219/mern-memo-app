import * as Actions from './actions';
import initialState from '../store/initialState';

export const MemoReducer = (state = initialState.memos,action) =>{
  switch(action.type){
    case Actions.fetch_memo :
      return {
        ...state,
        list:[...action.payload]
      }
    case Actions.insert_memo :
      return {
        ...state,
        list:[...action.payload]
      }
    case Actions.update_memo :
      return {
        ...state,
        list:[...action.payload]
      }
    case Actions.delete_memo :
      return {
        ...state,
        list:[...action.payload]
      }
    default :
      return state
  }
}