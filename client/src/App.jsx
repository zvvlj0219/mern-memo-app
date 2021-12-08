import './App.css';
import Header from './view/Header';
import Router from './Router';

const App = () =>{
  return (
    <div>
      <Header />
      <div className="main">
        <Router/>
      </div>
    </div>
  );
}

export default App;