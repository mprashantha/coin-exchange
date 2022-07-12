import React, { Component } from 'react'
import PropTypes from "prop-types";
import styled from 'styled-components';

const Td = styled.td `
  border: 1px solid #cccccc;
  width: 25vh;
`;

export default class Coin extends Component {
  constructor (props){  
    super(props);
    this.state = {
      price: this.props.price
    }
    this.handleClick = this.handleClick.bind(this);
  }
/*
  componentDidMount() { //this is called once all the components are mounted on DOM
    const callback = () => {
      const randomPercent = 0.995 + Math.random() * 0.01;
      this.setState( function(oldState) {
        return {
          price: oldState.price * randomPercent
        };
      });      
    }
    setInterval( callback, 1000); //test function to change the price frequently	
  }
*/
  handleClick(event) {
    event.preventDefault();

    const randomPercent = 0.995 + Math.random() * 0.01;
    this.setState( function(oldState) {
      return {
        price: oldState.price * randomPercent
      };
    }); 
  }

  render() {
    return (
        <tr>
            <Td>{this.props.name}</Td>
            <Td>{this.props.ticker}</Td>
            <Td>{this.state.price}</Td>
            <Td>
              <form action='#' method='POST'>
                <button onClick={this.handleClick}>refresh</button>
              </form>
            </Td>
        </tr>
    )
  }
}





Coin.propTypes = {
  name: PropTypes.string.isRequired,
  ticker: PropTypes.string,
  price: PropTypes.number,
}
