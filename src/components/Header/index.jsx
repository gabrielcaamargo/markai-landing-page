import React from 'react'

import { HeaderContainer } from './styles'

import Logo from './Logo'
import Menu from './Menu'
import Login from './Login'

export default function Header(){
  return(
    <HeaderContainer>
      <Logo />
      <Menu />
      <Login />
    </HeaderContainer>
  )
}