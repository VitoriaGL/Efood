import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  HeaderContainer,
  NavBar,
  NavLinks,
  NavLink,
  Logo,
  CartInfo
} from '../styles/HeaderStyles'

const Header = () => {
  const location = useLocation()

  return (
    <HeaderContainer>
      <NavBar>
        <NavLinks>
          <NavLink to="/" $isActive={location.pathname === '/'}>
            Home
          </NavLink>
          <NavLink to="/perfil" $isActive={location.pathname === '/perfil'}>
            Perfil
          </NavLink>
        </NavLinks>
        
        <Logo>efood!!</Logo>
        
        <NavLinks>
          <NavLink to="/restaurantes">Restaurantes</NavLink>
          <CartInfo>0 produto(s) no carrinho</CartInfo>
        </NavLinks>
      </NavBar>
    </HeaderContainer>
  )
}

export default Header

