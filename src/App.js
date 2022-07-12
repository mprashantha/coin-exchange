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
  }

  render() {
    return (
      <Div>
        <ExchangeHeader />
        <AccountBalance amount={this.state.balance} /> 
        <CoinList coinData={this.state.coinData} />
      </Div>
    );
  }
}

export default App;
