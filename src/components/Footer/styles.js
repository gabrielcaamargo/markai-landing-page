import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 180px 15rem;
  background-color: #1B173B;
  background-size: 100vw;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`

export const Title = styled.h3`
  font-size: 80px;
  font-weight: 700;
  background: linear-gradient(90deg, #00F0FF 0%, #5773FF 19%, #FF007A 90%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 15px;
`

export const Button = styled.button`
  --border-width: 2px;
  width: 50%;
  border-radius: 50px;
  border: 0;
  color: #FFF;
  font-weight: 700;
  margin-top: 2rem;
  padding: 12px 6px;
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

export const Text = styled.p`
  width: 75%;
`

export const SocialMedia = styled.div`
  margin-top: 34px;
  
  i{
    margin-right: 16px;
    cursor: pointer;
  }
`

export const LinksContainer = styled.div`
  display: flex;
  width: 40%;

`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0px 0px 30px 124px;

`

export const ListItem = styled.li`
   :first-child {
    font-weight: 700;
  }

  list-style: none;
`


