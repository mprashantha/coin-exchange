import React from 'react';
import CoinList from "./components/CoinList/CoinList"
import AccountBalance from "./components/AccountBalance/AccountBalance"
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';
import styled from 'styled-components';

const Div = styled.div`
  text-align: center;
  background-color: rgb(20, 56, 97);
  color: #cccccc;
`;

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      balance: 1000000,
      coinData : [
        {
          name: "Bitcoin",
          ticker: "BTC",
          price: 321
        },
        {
          name: "Ethereum",
          ticker: "ETH",
          price: 456
        },
        {
          name: "Matic",
          ticker: "MAT",
          price: 123
        },
        {
          name: "Cordano",
          ticker: "CRD",
          price: 143
        }
      ]
    }
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  handleRefresh(tickerChanged){
    const newCoinData = this.state.coinData.map(function({ticker, name, price}) { 
      let newPrice = price;
      if(ticker === tickerChanged){
        const randomPercent = 0.995 + Math.random() * 0.01;
        newPrice = newPrice * randomPercent;
      }
      return {
          ticker, name, price: newPrice
      }
    });

    this.setState({coinData: newCoinData})
  }
    
  render() {
    return (
      <Div>
        <ExchangeHeader />
        <AccountBalance amount={this.state.balance} /> 
        <CoinList coinData={this.state.coinData} handleRefresh={this.handleRefresh} />
      </Div>
    );
  }
}

export default App;
