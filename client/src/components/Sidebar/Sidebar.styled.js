import styled from 'styled-components'

export const Aside = styled.aside`
  width: 20%;
  background: #11262C
`

export const RoomName = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 2rem;
  margin: 3rem;
  overflow: auto;
  // text-overflow: ellipsis;
`

export const Online = styled.ul`
  list-style: none;
  color: #fff;
  text-align: center;

  &::before {
    content: "Online";
    display: inline-block;
    margin-bottom: 1rem;
    border-bottom: 1px solid #fff;
    font-size: 1.3rem;
    padding-bottom: .3rem;

  }
`

export const User = styled.li`
  margin: 0 0 0 1.5rem;
  text-align: start;
  font-size: 1rem;
`