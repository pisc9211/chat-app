import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100vh;
`

export const Input = styled.input`
  display: block;
  padding: 1rem;
  font-size: 1rem;
  margin: 1rem;
  border-radius: 5px;
  box-shadow: none;
  border: 1px solid black;

  &:focus {
    outline: none;
  }
`