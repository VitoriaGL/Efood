import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`

export const NavBar = styled.nav`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.$isActive ? '#2E86AB' : '#333'};
  font-weight: ${props => props.$isActive ? '600' : '400'};
  font-size: 1rem;
  position: relative;
  transition: color 0.3s;

  &:hover {
    color: #2E86AB;
  }

  ${props => props.$isActive && `
    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      right: 0;
      height: 2px;
      background-color: #2E86AB;
    }
  `}
`

export const Logo = styled.div`
  background-color: #E63946;
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 4px;
  text-align: center;
  min-width: 150px;
  box-shadow: 0 2px 4px rgba(230, 57, 70, 0.3);
`

export const CartInfo = styled.span`
  color: #666;
  font-size: 0.9rem;
`

