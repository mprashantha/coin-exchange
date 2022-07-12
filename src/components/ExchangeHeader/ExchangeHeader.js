import React, { Component } from 'react'
import styled from 'styled-components'

const Header = styled.header`
    background-color: #282c34;
    min-height: 10vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: calc(10px + 2vmin);
    color: white;
`;

const H1 = styled.h1`
    font-size: 4rem;
`;

export default class ExchangeHeader extends Component {
  render() {
    return (
        <Header className="App-header">
        <H1 className='App-title'>Coin Exchange</H1>
      </Header>
    )
  }
}
