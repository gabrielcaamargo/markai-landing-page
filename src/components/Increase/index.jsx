import React from 'react';
import { IncreaseContainer, BackgroundContain,Content, Title, Text, Button } from './styles';

export default function Increase(){
  return(
    <IncreaseContainer>
    <BackgroundContain>
      <Content>
        <Title>Increase your sales by analyzing your colleced data!</Title>

        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolorum ea ducimus assumenda recusandae! Voluptatibus soluta saepe rem vel laborum consequatur, a, perferendis est sed magni ea unde nostrum corrupti!</Text>
        
        <Button>Learn More...</Button>
      </Content>
      </BackgroundContain>
    </IncreaseContainer>
  )
}