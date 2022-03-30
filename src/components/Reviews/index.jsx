import React from 'react';

import Review from './Review';

import { Container, Title, ReviewWrapper} from './styles'

export default function Reviews(){
  return(
    <Container>
      <Title>Our Customer's <br/>Reviews</Title>
      <ReviewWrapper>
        <Review 
          image="images/customers/1.jpg"
          name="Karol Perl"
          position="Co-Founder"
        />
        
        <Review 
          image="images/customers/2.jpg"
          name="Josh Thomas"
          position="Complex Industries' CTO"
        />

        <Review 
          image="images/customers/3.jpg"
          name="Anthony Locke"
          position="Lawyer"
        />

        <Review 
          image="images/customers/4.jpg"
          name="James Thobias"
          position="Bios Engineering CEO"
        />

        <Review 
          image="images/customers/5.jpg"
          name="Flora de Souza"
          position="Bios Engineering Photographer"
        />

        <Review 
          image="images/customers/6.jpg"
          name="Carl Johnson"
          position="Fullstack Developer"
        />
        

      </ReviewWrapper>

      
    </Container>
  )
}