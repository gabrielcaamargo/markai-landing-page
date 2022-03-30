import styled from 'styled-components'

export const IncreaseContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 15rem 150px;


    --border-width: 2px;

    border-radius: 40px;
    border: 0;
    background: linear-gradient(90deg, rgba(0,240,255,1) 0%, rgba(87,115,255,1) 60%, rgba(255,0,122,1) 100%);
    position: relative;

    z-index: 1;


    &::before{
      content: '';
      position: absolute;
      background: #1F1B42;
      display: block;
      height: calc(100% - calc(var(--border-width) * 2));
      width: calc(100% - calc(var(--border-width) * 2));

      top: var(--border-width);
      left: var(--border-width);

      border-radius: 40px;

      z-index: -1;
    }
`

export const BackgroundContain = styled.div`
  width: 100%;
  background-size: cover;
  background-color: #0F0B30;
  background: linear-gradient(90deg, rgba(0, 240, 255, 0.35) -60%, rgba(255, 0, 122, 0) 50%, rgba(255, 0, 122, 0.1) 160%);
  border-radius: 50px;
`

export const Content = styled.div`
  padding: 85px 100px;
  width: 85%;  
`

export const Title = styled.h4`
  font-size: 60px;
  font-weight: 700;
  background: linear-gradient(90deg, #00F0FF 05%, #5773FF 36.87%, #FF007A 85%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 85px;
`

export const Text = styled.p`
  font-size: 20px;
  width: 73%;
  margin: 35px 0;
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
    background: #1B395D;
    display: block;
    height: calc(100% - calc(var(--border-width) * 2));
    width: calc(100% - calc(var(--border-width) * 2));
    
    top: var(--border-width);
    left: var(--border-width);

    border-radius: 50px;

    z-index: -1;
}
`