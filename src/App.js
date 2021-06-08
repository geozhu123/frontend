import './App.css';
import CoinInfo from './components/fund_performance/CoinInfo.js';
import FundInfo from './components/fund_performance/FundInfo.js';
import ClientInfo from './components/ClientInfo.js';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import FundPerformance from './components/FundPerformance.js'



function App() {

  
  return (
    <div className="App">
      <BrowserRouter><Switch>
        <Route path='/fund-info'><FundInfo/></Route>
        <Route path='/coin-info' component={CoinInfo}></Route>
        <Route path='/client-info'><ClientInfo/></Route>
        <Route path='/fund-performance'><FundPerformance/></Route>
      </Switch></BrowserRouter>
    </div>
  );
}

export default App;
