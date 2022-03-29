import React from 'react';

import { Feature, FeatureContent } from './styles';

export default function FeatureComponent(props){
  return(
    <Feature>
      <FeatureContent>
        <img src={props.icon} alt="featured" />
        <p>{props.text}</p>
      </FeatureContent>
    </Feature>
  )
}