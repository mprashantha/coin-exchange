import React from 'react'
import PropTypes from "prop-types";
import styled from 'styled-components';

const Td = styled.td `
  border: 1px solid #cccccc;
  width: 25vh;
`;

function Coin(props) {

  const handleClick = (event) => {
    event.preventDefault();
    props.handleRefresh(props.ID);
  }

  return (
    <tr>
        <Td>{props.name}</Td>
        <Td>{props.ticker}</Td>
        {props.showBalance ? <Td>{props.balance}</Td> : null}
        <Td>${props.price}</Td>
        <Td>
          <form action='#' method='POST'>
            <button onClick={handleClick}>refresh</button>
          </form>
        </Td>
    </tr>
  );

}

Coin.propTypes = {
  name: PropTypes.string.isRequired,
  ticker: PropTypes.string,
  price: PropTypes.number,
}

export default Coin;