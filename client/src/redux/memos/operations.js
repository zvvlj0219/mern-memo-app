import { memoFetchAction } from "./actions";
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
        text:text,
        remainder:false
      });
      const { memos } = getState();
      const memosList = [data]
      memos.list.forEach(element => {
        memosList.push(element)
      });
      dispatch(memoFetchAction(memosList))//mapでイテレートするので配列のまま渡す,まじで！！！！！
    }catch(err){
      console.log(err)
      throw new Error();
    }
  }
}

export const updateMemo = (id,remainder) =>{
  return async (dispatch,getState)=>{
    try{
      await axios.put(url,{
        id:id,
        remainder:!remainder
      })
      
      const { memos } = getState();
      const refreshedData = [...memos.list];
      console.log(refreshedData)
      refreshedData.forEach(element=>{
        if(element._id === id){
          element.remainder = !remainder
        }
      })
      dispatch(memoFetchAction(refreshedData))//mapでイテレートするので配列のまま渡す,まじで！！！！！
    }catch(err){
      console.log(err)
      throw new Error();
    }
  }
}

export const deleteMemo = id =>{
  return async (dispatch,getState)=>{
    try{
      await axios.delete(url,{
        data:{
          id:id
        }
      });
      const { memos } = getState();
      const remain = memos.list.filter(el=>{
        return el._id !== id
      });  
      dispatch(memoFetchAction(remain));
    }catch(err){
      console.log(err)
      throw new Error();
    }
  }
}