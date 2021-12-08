const Memo = ({memo}) =>{
  return (
    <div 
      className="memo"
      onDoubleClick={()=>console.log('delete')}
    >
      <p>id : {`${memo._id.slice(0,10)}...`}</p>
      <p>text : {memo.text}</p>
    </div>
  )
}

export default Memo