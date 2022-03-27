import React from 'react'

import { List, ListItem } from './styles'

export default function Menu(){
  return(
    <List>
      <ListItem>Features</ListItem>
      <ListItem>Products</ListItem>
      <ListItem>Company</ListItem>
      <ListItem>Pricing</ListItem>
      <ListItem>Support</ListItem>
    </List>
  )
}