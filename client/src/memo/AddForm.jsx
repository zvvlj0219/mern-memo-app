import { useState , useCallback } from "react";
import { useDispatch } from "react-redux";
import { insertMemo } from '../redux/memos/operations'; 
import SubmitButton from '../components/SubmitButton'

const AddForm = () =>{
  //state
  const [input,setInput] = useState('');

  //function
  const dispatch = useDispatch();

  const handleChange = useCallback(e =>{
    setInput(e.target.value)
  },[setInput])

  const addMemo = e =>{
    e.preventDefault();
    dispatch(insertMemo(input))
    setInput('');
  }

  //render
  return (
    <form className="addform">
      <p>new memo</p>
      <input 
        type="text" 
        placeholder="new.." 
        value={input}
        onChange={handleChange}
      />
      <SubmitButton  
        text='Add' 
        className='submitbutton'
        onClick={(e)=>addMemo(e)}
      />
    </form>
  )
}

export default AddForm