import React from 'react';
import { StyledButton, UnstyledButton } from '../../../themes/global';

export default function Login(){
  return(
    <div>
      <UnstyledButton>Login</UnstyledButton>
      <StyledButton>Register</StyledButton>
    </div>
  )
}