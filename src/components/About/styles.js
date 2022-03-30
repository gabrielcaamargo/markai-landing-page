import styled from 'styled-components'

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & .secondElement{
    flex-direction: row-reverse;
  
    & img{
      margin-right: 230px;
    }

    & .description{
      width: 85%;
    }
  } 
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 15rem 150px;

`

export const ContentWrapper = styled.div`
  border-left: solid 3px #FFF;
  height: 100%;
  padding-left: 50px;
`

export const IntroText = styled.p`
  font-size: 32px;
`

export const Title = styled.p`
  font-weight: 700;
  font-size: 60px;
  background: linear-gradient(90deg, #00F0FF 05%, #5773FF 36.87%, #FF007A 85%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  line-height: 65px;
`

export const Description = styled.p`
  width: 70%;
`

export const Button = styled.button`
  --border-width: 2px;

  border-radius: 50px;
  border: 0;
  color: #FFF;
  font-weight: 700;
  margin-top: 2rem;
  padding: 15px 57px;
  text-align: center;
  font-size: 27px;
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

export const Image = styled.img`
  height: 100%;
`