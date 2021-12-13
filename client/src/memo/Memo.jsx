import { useDispatch } from "react-redux";
import { deleteMemo } from '../redux/memos/operations'; 
import { updateMemo } from '../redux/memos/operations'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


const Memo = ({memo}) =>{
  const dispatch = useDispatch();
  return (
    <div 
      className={`memo ${memo.remainder ? 'isDone' : ''}`}
      onDoubleClick={()=>dispatch(updateMemo(memo._id,memo.remainder))}
    >
      <div>
        <p>id : {`${memo._id.slice(0,10)}...`}</p>
        <p>text : {memo.text}</p>
      </div>
      <FontAwesomeIcon 
        className="icon trash" 
        icon={faTrash} 
        onClick={()=>dispatch(deleteMemo(memo._id))}
      />
    </div>
  )
}

export default Memo