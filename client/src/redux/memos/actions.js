export const fetch_memo = 'fetch_memo'
export const memoFetchAction = memos =>{
  console.log(memos);
  return {
    type:'fetch_memo',
    payload:memos
  }
}

export const insert_memo = 'insert_memo';
export const memoInsertAction = memos =>{
  return {
    type:'insert_memo',
    payload:memos
  }
}

export const update_memo = 'update_memo';
export const memoUpdateAction = memos =>{
  return {
    type:'update_memo',
    payload:memos
  }
}

export const delete_memo = 'delete_memo';
export const memoDeleteAction = memos =>{
  return {
    type:'delete_memo',
    payload:memos
  }
}
