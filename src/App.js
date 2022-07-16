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

  state ={
    balance: 1000000,
    showBalance: true,
    coinData : [
      {
        name: "Bitcoin",
        ticker: "BTC",
        balance: 0.5,
        price: 321
      },
      {
        name: "Ethereum",
        ticker: "ETH",
        balance: 0.7,
        price: 456
      },
      {
        name: "Matic",
        ticker: "MAT",
        balance: 0.3,
        price: 123
      },
      {
        name: "Cordano",
        ticker: "CRD",
        balance: 0,
        price: 143
      }
    ]
  }

  handleRefresh = (tickerChanged) => {
    const newCoinData = this.state.coinData.map(function(values) { 
      let newValues = {...values};
      if(newValues.ticker === tickerChanged){
        const randomPercent = 0.995 + Math.random() * 0.01;
        newValues.price *= randomPercent;
      }
      return newValues;
    });

    this.setState({coinData: newCoinData})
  }

  handleBalanceVisibility = () => {
    this.setState( function (oldState) {
      return {
        ...oldState, 
        showBalance: !oldState.showBalance
      }
    });
  }
    
  render() {
    return (
      <Div>
        <ExchangeHeader />
        <AccountBalance amount={this.state.balance} showBalance={this.state.showBalance} handleBalanceVisibility={this.handleBalanceVisibility}/> 
        <CoinList coinData={this.state.coinData} showBalance={this.state.showBalance} handleRefresh={this.handleRefresh} />
      </Div>
    );
  }
}

export default App;
