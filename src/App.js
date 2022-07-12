import './App.css';
import Coin from "./components/Coin/Coin"
import AccountBalance from "./components/AccountBalance/AccountBalance"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Coin Exchange
        </p>
      </header>
      <AccountBalance amount={10000} /> 
      <table className='coin-table'>
        <thead>
          <tr className='coin-row'>
              <td>Name</td>
              <td>Ticker</td>
              <td>Price</td>
              <td>Refresh</td>
          </tr>
        </thead>
          <tbody>
            <Coin name="Bitcoin" ticker="BTC" price={114}/>
            <Coin name="Ether" ticker="ETH" price={124}/>
            <Coin name="MATIC" ticker="MAT" price={12}/>
          </tbody>
        </table>
    </div>
  );
}

export default App;
