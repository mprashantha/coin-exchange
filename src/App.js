import React, {useState, useEffect} from 'react';
import CoinList from "./components/CoinList/CoinList"
import AccountBalance from "./components/AccountBalance/AccountBalance"
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';
import styled from 'styled-components';
import axios from 'axios';

const Div = styled.div`
  text-align: center;
  background-color: rgb(20, 56, 97);
  color: #cccccc;
`;

const formatPrice = price => parseFloat(Number(price).toFixed(4));

function App (props) {
  const [balance, setBalance] = useState(1000000);
  const [showBalance, setShowBalance] = useState(true);
  const [coinData, setCoinData] = useState([]);

  const componentDidMount = async () => {
    const response = await axios.get('https://api.coinpaprika.com/v1/coins')

    const coinIds = response.data.slice(0, 10).map(coin => coin.id);

    const tickerURL = 'https://api.coinpaprika.com/v1/tickers/';
    const promises = coinIds.map(id => axios.get(tickerURL + id));
    const coinDataResponse = await Promise.all(promises);

    const coinPriceData = coinDataResponse.map(function(response) {
      const coin = response.data;
      return{
        ID: coin.id,
        name: coin.name,
        ticker: coin.symbol,
        balance: 0,
        price: formatPrice(coin.quotes.USD.price)
      }

    })

    setCoinData(coinPriceData);
  }

  useEffect(function () {
    if (coinData.length === 0) {
      componentDidMount();
    } else {

    }
  });



  /*
  alternative to AXios
  fetch("https://api.coinpaprika.com/v1/coins")
    .then(response => response.json())
    .then(coins => {
    for(let i=0; i< 5; ++i){
      console.log(coins[i].name, coins[i].symbol)
    }
  })*/

  const handleRefresh = async (refreshID) => {
    const tickerURL = `https://api.coinpaprika.com/v1/tickers/${refreshID}`;
    const response = await axios.get(tickerURL);
    const newPrice = formatPrice(response.data.quotes.USD.price);
    
    const newCoinData = coinData.map(function(values) { 
      let newValues = {...values};
      if(newValues.ID === refreshID){
        newValues.price = newPrice;
      }
      return newValues;
    });

    setCoinData(newCoinData);
  }

  const handleBalanceVisibility = () => {
        setShowBalance(!showBalance)
  }
    
  return (
    <Div>
      <ExchangeHeader />
      <AccountBalance amount={balance} showBalance={showBalance} handleBalanceVisibility={handleBalanceVisibility}/> 
      <CoinList coinData={coinData} showBalance={showBalance} handleRefresh={handleRefresh} />
    </Div>
  );
}

export default App;
