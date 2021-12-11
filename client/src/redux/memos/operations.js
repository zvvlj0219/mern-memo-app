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
      console.log(data)
      dispatch(memoFetchAction(data))//mapでイテレートするので配列のまま渡す,まじで！！！！！
    }catch(err){
      console.log(err);
      throw new Error();
    }
  }
}

export const insertMemo = text =>{
  return async (dispatch,getState)=>{
    try{
      const { data } = await axios.post(url,{
        text:text
      });
      const { memos } = getState();
      const memosList = [data]
      memos.list.forEach(element => {
        memosList.push(element)
      });
      dispatch(memoInsertAction(memosList))//mapでイテレートするので配列のまま渡す,まじで！！！！！
    }catch(err){
      console.log(err)
      throw new Error();
    }
  }
}