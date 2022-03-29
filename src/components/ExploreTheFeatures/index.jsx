import React from 'react';

import { FeatureWrapper, FeaturesContainer, FeaturesTitle, FeaturesDescription,  } from './styles'

import FeatureComponent from './Feature';

export default function ExploreTheFeatures(props){
  return(
 
      <FeaturesContainer>
        <FeaturesTitle>Explore the features!</FeaturesTitle>
        <FeaturesDescription>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, nobis!</FeaturesDescription>

      <FeatureWrapper>
        <FeatureComponent 
          icon={'src/components/ExploreTheFeatures/FeaturesIcons/world.svg'}
          text='Create Ai Based Website'
        />

        <FeatureComponent 
          icon={'src/components/ExploreTheFeatures/FeaturesIcons/glass.svg'}
          text='Write SEO Friendly Contents'
        />

        <FeatureComponent 
          icon={'src/components/ExploreTheFeatures/FeaturesIcons/engine.svg'}
          text="Maintain site with Artificial Intelligence"
        />

        <FeatureComponent 
          icon={'src/components/ExploreTheFeatures/FeaturesIcons/graphics.svg'}
          text="Response customer with analyzing data"
        />
        
        <FeatureComponent 
          icon={'src/components/ExploreTheFeatures/FeaturesIcons/computer.svg'}
          text="Show custom interface with Ai"
        />
      </FeatureWrapper>
    </FeaturesContainer>
  )
}