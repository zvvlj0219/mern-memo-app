import { memoFetchAction } from "./actions";
import { memoInsertAction } from "./actions";
import axios from 'axios';

//baseurl proxy(=>http://localhost:5000)
const url = 'api/memos'

export const fetchMemo = () =>{
  return async (dispatch,getState) =>{
    try{
      const res = await axios.get(url);
      const data = await res.data;
      dispatch(memoFetchAction(data))//配列のまま渡す
    }catch(err){
      console.log(err)
    }
  }
}

export const insertMemo = text =>{
  return async (dispatch,getState)=>{
    try{
      const { data } = await axios.post(url,{
        text:text
      });
      dispatch(memoInsertAction({
        _id:data._id,
        text:text,
        reminder:false
      }))
    }catch(err){
      console.log(err)
    }
  }
}