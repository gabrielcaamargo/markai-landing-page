import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 15rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`

export const Title = styled.h3`
  background: linear-gradient(90deg, #00F0FF 0%, #5773FF 40%, #FF007A 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 60px;
  font-weight: 700;
`

export const Description = styled.p`
  font-size: 20px;  
  width: 65%;
  text-align: center;
  margin: 0 auto;
`

export const Form = styled.div`
  margin: 55px 0 150px;
  padding:  0 10rem;
`

export const Input = styled.input`
  border: double 3px transparent;
  border-radius: 50px;
  background-image: linear-gradient(#0F0B30, #0F0B30), linear-gradient(90deg, rgba(0,240,255,1) 0%, rgba(87,115,255,1) 60%, rgba(255,0,122,1) 100%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  padding: 20px 30px;
  width: 48%;
  margin-right: 10px;
  outline: none;
  color: #FAFAFA;
  font-family: 'Montserrat', sans-serif;
  font-size: 17px;
  margin-bottom: 30px;
`

export const TextArea = styled.textarea`
  border: double 3px transparent;
  border-radius: 30px;
  background-image: linear-gradient(#0F0B30, #0F0B30), linear-gradient(90deg, rgba(0,240,255,1) 0%, rgba(87,115,255,1) 60%, rgba(255,0,122,1) 100%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  width: 97%;
  padding: 20px 30px;
  outline: none;
  color: #FAFAFA;
  font-family: 'Montserrat', sans-serif;
  font-size: 17px;
  resize: none;
`

export const Button = styled.button`
  --border-width: 2px;

  border-radius: 50px;
  border: 0;
  color: #FFF;
  font-weight: 700;
  margin-top: 2rem;
  padding: 15px 80px;
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