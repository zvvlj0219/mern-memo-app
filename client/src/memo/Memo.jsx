import { useDispatch } from "react-redux";
import { deleteMemo } from '../redux/memos/operations'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


const Memo = ({memo}) =>{
  const dispatch = useDispatch();
  return (
    <div 
      className="memo"
      onDoubleClick={()=>dispatch(deleteMemo(memo._id))}
    >
      <p>id : {`${memo._id.slice(0,10)}...`}</p>
      <p>text : {memo.text}</p>
      <FontAwesomeIcon icon={faTrash} />
    </div>
  )
}

export default Memo