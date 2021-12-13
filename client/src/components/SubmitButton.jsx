const SubmitButton = ({style,text,className,onClick}) =>{
  return (
    <button 
      style={style} 
      type="submit"
      className={className}
      onClick={(e) => onClick(e)}
    >{text}</button>
  )
}

export default SubmitButton