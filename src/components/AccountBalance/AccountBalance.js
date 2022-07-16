import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components';

const Section = styled.section `
    border: 1px solid;
    font-size: 2rem;
    text-align: left;
    padding: 1.5rem 0 1.5rem 5 rem;
`;


export default function AccountBalance(props){
  const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance';
  let contentMessage;
  
  if (props.showBalance) {
    contentMessage = <>Balance: $ {props.amount}</>;
  }
  
  return (
    <Section>
      {contentMessage}
      <button onClick={props.handleBalanceVisibility}>{buttonText}</button>
    </Section>
  );
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}