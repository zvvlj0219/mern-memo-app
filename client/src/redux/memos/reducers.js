import * as Actions from './actions';
import initialState from '../store/initialState';

export const MemoReducer = (state = initialState.memos,action) =>{
  switch(action.type){
    case Actions.fetch_memo :
      console.log(action.payload)
      return {
        ...state,
        list:action.payload
      }
    case Actions.insert_memo :
      console.log(state)
      console.log(action.payload)
      return {
        ...state,
        list:action.payload
      }
    default :
      return state
  }
}