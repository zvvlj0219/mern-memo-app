import { createSelector } from "reselect";

const memosSelector = state => state.memos;//ここではstateのキー、memosとかを指定

export const getMemos = createSelector(
  [memosSelector],  //ここは↑で指定した通り
  state=>state.list //第二引数には第一引数でreturnされるstate.memosがそのままstateとなって入ってくる
)