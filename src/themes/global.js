import { createGlobalStyle } from "styled-components";

import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: #0F0B30;
    color: #fff;
    font-family: 'Poppins', sans-serif ;
  }
`

export const StyledButton = styled.button`
  --border-width: 2px;

  border-radius: 50px;
  border: 0;
  color: #FFF;
  font-weight: 700;
  padding: 6px 22px;
  text-align: center;
  font-size: 20px;
  background: linear-gradient(90deg, rgba(0,240,255,1) 0%, rgba(87,115,255,1) 60%, rgba(255,0,122,1) 100%);
  position: relative;

  z-index: 1;

  &::before{
    content: '';
    position: absolute;
    background: #0F0B30;
    display: block;
    height: calc(100% - calc(var(--border-width) * 2));
    width: calc(100% - calc(var(--border-width) * 2));
    
    top: var(--border-width);
    left: var(--border-width);

    border-radius: 50px;

    z-index: -1;
  }
`

export const  UnstyledButton = styled.button`
  color: #FFF;
  font-weight: 700;
  text-align: center;
  border: none;
  background: none;
  font-size: 20px;
  padding-right: 25px;
`