import styled from 'styled-components'

export const Credits = styled.div`
  display: flex;
  justify-content: center;
  background-color: #0F0B30;
  color: #FFF;
  padding: 5px 0;
  
  & a{
    background: linear-gradient(90deg, #00F0FF 0%, #5773FF 46.87%, #FF007A 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`