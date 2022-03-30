import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 15rem 150px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`

export const Title = styled.p`
  margin-bottom: 45px;
  font-size: 60px;
  font-weight: 700;
  line-height: 75px;
  background: linear-gradient(90deg, #00F0FF 0%, #5773FF 42.87%, #FF007A 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const CustomerContainer = styled.div`
  background-size: cover;
  background-color: #0F0B30;
  background: linear-gradient(90deg, rgba(0, 240, 255, 0.35) -60%, rgba(255, 0, 122, 0) 50%, rgba(255, 0, 122, 0.1) 160%);
  width: 450px;
  height: 300px;
  border-radius: 50px;
  padding: 40px;
  text-align: left;

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
`

export const CustomerInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
  line-height: 20px;

  p:nth-child(1){
    font-weight: 700;
    font-size: 21px;
    background: linear-gradient(90deg, #00F0FF 0%, #5773FF 46.87%, #FF007A 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  img {
    border-radius: 50%;
    width: 45px;
    margin-right: 15px;
  }
`

export const ReviewWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
`