import React from 'react';

import { HeadingText, MainText, Description, PresentationContainer, StyledButton, ArrowContainer} from './styles';


import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Presentation(){
  return(
    <PresentationContainer>
      <HeadingText>
        Let Ai help your
      </HeadingText>

      <MainText>
        Marketing Team
      </MainText>

      <Description>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem earum assumenda vel alias inventore veniam sed ipsa velit architecto. Natus.
      </Description>

      <StyledButton>
        Let's go  
          &nbsp;
          <FontAwesomeIcon icon={faArrowRightLong} />
      </StyledButton>

      <ArrowContainer />
      
    </PresentationContainer>
  )
}