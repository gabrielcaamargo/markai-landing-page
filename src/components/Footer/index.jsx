import React from 'react';

import { Container, ContentContainer, Title, Text, Button, SocialMedia, LinksContainer, ListContainer , List, ListItem } from './styles';

export default function Footer(){
  return(
    <Container>
      <ContentContainer>
        <Title>Markai</Title>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum modi quia dolores corporis quae quaerat, aspernatur iste dolor perferendis architecto.</Text>
        <Button>Let's go &rarr;</Button>
        <SocialMedia>
          <i><img src="src/components/Footer/icons/linkedin.svg" alt="" /></i>
          <i><img src="src/components/Footer/icons/facebook.svg" alt="" /></i>
          <i><img src="src/components/Footer/icons/cb.svg" alt="" /></i>
          <i><img src="src/components/Footer/icons/instagram.svg" alt="" /></i>
          <i><img src="src/components/Footer/icons/twitter.svg" alt="" /></i>
        </SocialMedia>
      </ContentContainer>

      <LinksContainer>
      <ListContainer>
        <List>
          <ListItem>Site</ListItem>
          <ListItem>Features</ListItem>
          <ListItem>Company</ListItem>
          <ListItem>Pricing</ListItem>
          <ListItem>Support</ListItem>
        </List>
        <List>
          <ListItem>Company</ListItem>
          <ListItem>About Us</ListItem>
          <ListItem>Our Team</ListItem>
          <ListItem>Our Story</ListItem>
          <ListItem>Career</ListItem>
        </List>
        </ListContainer>

        <ListContainer>
        <List style={{marginBottom: 55}}>
          <ListItem>Legale</ListItem>
          <ListItem>Privacy Policy</ListItem>
          <ListItem>Facebook</ListItem>
          <ListItem>Company Policy</ListItem>
        </List>
        <List>
          <ListItem>Follow us one</ListItem>
          <ListItem>Twitter</ListItem>
          <ListItem>Facebook</ListItem> 
          <ListItem>Linkedin</ListItem>
        </List>
        </ListContainer>
      </LinksContainer>

    </Container>
  )
}