import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const Table = styled.table`
    margin: 50px auto 50px auto;
    display: inline-block;
    font-size: 1.4rem;
`;

export default class CoinList extends Component {
  render() {
    return (
        <Table>
        <thead>
          <tr className='coin-row'>
              <td>Name</td>
              <td>Ticker</td>
              {this.props.showBalance ? <td>Balance</td> : null}
              <td>Price</td>
              <td>Action</td>
          </tr>
        </thead>
          <tbody>
            {
              this.props.coinData.map(element => 
                <Coin key={element.ticker} {...element} handleRefresh={this.props.handleRefresh} showBalance={this.props.showBalance}/>   //name={element.name} ticker={element.ticker} price={element.price} />
              )
            }
          </tbody>
        </Table>
    );
  }
}
