import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled from 'styled-components';

const Section = styled.section `
    border: 1px solid;
    font-size: 2rem;
    text-align: left;
    padding: 1.5rem 0 1.5rem 5 rem;
`;


export default class AccountBalance extends Component {
  render() {
    const buttonText = this.props.showBalance ? 'Hide Balance' : 'Show Balance';
    let contentMessage;
    if (this.props.showBalance) {
      contentMessage = <>Balance: $ {this.props.amount}</>;
    }
    return (
      <Section>
        {contentMessage}
        <button onClick={this.props.handleBalanceVisibility}>{buttonText}</button>
      </Section>
    )
  }
}


AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}