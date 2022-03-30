import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  line-height: 85px;
  margin: 150px 0;
`

export const IntroductionText = styled.p`
  font-size: 32px;
`

export const TextPartner = styled.h3`
  font-size: 60px;
  font-weight: 700;
  background: linear-gradient(90deg, #00F0FF 05%, #5773FF 36.87%, #FF007A 85%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
`

export const Description = styled.p`
  font-size: 20px;
  width: 30%;
  margin: 0 auto;
  line-height: 30px;
  margin-bottom: 80px;
`

export const Image = styled.img`
  cursor: pointer;
`