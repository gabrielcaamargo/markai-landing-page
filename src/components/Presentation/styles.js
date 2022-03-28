import styled from 'styled-components'

export const PresentationContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  align-items: center;
  margin: 13rem auto 0;
  line-height: 105px;
  
  @media (max-width: 600px){
    line-height: 75px;
    justify-content: center;
  }
`

export const HeadingText = styled.p`
  font-size: 4rem;

  @media (max-width: 600px){
    font-size: 2.5rem;
  }
`

export const MainText = styled.h2`
  font-weight: 700;
  font-size: 7rem;

  text-transform: uppercase;
  background: linear-gradient(90deg, #00F0FF 0%, #5773FF 46.87%, #FF007A 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 600px){
    font-size: 4rem;
    padding: 0 2rem;
    text-align: center;
  }
`

export const Description = styled.p`
  font-size: 20px;
  width: 30%;
  line-height: 30px;
  margin-top: 15px;

  @media (max-width: 600px){
    width: 70%;
  }
`


export const StyledButton = styled.button`
  --border-width: 2px;

  border-radius: 50px;
  border: 0;
  color: #FFF;
  font-weight: 700;
  margin-top: 2rem;
  padding: 1.2rem 4rem;
  text-align: center;
  font-size: 30px;
  background: linear-gradient(90deg, rgba(0,240,255,1) 0%, rgba(87,115,255,1) 60%, rgba(255,0,122,1) 100%);
  position: relative;
  cursor: pointer;

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
export const ArrowContainer = styled.div`
  margin: 9rem 0;
  width: 40px;
  height: 40px;
  background: none;
  border-bottom: 3px solid white;
  border-right: 3px solid white;
  transform: rotate(45deg);
`