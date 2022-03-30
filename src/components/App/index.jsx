import React from 'react';

import { Container } from './styles';

import Header from '../Header';
import Presentation from '../Presentation';
import MakeTheDifference from '../MakeTheDifference';
import ExploreTheFeatures from '../ExploreTheFeatures';
import VideoSection from '../VideoSection';
import About from '../About';
import { AboutWrapper } from '../About/styles';
import Increase from '../Increase';


export default function App(){
  return(
    <Container>
      <Header />
      <Presentation />
      <MakeTheDifference />
      <ExploreTheFeatures />
      <VideoSection /> 
      <AboutWrapper>
        <About />
      </AboutWrapper>
      <Increase />
    </Container>
  )
}