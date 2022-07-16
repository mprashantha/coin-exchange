import PropTypes from 'prop-types'
import React from 'react'
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const Table = styled.table`
    margin: 50px auto 50px auto;
    display: inline-block;
    font-size: 1.4rem;
`;

export default function CoinList(props) {
  return (
      <Table>
      <thead>
        <tr className='coin-row'>
            <td>Name</td>
            <td>Ticker</td>
            {props.showBalance ? <td>Balance</td> : null}
            <td>Price</td>
            <td>Action</td>
        </tr>
      </thead>
        <tbody>
          {
            props.coinData.map(element => 
              <Coin key={element.ID} {...element} handleRefresh={props.handleRefresh} showBalance={props.showBalance}/>   //name={element.name} ticker={element.ticker} price={element.price} />
            )
          }
        </tbody>
      </Table>
  );
}
