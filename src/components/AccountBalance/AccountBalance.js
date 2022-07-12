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
    return (
      <Section>Balance: ${this.props.amount}</Section>
    )
  }
}


AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}