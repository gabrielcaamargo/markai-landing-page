import React from 'react';

import { Container, Description, IntroductionText, TextPartner, Image } from './styles';

export default function VideoSection(){
  return(
    <Container>
      <IntroductionText>Let's introduce with</IntroductionText>
      <TextPartner>Your Writing Partner!</TextPartner>
      <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit magnam placeat blanditiis veniam nulla! Vel!</Description>

      <div className='video'>
        <Image src="src/components/VideoSection/images/video_thumbnail.png" alt="" />
      </div>
    </Container>
  )
}