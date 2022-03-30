import React from 'react';

import { CustomerContainer, BackgroundContain, CustomerInfo } from './styles'

export default function Review(props){
  return(
    <BackgroundContain className='bah'>
    <CustomerContainer>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus maxime illum excepturi perferendis voluptatem similique nihil ad quam consequuntur exercitationem fugiat minima quos facere, cumque porro veritatis, ipsum ea inventore?</p>
      <CustomerInfo>
        <img src={props.image} alt="" />
        <div>
          <p>{props.name}</p>
          <p>{props.position}</p>
        </div>
      </CustomerInfo>
    </CustomerContainer>
  </BackgroundContain>
  )
}