import React from 'react';

import Header from '../Header';
import Presentation from '../Presentation';
import MakeTheDifference from '../MakeTheDifference';
import ExploreTheFeatures from '../ExploreTheFeatures';

import { FeatureWrapper } from '../ExploreTheFeatures/styles';

export default function App(){
  return(
    <>
      <Header />
      <Presentation />
      <MakeTheDifference />
      <ExploreTheFeatures />
    </>
  )
}