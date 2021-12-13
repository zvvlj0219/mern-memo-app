import { useEffect } from 'react';
import { useDispatch,useSelector } from "react-redux";
import { fetchMemo } from '../redux/memos/operations'; 
import { getMemos } from '../redux/memos/selectors';
import Memo from './Memo';
import AddForm from './AddForm';


const MemoPage = () =>{
  //hooks
  const dispatch = useDispatch();

  //selector
  const selector = useSelector(state=>state);
  const memos = getMemos(selector)
  
  //useEffect
  useEffect(()=>{
    dispatch(fetchMemo());
  },[dispatch])

  //render
  return (
    <div className="memopage">
      <h2>.Memo</h2>
      <AddForm/>
      {
        memos.length > 0 ?
        memos.map(memo=>(
          <Memo 
            memo={memo} 
            key={memo._id}
          />
        ))
        :
        <p>No memo to show</p>
      }
    </div>
  )
}

export default MemoPage;