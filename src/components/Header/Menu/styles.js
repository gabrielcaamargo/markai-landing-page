import styled from 'styled-components'

export const ListItem = styled.li`
  cursor: pointer;
  list-style: none;
  margin-right: 2rem;
  transition: ease-in-out .3s;
  font-size: 20px;

  &:hover{
    color: #A9A9A9;
  }
`

export const List = styled.ul`
  display: flex;
  margin-left: 5rem;
`