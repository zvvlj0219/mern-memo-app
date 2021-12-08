const SubmitButton = ({style,text,className}) =>{
  return (
    <button 
      style={style} 
      type="submit"//submit 
      className={className}
    >{text}</button>
  )
}

export default SubmitButton