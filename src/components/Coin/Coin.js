import React, { Component } from 'react'
import "./Coin.css";
import PropTypes from "prop-types";


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
        <tr className='coin-row'>
            <td>{this.props.name}</td>
            <td>{this.props.ticker}</td>
            <td>{this.state.price}</td>
            <td>
              <form action='#' method='POST'>
                <button onClick={this.handleClick}>refresh</button>
              </form>
            </td>
        </tr>
    )
  }
}





Coin.propTypes = {
  name: PropTypes.string.isRequired,
  ticker: PropTypes.string,
  price: PropTypes.number,
}
