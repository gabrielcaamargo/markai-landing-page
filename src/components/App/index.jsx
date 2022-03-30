import React from 'react';

import Header from '../Header';
import Presentation from '../Presentation';
import MakeTheDifference from '../MakeTheDifference';
import ExploreTheFeatures from '../ExploreTheFeatures';
import VideoSection from '../VideoSection';
import About from '../About';

export default function App(){
  return(
    <>
      <Header />
      <Presentation />
      <MakeTheDifference />
      <ExploreTheFeatures />
      <VideoSection /> 
      <About />
    </>
  )
}