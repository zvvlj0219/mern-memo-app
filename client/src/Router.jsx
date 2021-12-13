import {Switch, Route } from 'react-router';
import  MemoPage from './memo/MemoPage';

const Router = () =>{
  return (
    <Switch>
      <Route path='/' component={MemoPage}/>
    </Switch>
  )
}

export default Router