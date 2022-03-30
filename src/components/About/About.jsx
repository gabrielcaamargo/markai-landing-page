import React from 'react';
import { Container, ContentWrapper, IntroText, Title, Description, Button } from './styles';

export default function About(props){
  return(
    <Container>
      <ContentWrapper>
        <IntroText>{props.introText}</IntroText>
        <Title>{props.highlighted}</Title>

        <Description className={props.class}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id reprehenderit repellat, vero provident impedit reiciendis nesciunt autem quisquam aperiam, dicta perferendis earum pariatur. Fugit a temporibus veritatis sint cumque, voluptatum, natus minima sequi facere eos ut, voluptatem incidunt magni unde!</Description>

        <Button>Learn More...</Button>
    </ContentWrapper>

    <img src={props.image} alt={props.alternativeText} className="image"/>
    </Container>

    
  )
}