import { BrowserRouter, Switch, Route } from 'react-router-dom';
import  MemoPage from './memo/MemoPage';

const Router = () =>{
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} component={MemoPage}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router