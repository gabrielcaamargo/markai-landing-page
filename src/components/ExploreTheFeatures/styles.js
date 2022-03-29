import styled from 'styled-components'

export const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 12rem 15rem;
`

export const FeaturesTitle = styled.h3`
  font-size: 4rem;
  font-weight: 700;
  background: linear-gradient(90deg, #00F0FF 0%, #5773FF 15.87%, #FF007A 40%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const FeaturesDescription = styled.p`
  font-size: 1.2rem; 
`

export const Feature = styled.div`
  width: 440px;
  height: 370px;
  margin-top: 50px;
  margin-bottom: -50px;
  font-size: 32px;
  font-weight: 700;
  display: flex;
  justify-content: flex-start;

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
export const FeatureContent = styled.div`
  font-size: 32px;
  width: 90%;
  margin: 80px 0px auto auto;
`

export const FeatureWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
`