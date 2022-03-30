import React from 'react';
import { Container, Description, Title, Form, Input, TextArea, Button } from './styles';

export default function ContactUs(){
  return(
    <Container>
      <Title>Contact us</Title>
      <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolor quam labore eaque recusandae alias eos consequuntur animi!</Description>

      <Form>
        <Input type="text" placeholder='Your Name' />
        <Input type="text" placeholder='Your Email Address'/>
        <br />
        <TextArea name="" id="" cols="30" rows="10" placeholder='Your Messages...'></TextArea>
        <br /> 
        <Button>Submit</Button>
      </Form>
    </Container>
  )
}