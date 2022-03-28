import React from 'react';
import { StyledButton, UnstyledButton } from './styles';

export default function Login(){
  return(
    <div>
      <UnstyledButton>Login</UnstyledButton>
      <StyledButton>Register</StyledButton>
    </div>
  )
}