import React, {useState} from "react"

import { FormContainer, Form, Title, Input, StyledLink, SignInButton } from './SignIn.styled'

const SignIn = () => {
  const [ username, setUsername ] = useState('')
  const [ roomname, setRoomname ] = useState('')

  const handleOnClick = (e) => {
    if (!username || !roomname) {
      e.preventDefault()
    }
  }

  return (
    <FormContainer>
      <Form>
        <Title>Sign In</Title>
        <Input type="text" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)} />
        <Input type="text" placeholder="Enter Room Name" onChange={(e) => setRoomname(e.target.value)} />
        <StyledLink onClick={handleOnClick} to={`/chat?name=${username}&room=${roomname}`}>
          <SignInButton type="submit">Sign In</SignInButton>
        </StyledLink>
      </Form>
    </FormContainer>
  )
}

export default SignIn
