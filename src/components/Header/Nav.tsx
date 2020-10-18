import React from 'react'
import styled from 'styled-components'
import TranslatedText from '../TranslatedText'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledAbsoluteLink href="https://kiwiswap.finance/farms" target="_blank" rel="noopener noreferrer">
        <TranslatedText translationId={2}>Farm</TranslatedText>
      </StyledAbsoluteLink>
        <StyledAbsoluteLink href="https://voting.kiwiswap.finance" target="_blank" rel="noopener noreferrer">
        <TranslatedText translationId={12}>Voting</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="#soonTM" target="_blank" rel="noopener noreferrer">
        <TranslatedText translationId={12}>Staking</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://info.kiwiswap.finance" target="_blank" rel="noopener noreferrer">
        <TranslatedText translationId={14}>Analytics</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://www.binance.org/en/panama" target="_blank" rel="noopener noreferrer" className="active">
        <TranslatedText translationId={8}>ERC20Bridge</TranslatedText>
      </StyledAbsoluteLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  font-size: 20px;
  line-height: 45px;
  font-weight: 500;
  @media (max-width: 600px) {
    display: none;
  }
`

const StyledAbsoluteLink = styled.a`
  color: #7d962a;
  padding-left: 10px;
  padding-right: 10px;
  text-decoration: none;
  &:hover {
    color: #506604;
  }
  &.active {
    color: #506604;
  }
  @media (max-width: 400px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`

export default Nav
